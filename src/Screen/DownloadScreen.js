import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderJ from '../Component/HeaderJ';


const DownloadScreen = ({navigation}) => {
    return (
        <ScrollView>
            <HeaderJ name='Download'/>
        </ScrollView>
    )
}

export default DownloadScreen;