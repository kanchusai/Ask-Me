import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import OnboardingScreen from '../screens/OnboardingScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import SignupScreen from '../screens/SignupScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
const Stack = createStackNavigator();
const AuthStack = () => {

    return (

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />

        </Stack.Navigator>
    );

}

export default AuthStack;
