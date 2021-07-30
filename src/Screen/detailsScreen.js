import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderJ from '../Component/HeaderJ';


const detailsScreen = (props) => {
    console.log(props.route.params.movie, 'movie')
    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: 600, width: 400, resizeMode: 'cover' }} source={{ uri: "https://image.tmdb.org/t/p/w500" + props.route.params.movie.poster_path }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{color: 'white'}}>{props.route.params.movie.title}</Text>
                    <Text style={{color: 'white'}}>{props.route.params.movie.overview}</Text>
                    <Text style={{color: 'white'}}>{props.route.params.movie.release_date}</Text>
                    <Text style={{color: 'white'}}>Rating {props.route.params.movie.vote_average}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default detailsScreen;