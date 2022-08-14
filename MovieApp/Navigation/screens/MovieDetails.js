import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,TouchableHighlight, useWindowDimensions, ScrollView, TextInput, Button, TouchableOpacity,Pressable, FlatList, Alert, ImageBackground} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function MovieDetails ({navigation}) {

    const route = useRoute();
    const {height} = useWindowDimensions();

return(
    <View style={styles.root}>

        <View style={styles.row}>

            <Image source={{ uri: route.params.posterUrl }} resizeMode="stretch" style={styles.image}/>

            <View>
                <Text style={styles.movietitle}>{route.params.title}</Text>
                <Text style={styles.movieYear}>Release Year:  {route.params.year}</Text>
                <Text style={styles.movieYear}>Movie Runtime: {route.params.runtime} Minutes</Text>
            </View>

        </View>

        <View style={styles.container}>

            <View>
                <Text style={styles.title}>Director:</Text>
                <Text style={styles.des}>{route.params.director}</Text>
            </View>

            <View>
                <Text style={styles.title}>Actors:</Text>
                <Text style={styles.des}>{route.params.actors}</Text>
            </View>

            <View>
                <Text style={styles.title}>Plot:</Text>
                <Text style={styles.des}>{route.params.plot}</Text>
            </View>

            <View>
                <Text style={styles.title}>Genres:</Text>
                <Text style={styles.des}>{route.params.genres}</Text>
            </View>
            

        </View>

    </View>
)

}

const styles = StyleSheet.create({

    root:{
        backgroundColor:'#0a1a34',
        height:'100%',
        padding:20
    },

    row:{
        flexDirection: 'row',
        paddingBottom:30,
        borderColor:'grey',
        borderBottomWidth:1,
    },

    image: {
        width:130,
        height:180,
        alignSelf:'flex-start',
        borderRadius:15,
        borderColor:'grey',
        borderWidth:0.5
    },

    movietitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        maxWidth:230
    },

    movieYear:{
        color:'grey',
        fontSize:16,
        paddingLeft:20,
        paddingTop:10
    },

    container:{
        paddingTop:10
    },

    title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:20
    },
    
    des:{
        color:'#ced4da',
        fontSize:16,
        paddingLeft:10,
        paddingTop:10,
        textAlign:'justify'
    }


});

export default MovieDetails;
