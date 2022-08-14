import * as React from 'react';
import { Image, StyleSheet, Text, View,TouchableHighlight, useWindowDimensions, ScrollView, TextInput, Button, TouchableOpacity,Pressable, FlatList, Alert, LogBox} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
Ionicons.loadFont();

//screens
import HomeScreen from './screens/Homescreen';
import SearchScreen from './screens/Searchscreen';
import MovieDetails from './screens/MovieDetails';

const Stack = createNativeStackNavigator();

function MyStack() {
    const navigation = useNavigation(); 
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieApp" component={HomeScreen} options={{ title: 'MovieApp', headerStyle:{backgroundColor:'#0a1a34'}, headerTintColor:'white', headerRight: () => (
            <Ionicons name='search-outline' size={25} color='#FFF' onPress={() => navigation.navigate('Search')}/>
      )}} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search', headerStyle:{backgroundColor:'#0a1a34'},headerBackTitleVisible: false, headerTintColor:'white'}} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Movie Details', headerStyle:{backgroundColor:'#0a1a34'},headerBackTitleVisible: false, headerTintColor:'white'}} />
    </Stack.Navigator>
    
  );
}

export default MyStack;