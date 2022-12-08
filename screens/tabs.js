import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from './NotificationScreen.js';
import ProfileScreen from './ProfilebScreen.js';
import Home from './HomeScreen.js';
import Forum from './ForumScreen.js';
import EditScreen from './EditScreen.js';

import AskScreen from './AskScreen.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStackScreen = ({Email}) => {
  const email = Email;
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Profileb" children={() => <ProfileScreen Email={email} />}/>
      <Stack.Screen  name="Edit" children={() => <EditScreen Email={email} />}/>
    </Stack.Navigator>
  );
}
const HomeStackScreen = ({Email}) => {
  const email = Email;
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" children={() => <Home Email={email} />}/>
      <Stack.Screen  name="Ask" children={() => <AskScreen Email={email} />}/>
      <Stack.Screen  name="Answer" children={() => <AnswerScreen Email={email} />}/>

    </Stack.Navigator>
  );
}
const Tabs = ({Email}) => {
  const email=Email;

  return (
    <NavigationContainer  independent={true}>
    <Tab.Navigator  screenOptions={{tabBarActiveTintColor:"brown",tabBarInactiveTintColor:"black",tabBarHideOnKeyboard: true,headerShown: false,tabBarShowLabel:false,tabBarStyle:{position:"absolute",bottom:25,left:20,right:20,elevation:0,borderRadius:15,height:70,backgroundColor:"beige"}}}>
      <Tab.Screen name="Home" children={() => <HomeStackScreen Email={email}/>} options={{tabBarIcon:({color})=>(<Icon name="home" style={{}} size={30} color={color} />)}}/>
      <Tab.Screen name="Profile" children={() => <ProfileStackScreen Email={email} />} options={{tabBarIcon:({color})=>(<Icon name="user" style={{}} size={30} color={color} />)}}/>
      <Tab.Screen name="Forums" component={Forum} options={{tabBarIcon:({color})=>(<Icon name="folder" style={{}} size={30} color={color} />)}}/>
      <Tab.Screen name="Notifications" component={Notification} options={{tabBarIcon:({color})=>(<Icon name="bell" style={{}} size={30} color={color} />)}}/>
      
    </Tab.Navigator>
  </NavigationContainer>
  );
}


export default Tabs;
