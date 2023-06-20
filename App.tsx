import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

export default function App() {
  const [data, setData] = useState<string | ArrayBuffer>();

  const fetchData = async () => {
    try {
      const response = await RNFetchBlob.fetch(
        'GET',
        'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1',
      );
      // console.log(response.data);
      const arrayBuffer = new Blob([response.data]);
      console.log(arrayBuffer);
      const reader = new FileReader();
      reader.readAsDataURL(arrayBuffer);
      reader.onloadend = () => {
        const base64data = reader.result;
        console.log(base64data);
        setData(base64data);
      };
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dat = [
    {
      url: 'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1',
      type: 'arrayBuffer',
    },
    {
      url: 'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61',
      type: 'normal',
    },
  ];

  const renderItem = ({item}: {item: {url: string; type: string}}) => {
    if (item.type === 'arrayBuffer') {
      return (
        <Image source={{uri: data ? data : dat[1].url}} style={styles.image} />
      );
    } else {
      return <Image source={{uri: item.url}} style={styles.image} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Images</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={dat}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  list: {margin: 40, flex: 1},
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontSize: 34, fontWeight: 'bold'},
  image: {width: 300, height: 100},
});
