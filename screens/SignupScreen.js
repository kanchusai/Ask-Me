import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import Password from '../components/Password';

const SignupScreen = ({navigation}) => {
  const Navigation = navigation;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user,setUser] = useState();
  const [message,setMessage] = useState("");
  const [name,setName] = useState("");
  const handleLogin = async() =>{
    try{
      if(email.length>0 && password.length>0)
      {
      const isUserCreated = await auth().createUserWithEmailAndPassword(email,password);

      const useData = {
        name:name,
        email:email,
        Phone:"Enter phone",
        country:"Enter country"
      }
      await firestore().collection('users').doc(email).set(useData);
      console.log(isUserCreated);
      setMessage("");
      navigation.navigate("Profile",{email:isUserCreated.user.email,navigation:Navigation});
    }
    else {

      alert("Please fill all the details");
      }

    }
    catch(e)
    {
      console.log(e);
      setMessage(e.message);
    }
  }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={name}
        onChangeText={(value) => setName(value)}
        placeholderText="Enter Name"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Enter Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />


      <Password
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"

        />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => handleLogin()}
      />
    <View style={{marginVertical:10}}>
    <Text style={{color:"red"}}>{message}</Text>
    </View>

      
      

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.navButtonText}>    </Text>
        <Text style={styles.navButtonText}>    Have an account?Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },

});
