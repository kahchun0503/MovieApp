import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './Navigation/MainContainer';

export default function App() {
  return (
    <NavigationContainer>

      <MainContainer/>
      
    </NavigationContainer>
  );
}
