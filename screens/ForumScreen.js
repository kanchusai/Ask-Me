import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const Forum = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/cliff.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:'row',backgroundColor:"white"}}>
        <Icon name="folder" style={{color:"brown",left:15,top:10}} size={50} color="#900" />
      <Text style={styles.text}>   Forums</Text>
      </View>


      <View style={{flexDirection:'row',borderWidth:2,borderBottomColor:"white"}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>1</Text>
      </View>

      <View style={{flexDirection:'row',marginVertical:15,borderWidth:2,borderBottomColor:"white"}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>5</Text>
      </View>
      <View style={{flexDirection:'row',marginVertical:15,borderWidth:2,borderBottomColor:"white"}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>Ask-Score</Text>
      </View>

      <View style={{flexDirection:'row',marginVertical:15}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>Gsoc</Text>
      </View>
      <View style={{flexDirection:'row',marginVertical:15}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>Go Social</Text>
      </View>

      <View style={{flexDirection:'row',marginVertical:15}}>
        <Icon name="users" style={{color:"white",left:15,top:10}} size={40} color="#900" />
        <Text style={{color:"white",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",position:"absolute",left:70,bottom:-40,marginVertical:30}}>New Room</Text>
      </View>
      
  </ImageBackground>


  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,

  },

  text: {
    color: "green",
    fontSize: 50,
    lineHeight: 74,
    textAlign: "center",
    bottom:3,
    fontFamily:'Lato-BoldItalic.ttf'
  }

});


export default Forum;
