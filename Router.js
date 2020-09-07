import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SigninScreen from './src/screens/authentication/SigninScreen'
import HomeScreen from './src/screens/homepage/HomeScreen'
import IndexScreen from './src/screens/IndexScreen'
import SignupScreen from './src/screens/authentication/SignupScreen'
import ResolveAuth from './src/screens/ResolveAuth'
import ProfileScreen from './src/screens/profil/ProfileScreen'
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen'
import SearchScreen from './src/screens/Search/SearchScreen'
import NewsDetailScreen from './src/screens/homepage/NewsDetailScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="ResolveAuth" screenOptions={{ 
            headerShown: false,
            headerTitleAlign: 'center',
            ...TransitionPresets.SlideFromRightIOS,
        }}>
            <Stack.Screen name='ResolveAuth' component={ResolveAuth}></Stack.Screen>
            <Stack.Screen name='Welcome' component={WelcomeScreen}></Stack.Screen>
            <Stack.Screen name='Signin' component={SigninScreen}></Stack.Screen>
            <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
            <Stack.Screen name='Index' component={IndexScreen}></Stack.Screen>
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='NewsDetail' component={NewsDetailScreen}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileScreen}></Stack.Screen>   
            <Stack.Screen name='Search' component={SearchScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}


const Router = () => {
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default Router