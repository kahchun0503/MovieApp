import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,TouchableHighlight, useWindowDimensions, ScrollView, TextInput, Button, TouchableOpacity,Pressable, FlatList, Alert, LogBox} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import customData from '../../movie_db.json';

Ionicons.loadFont();

function SearchScreen ({navigation}) {

    const route = useRoute();
    const isFocused = useIsFocused(); //used to refresh upon entering new screen
    const [movieList, setmovieList] = React.useState(customData);
    const [search, setNewSearch] = React.useState("");

    const filteredMovie = !search
    ? movieList
    : movieList.filter((filterTitle) =>
        filterTitle.title.toLowerCase().includes(search.toLowerCase())
      );

      const handleSearchChange = (text) => {
        setNewSearch(text)
      };

return(
    <View style={styles.root}>

            <View style={styles.containerSearch}>
                <Ionicons name='search-outline' size={25} color='grey' style={{paddingLeft:10, paddingRight:10}} />
                <TextInput placeholder='Search Movie Name'
                     onChangeText ={(text) => handleSearchChange(text)}
                />
            </View>

            <FlatList  
                data={filteredMovie}
                style={{paddingTop:20}}
                    keyExtractor= {(key) => {
                        return key.id;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator}/>
                        )
                    }}
                    renderItem={({item}) => {
                        return (

                            <TouchableOpacity style={styles.scroll}>
                                <Image style={styles.poster} resizeMode='contain' source={{
                                    uri:item.posterUrl
                                }}/>
                                <View>
                                    <Text style={styles.movietitle} >{item.title}</Text>
                                    <Text style={styles.movieActor} >{item.actors}</Text>
                                    <Text style={styles.movieTime} >{item.runtime} Minutes</Text>

                                </View>

                            </TouchableOpacity>
                        
                        )
            }}/>       

    </View>
)

}

const styles = StyleSheet.create({

    root:{
        backgroundColor:'#0a1a34',
        height:'100%',
        padding:20,
    },

    containerSearch:{
        flexDirection:'row',
        width: '100%',
        height: 35,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems:'center',
        marginBottom:20,
    },

    scroll:{
        height:150,
        width:'100%',
        flexDirection: 'row',
    },

    poster:{
        height:130,
        width:80,
        borderRadius:10,
        marginRight:20
    },

    movietitle:{
        color:'white',
        fontSize:18,
        fontWeight:'500',
    },

    movieActor:{
        color:'grey',
        fontSize:14,
        fontWeight:'300',
        paddingTop:5
    },

    movieTime:{
        color:'grey',
        fontSize:14,
        fontWeight:'300',
        paddingTop:10
    }



});

export default SearchScreen;
