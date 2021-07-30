import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screen/MainScreen';
import DownloadScreen from '../Screen/DownloadScreen';
import ComingSoonScreen from '../Screen/ComingSoonScreen';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Screen/Profile';
import searchScreen from '../Screen/SearchScreen';
import detailsScreen from '../Screen/detailsScreen';

const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();

const homeStack = ()=> {
    return(
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Search' component={searchScreen}/>
        <Stack.Screen name='Details' component={detailsScreen}/>
    </Stack.Navigator>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63', activeBackgroundColor: 'black', inactiveBackgroundColor: 'black',
        }}>
            <Tab.Screen name="Home" component={homeStack} options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Icon name="home" type='font-awesome' color="white" size={25} />
                ),
            }} />
            <Tab.Screen name="Coming Soon" component={ComingSoonScreen} options={{
                tabBarLabel: 'Coming Soon',
                tabBarIcon: () => (
                    <Icon name="film" type='font-awesome' color="white" size={25} />
                ),
            }} />
            <Tab.Screen name="Download" component={DownloadScreen} options={{
                tabBarLabel: 'Download',
                tabBarIcon: () => (
                    <Icon name="download" type='font-awesome' color="white" size={25} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default Tabs;