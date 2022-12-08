import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs.js';
import { useRoute } from '@react-navigation/native';
const ProfileScreen = ({navigation}) => {
  const route = useRoute();
  const email = route.params.email;
  return (
    <NavigationContainer independent={true}>
         <Tabs Email={email}/>
     </NavigationContainer>

  );
}

export default ProfileScreen;
