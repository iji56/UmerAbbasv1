import axios from 'axios';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import base64 from 'react-native-base64';

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log('hi');
    const responseArray = await Promise.all(
      data.map(async item => {
        if (item.type === 'arrayBuffer') {
          console.log('arrayBuffer');
          const response = await RNFetchBlob.fetch('GET', item.url);
          const base64Image = base64.encode(response.data);
          return {...item, data: base64Image};
        }
        return item;
      }),
    );
    setData(responseArray);
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

  const renderItem = ({item}) => {
    if (item.type === 'arrayBuffer') {
      return (
        <Image
          source={{uri: `data:image/jpeg;base64,${item.data}`}}
          style={{width: 100, height: 100}}
        />
      );
    } else {
      return (
        <Image source={{uri: item.url}} style={{width: 300, height: 100}} />
      );
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
});
