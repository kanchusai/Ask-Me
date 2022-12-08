import React,{useEffect,useState,useContext} from "react";
import { ImageBackground, Image,StyleSheet, Text, View,TouchableOpacity,ScrollView,FlatList} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from "axios";


const Tab = createMaterialTopTabNavigator();


const Github = () => {
  const [list,setList] = useState(null);
  useEffect(()=>{
    axios.get("https://api.github.com/users/scorelab/repos")
    .then((res)=>{setList(res.data)});
  },[])
  return(
  <View style={styles.container}>

      <View style={{flexDirection:'row',backgroundColor:"black"}}>
        <ImageBackground source={require('../assets/images/detruct.jpg')} resizeMode="cover" style={styles.image}>

        <ScrollView>

          <FlatList data={list} renderItem={(item) => {

                if(item.item !== null)
                {
                return(

                  <View style={{flexDirection:"row"}}>
                  <View style={{right:30,flexDirection:"column",backgroundColor:"#F0D1BF",marginVertical:10,flex:1,height:170,marginHorizontal:50,borderTopLeftRadius:50,borderBottomLeftRadius:50}}>
                    <Text style={{fontFamily:"Microbrew-Soft-Two-3D",fontSize:18,left:15,position: 'absolute',marginVertical:10,color:"black"}}>{item.item.name}</Text>
                    <View style={{borderWidth:1,marginHorizontal:10,top:50}}></View>
                    <Text numberOfLines={3} style={{fontSize:13,color:"black",top:60,position: 'absolute',left:15,right:30}}>{item.item.description}</Text>
                    <Text style={{color:"brown",top:120,position:"absolute",left:15,top:120,fontFamily:"Microbrew-Soft-Two-3D",fontSize:20}}>{item.item.language}</Text>
                  <Image style={{borderTopRightRadius:30,borderBottomRightRadius:30,left:260,bottom:2,width: 100,height: 150}} source={{uri: 'https://avatars.githubusercontent.com/u/5285159?v=4'}}/>

              </View>
                  </View>

                );
              }
              }}/>
              <View style={{padding:100}}></View>

        </ScrollView>
        </ImageBackground>

      </View>

  </View>
);
};
const Medium = () => {
  const [list,setList] = useState(null);
  useEffect(()=>{
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://api.medium.com/feed/tag/scorelab")
    .then((res)=>{setList(res.data.items)});
  },[])
  console.log(list);
  return(
  <View style={styles.container}>

      <View style={{flexDirection:'row',backgroundColor:"black"}}>
        <ImageBackground source={require('../assets/images/detruct.jpg')} resizeMode="cover" style={styles.image}>
        <ScrollView>
        <FlatList data={list} renderItem={(item) => {
          if(item.item !== null)
          {
          return(

            <View style={{flexDirection:"row"}}>
            <View style={{right:30,flexDirection:"column",backgroundColor:"#F0D1BF",marginVertical:10,flex:1,height:150,marginHorizontal:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
              <Text numberOfLines={2} style={{fontSize:15,left:15,position: 'absolute',marginVertical:10,color:"black",right:40}}>{item.item.title}</Text>
              <View style={{borderWidth:1,marginHorizontal:10,top:50}}></View>
              <Text numberOfLines={3} style={{fontSize:13,color:"black",top:60,position: 'absolute',left:15,right:30}}>{item.item.author}</Text>
              <Text style={{color:"brown",top:120,position:"absolute",left:15,top:120,fontFamily:"Microbrew-Soft-Two-3D",fontSize:20}}>{item.item.pubDate}</Text>
            <Image style={{borderTopRightRadius:30,borderBottomRightRadius:30,left:260,bottom:2,width: 100,height: 150}} source={{uri: item.item.thumbnail}}/>

        </View>
            </View>

          );
        }
            }}/>
            <View style={{padding:100}}></View>
      </ScrollView>
      </ImageBackground>
      </View>

  </View>
);
};

const NotificationScreen = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: { backgroundColor: 'orange' },}}>
      <Tab.Screen name="Github" options={{tabBarIcon:()=>(<Icon name="github" style={{color:"black"}} size={30} color="#900" />)}} component={Github} />
      <Tab.Screen name="Medium" options={{tabBarIcon:()=>(<Icon name="medium" style={{color:"black"}} size={30} color="#900" />)}} component={Medium} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

  },
  text: {
    color: "orange",
    fontSize: 50,
    lineHeight: 84,
    textAlign: "center",
    bottom:5,
    fontFamily:'Microbrew-Soft-Two-3D'
  }

});

export default NotificationScreen;
//export default NonDocumentTypeChildNode