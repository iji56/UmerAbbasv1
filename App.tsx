import {View} from 'react-native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#000000',
      }}>
      <MainNavigator />
    </View>
  );
}
