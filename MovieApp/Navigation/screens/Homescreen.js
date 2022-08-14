import React,{useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View,TouchableHighlight, useWindowDimensions, ScrollView, TextInput, Button, TouchableOpacity,Pressable, FlatList, Alert, LogBox} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import ignoreWarnings from 'ignore-warnings';
import customData from '../../movie_db.json';
import genre from '../../movie_genre.json';
Ionicons.loadFont();

function HomeScreen ({navigation}) {

    const route = useRoute();
    const isFocused = useIsFocused();
    const [movieList, setmovieList] = React.useState(customData);
    const [search, setNewSearch] = React.useState("");

    const filteredMovie = !search
    ? movieList
    : movieList.filter((filterGenre) =>
        filterGenre.genres.toString().toLowerCase().includes(search.toLowerCase())
      );

      const handleSearchChange = (text) => {
        setNewSearch(text)
      };

    ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

    LogBox.ignoreLogs([
        'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
        'NativeBase: The contrast ratio of',
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ])

    React.useEffect(() => {
    if(isFocused){ 
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }
    
    },[navigation, isFocused]);


return(

    <ScrollView style={styles.root}>
        {/* Header Banner */}
        <FlatList  
            horizontal={true} 
            data={customData}
            style={styles.head}
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

                        <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate('MovieDetails',item)}>
                            <Image style={styles.poster} resizeMode='stretch' source={{
                                uri:item.posterUrl
                            }}/>
                            <Text style={styles.movietitle} >{item.title}</Text>
                            <Text style={styles.movieYear} >{item.year}</Text>

                        </TouchableOpacity>
                    
                    )
            }}/>

            {/* Movie List View */}
            <View>

                {/* Genre Filter */}
                <FlatList  
                    data={genre}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingTop:20}}
                        keyExtractor= {(key) => {
                            return key.id;
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator2}/>
                            )
                        }}
                        renderItem={({item}) => {
                            return (

                                // <TouchableOpacity style={styles.genre} onPress={()=>alert(this.refs.myText.props.children)}>
                                //     <View>
                                //         <Text ref='myText' style={styles.genreText} >{item.Genre}</Text>
                                //     </View>

                                // </TouchableOpacity>
                                <View style={styles.genre}>
                                    <Text style={styles.genreText} onPress={(event) => handleSearchChange(event._dispatchInstances.memoizedProps.children)}>{item.Genre}</Text>
                                </View>
                            
                            )
                    }}/>

                <FlatList  
                    data={filteredMovie}
                    style={{paddingTop:20}}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator2}/>
                            )
                        }}
                        renderItem={({item}) => {
                            return (

                                <TouchableOpacity style={styles.scroll} onPress={() => navigation.navigate('MovieDetails',item)}>
                                    <Image style={styles.poster2} resizeMode='stretch' source={{
                                        uri:item.posterUrl
                                    }}/>
                                    <View>
                                        <Text style={styles.movietitle2} >{item.title}</Text>
                                        <Text style={styles.movieActor} >{item.actors}</Text>
                                        <Text style={styles.movieTime} >{item.runtime} Minutes</Text>

                                    </View>

                                </TouchableOpacity>
                            
                            )
                    }}/>

            </View>
                    

    </ScrollView>
)

}

const styles = StyleSheet.create({

    root:{
        backgroundColor:'#0a1a34',
        height:'100%',
        padding:20,
    },

    head:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        height:280
    },

    separator:{
        marginHorizontal:10
    },

    separator2:{
        marginHorizontal:5
    },

    banner:{
        height:250,
        width:160
    },

    movietitle:{
        textTransform: 'uppercase',
        color:'white',
        fontSize:16,
        fontWeight:'500',
        paddingTop:10,
    },

    poster:{
        width:150,
        height:200,
        borderRadius:15,
        borderColor:'grey',
        borderWidth:0.5
    },

    movieYear:{
        color:'grey',
        fontSize:14,
        fontWeight:'300',
        paddingTop:10,
    },

    scroll:{
        height:160,
        width:'100%',
        flexDirection: 'row',
    },

    poster2:{
        height:130,
        width:80,
        borderRadius:10,
        marginRight:20,
        borderColor:'grey',
        borderWidth:0.5
    },

    movietitle2:{
        color:'white',
        fontSize:16,
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
    },

    genre:{
        backgroundColor:'#7d8597',
        height:30,
        alignContent:'center',
        paddingLeft:5,
        paddingRight:5,
        justifyContent: 'center',
        borderRadius:20
    },

    genreText:{
        color:"white"
    }



});

export default HomeScreen;
