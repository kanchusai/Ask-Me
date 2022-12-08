import React,{useEffect,useState,useContext} from "react";
import { ImageBackground, StyleSheet, Text, View ,TextInput,ScrollView,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import { useRoute } from '@react-navigation/native';
import moment from 'moment';
const AskScreen = ({Email}) => {
  const email = Email;
  const [name,setName] = useState("");
  const [query,setQuery] = useState("");
  const [currentDate, setCurrentDate] = useState('');
  const route = useRoute();
  const length = route.params.length;
  useEffect(() => {

    getDatabase();
  },[])
  const writeQuery = async() => {
    try{

       const write = await database()
        .ref(`query/${length}`)
        .set({
              name: name,
              message: query,
              curretTime: moment().utcOffset('+05:30').format('MMMM Do YYYY, h:mm:ss a'),
            });
            console.log(write);
      }
    catch(e)
    {
      console.log(e);
    }
  }

  const getDatabase = async()=>{
    try{
      const data = await firestore().collection('users').doc(email).onSnapshot(doc => {
        setName(doc.data().name);
      });
    }

    catch(e)
    {
      console.log(e);
    }
  }
  return(
  <View style={styles.container}>

    <ImageBackground source={require("../assets/images/pale.jpg")} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:"row",backgroundColor: "olive",justifyContent:"center"}}>
      <Icon name="hand-paper-o" style={{color:"white",marginHorizontal:10,top:7,left:1}} size={50} color="#900" />
      <Text style={styles.text}>Ask</Text>
      </View>
      <View style={{padding:60}}></View>
      <View style={{backgroundColor:"yellow",marginVertical:10,borderRadius:50,marginHorizontal:20}}>
      <TextInput style={{textAlign:"center",fontSize:25,color:"black",fontFamily:"Lato-BoldItalic.ttf"}}   placeholder='Ask Anything' placeholderTextColor="black" onChangeText={(value) => setQuery(value)}/>
      </View>
      <TouchableOpacity onPress={() => {writeQuery()}}>
        <View style={{backgroundColor:"white",marginVertical:10,borderRadius:15,marginHorizontal:100}}>
          <Text style={{color:"black",fontSize:30,textAlign:"center",fontFamily:"Lato-BoldItalic.ttf",marginVertical:10,marginHorizontal:10}}>Next</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>

  </View>
);

}
const styles = StyleSheet.create({
  iconup:{

          position: "absolute",
          bottom: 110,
          right: 20,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          height: 70,
          backgroundColor: 'white',
          borderRadius: 50,
        },
  container: {
    flex: 1,

  },
  image: {
    flex: 1



  },
  text: {
    color: "white",
    fontSize: 52,
    lineHeight: 74,
    marginHorizontal:10,
    textAlign: "center",
    right:12,
    fontFamily:"Lato-BoldItalic.ttf"


  },

});




export default AskScreen;
