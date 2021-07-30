import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (value) => {
    await AsyncStorage.setItem('token', value)
}

const removeToken = async () => {
    await AsyncStorage.removeItem('token')
}

function* login(action) {
    try {
        console.log('Login saga running');
        const resLogin = yield axios({
            method: 'POST',
            url: 'https://blogger-glints.herokuapp.com/user/login',
            data: action.data
        })
        
        console.log(resLogin.data);

        yield storeToken(resLogin.data.token)
        
        yield put({type: 'LOGIN_SUCCESS'})
        console.log('Login saga success');
        
    } catch (err) {
        console.log(err);
        console.log('Login saga failed');
        yield put({type: 'LOGIN_FAILED'})
    }
}

function* logout() {
    try {
        yield removeToken()
        console.log('Logged Out');
    } catch (err) {
        console.log(err);
    }
}

export default function* authSaga() {
    yield takeLatest('LOGIN', login)
    yield takeLatest('LOGOUT', logout)
}
