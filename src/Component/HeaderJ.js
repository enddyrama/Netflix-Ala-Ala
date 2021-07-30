import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Profile from '../Screen/Profile';


const HeaderJ = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.icontainer}>
                <TouchableOpacity style={{paddingRight: 10}}>
                    <Icon type="fontAwesome" name="search" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=>navigation.navigate('Profile')} style={{padding: 1, backgroundColor: 'grey', elevation: 5, borderRadius: 40, alignSelf: 'center'}}>
                    <Image style={styles.image} source={require('../../assets/icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        padding: 20,
        display: 'flex',
        flexDirection: 'row'
    },

    icontainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    image: {
        width: 40,
        height: 40,

    },

    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})

export default HeaderJ;