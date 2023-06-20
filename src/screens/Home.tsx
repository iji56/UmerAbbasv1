import {
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';

const deviceWidth = Dimensions.get('window').width + 50;

type HomeProps = {
  navigation: NavigationProp<Record<string, object>>;
};

export default function Home({navigation}: HomeProps) {
  return (
    <ImageBackground
      source={require('../../resources/background.png')}
      imageStyle={styles.imageStyle}
      style={styles.container}>
      <View
        style={[
          styles.circleContainer,
          {height: deviceWidth, width: deviceWidth},
        ]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate({name: 'Accounts', params: {}})}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emptyView} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.6,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  circleContainer: {
    backgroundColor: '#ffffff',
    borderRadius: deviceWidth / 2,
    marginBottom: -deviceWidth / 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF8A1F',
    paddingVertical: 15,
    borderRadius: 30,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
  emptyView: {
    flex: 1,
  },
});
