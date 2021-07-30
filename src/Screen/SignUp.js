import styles from '../style/styles';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';

const SignUp = (props) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [auth, setAuth] = useState(null)

    const getData = () => {
        axios.get('http://10.0.2.2:3000/profile')
            .then(res => setAuth(res.data))
    }

    const postData = async () => {
        let newPostData = {
            name: name,
            email: email,
            password: password
        }
        axios.post('http://10.0.2.2:3000/profile', newPostData)
            .then(res => {
                getData()
            })

        Alert.alert(
            "Success",
            "Your account has been created",
            [

                { text: "OK", onPress: () => navigation.navigate('Login') }
            ],
            { cancelable: false }
        );
    }

        



    return (
        <View style={styles.regformContainer}>
            <View style={styles.regform}>

                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.textinput} placeholder="Your name"
                    underlineColorAndroid={'transparent'} onChangeText={text => setName(text)} />
                <TextInput style={styles.textinput} placeholder="Your email"
                    underlineColorAndroid={'transparent'} onChangeText={text => setEmail(text)} />
                <TextInput style={styles.textinput} placeholder="Your Password"
                    secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={text => setPassword(text)} />

                <TouchableOpacity style={styles.button} onPress={() => postData()} disabled={!name || !email || !password}>
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
    }

    export default SignUp