import React, {useState, useEffect} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderJ from '../Component/HeaderJ';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';


const ComingSoonScreen = ({ navigation }) => {
    const urlPop = "https://api.themoviedb.org/3/movie/popular?api_key=1e38bb29c52806c0d87d4319f69486a9&language=en-US&page=1"
    const urlTren = "https://api.themoviedb.org/3/movie/497698/videos?api_key=1e38bb29c52806c0d87d4319f69486a9&language=en-US"
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
    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <HeaderJ name='Coming Soon' />
            <TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Icon
                            name="bell"
                            type='font-awesome'
                            color="white"
                            size={25}

                        />
                        <Text style={styles.title}>Notification</Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type='font-awesome'
                        color="white"
                        size={25}
                    />
                </View>
            </TouchableOpacity>
            <View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})

export default ComingSoonScreen
