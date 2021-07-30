import React, {useState} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import styles from '../style/styles';
import { useNavigation} from '@react-navigation/native';
import Tabs from '../Navigator/TabNavigator';
import { connect } from 'react-redux';


const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        const newData = {
            username,
            password
        }
        props.login(newData)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Netflix</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Username'
                    placeholderTextColor="#fff"
                    onChangeText={text => setUsername(text)} value={username}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder='Password'
                    placeholderTextColor="#fff"
                    onChangeText={text => setPassword(text)} value={password} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
            {props.isLoading && <ActivityIndicator size="large" color="#00ff00" />}


        </View>
    );
}



const reduxState = (state) => ({
    verify: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading
})

const reduxDispatch = (dispatch) => ({
    login: (dataLogin) => dispatch({type: 'LOGIN', data: dataLogin})
})

export default connect(reduxState, reduxDispatch)(Login);


