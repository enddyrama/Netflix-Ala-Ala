import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ProfileCard from '../Component/ProfileCard';


const Profile = (props) => {
    return (
        <View>
            <ProfileCard nama={props.name} email={props.email} />

            <Button title='Logout' onPress={() => props.logout()} />
        </View>

    )
}
const mapStateToProps = (state) => ({
    name: state.profile.name,
    email: state.profile.email
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({type: 'LOGOUT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
