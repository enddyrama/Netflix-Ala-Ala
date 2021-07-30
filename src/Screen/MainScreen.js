import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import HeaderJ from '../Component/HeaderJ';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';







const HomeScreen = (props) => {
    const urlPop = "https://api.themoviedb.org/3/movie/popular?api_key=1e38bb29c52806c0d87d4319f69486a9&language=en-US&page=1"
    const urlTren = "https://api.themoviedb.org/3/trending/all/day?api_key=1e38bb29c52806c0d87d4319f69486a9"
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        const getPopular = axios.get(urlPop)
        const getTrending = axios.get(urlTren)
        axios.all([getPopular, getTrending]).then(axios.spread(function (res1, res2) {
            setPopular(res1.data.results);
            setTrending(res2.data.results);
        }));

    }
    useEffect(() => {
        fetchData()
    }, [])

    // if (loading) {
    //     return (
    //         <View>
    //             <Text>Loading</Text>
    //         </View>
    //     )
    // }

    const handleDetails = (movie)=>{
        props.navigation.navigate('Details', {movie})
    }

    return (
        <View>
            <ScrollView>
                <View style={{ backgroundColor: "#1B1B1B" }}>
                    <HeaderJ name='Home' />
                    <Text style={{ color: 'white' }}>Popular on Jahanam</Text>
                    <ScrollView horizontal={true}>
                        {popular.map((movie, index) =>
                            <View style={{ padding: 10, alignItems: 'center' }} key={index}>
                                <TouchableOpacity onPress={() => handleDetails(movie)}>
                                    <Image style={{ height: 300, width: 200, resizeMode: 'cover'}} source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }} />
                                </TouchableOpacity>

                            </View>
                        )}
                    </ScrollView>
                    <Text style={{ color: 'white' }}>Jahanam Trending</Text>
                    <ScrollView horizontal={true}>
                        {trending.map((movie, index) =>
                            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }} key={index}>
                                <TouchableOpacity onPress={() => handleDetails(movie)}>
                                    <Image style={{ height: 300, width: 200, resizeMode: 'cover' }} source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }} />
                                </TouchableOpacity>

                            </View>
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen