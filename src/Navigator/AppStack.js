import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../Screen/Profile';

const Stack = createStackNavigator()

const AppStack = (props) => {

    const getToken = async () => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            props.checkToken()
        }
    }

    useEffect(() => {
        getToken()
    }, [])

    return (
        <Stack.Navigator headerMode='none'>
            {
                props.verify
                    ? <>
                        <Stack.Screen name='Tab' component={Tabs} />
                    </>
                    : <>
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='SignUp' component={SignUp} />
                    </>
            }

        </Stack.Navigator>
    )
}

const reduxState = state => ({
    verify: state.auth.isLoggedIn
})

const reduxDispatch = dispatch => ({
    checkToken: () => dispatch({ type: 'VERIFY_TOKEN' })
})

export default connect(reduxState, reduxDispatch)(AppStack);
