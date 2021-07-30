import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ProfileCard = (props) => {
    return (
        <View style={{marginBottom: 30, padding: 15, backgroundColor: 'white', elevation: 5, borderRadius: 8, width: '70%', alignItems: 'center', alignSelf: 'center', marginTop: 15}}>

            <Image source={{uri: 'https://placeimg.com/640/480/animals'}} style={{width: 100, height: 100, marginBottom: 10}} />

            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>{props.nama}</Text>
            <Text style={{fontSize: 15}}>{props.email}</Text>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({})
