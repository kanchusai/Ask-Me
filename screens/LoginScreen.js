import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Alert,
  TextInput
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import auth from '@react-native-firebase/auth';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import Icon from 'react-native-vector-icons/AntDesign';
import Password from '../components/Password';


const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user,setUser] = useState();
  const [message, setMessage] = useState("");
  const handleLogin = async() => {
    try{
      if(email.length>0 && password.length>0)
      {
        const isLogin  = await auth().signInWithEmailAndPassword(email,password);
        setMessage("");
        navigation.navigate("Profile",{email:isLogin.user.email});
      }
      else
      {
        Alert.alert("Please enter details")
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
      <Image
        source={require('../assets/askme.png')}
        style={styles.logo}
      />
    <Text style={styles.text}>  Ask Me!</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
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
        buttonTitle="Sign In"
        onPress={() => handleLogin(email,password)}
      />
    <View style={{padding:10}}>
      <Text style={{color:"red"}}>{message}</Text>
    </View>



      
    

        {/* <SocialButton
          buttonTitle='Sign In with Google'
          btnType="google"
          color='#de4d41'
          backgroundColor='#f5e7ea'
          onPress={() => {}}
          />
          <SocialButton
        buttonTitle='Sign In with Facebook'
        btnType="facebook"
        color='#4867aa'
        backgroundColor='#e6eaf4'
        onPress={() => {}}
        /> */}
        
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {}}>
        <Text style={styles.navButtonText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {navigation.navigate('Signup')}}>
        <Text style={styles.navButtonText}>
          Don't have an acount? register here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
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
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
