import React,{useState,useEffect,useContext} from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,SafeAreaView, ScrollView,FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';


const Home = ({Email}) => {
  const navigation = useNavigation();
  const email =  Email;
  const [list,setList] = useState(null);

  useEffect(() => {getDataBase()},[])
  const getDataBase = async() => {
    try{
      const data = await database()
      .ref("query")
      .on("value",(tempData)=>{
      setList(tempData.val());
      });


    }
    catch(e)
    {
      console.log(e);
    }
  };
  return(
  <View style={styles.container}>

    <ImageBackground source={require('../assets/images/home.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:'row',backgroundColor:"blue"}}>
      <Icon name="users" style={{color:"beige",left:5,top:10}} size={45} color="#900" />
      <Text style={styles.text}>  Community</Text>


      </View>

      <ScrollView style={{}}>
        <FlatList data={list} renderItem={(item) => {
              console.log(item);

              if(item.item !== null)
              {
              return(
                <View style={{height:80,borderRadius:10,backgroundColor:"blue",marginVertical:10,marginHorizontal:7}}>
                <View style={{height:30,borderRadius:8,backgroundColor:"black",flexDirection:"row"}}>
                <Text style={{left:10,color:"white",top:5}}>{item.item.name}</Text>
                <Text style={{left:10,position: 'absolute', left: 170, top:5,right: 0, bottom: 0,color:"white"}}>{item.item.curretTime}</Text>
                </View>
                <View style>
                <Text style={{left:10,color:"black"}}>{item.item.message}</Text>
                </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Answer',{length:list.length})}>

                <View style={{backgroundColor:"yellow",marginHorizontal:130,borderRadius:10,left:120,top:7}}>
                <Text style={{textAlign:"center",color:"green",borderRadius:5}}>Answer</Text>
                </View>
                </TouchableOpacity>

               </View>

              );
            }
            }}/>
          <View style={{padding:100}}></View>
    </ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('Ask',{length:list.length})}>
    <View style={styles.iconup}>
    <Icon name="hand-paper-o" style={{color:"white"}} size={30} color="#031D02" />
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
    right: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 90,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "red",
    fontSize: 50,
    lineHeight: 65,
    textAlign: "center",
    bottom:1,
    fontFamily:'Microbrew-Soft-Two-3D'
  },
  pcard: {
      color:"white",
      backgroundColor:"black",
      marginVertical:10,
      fontSize:30,
      fontFamily:"Microbrew-Soft-Two-3D",
      textAlign:"center",
      marginHorizontal:20,
      borderRadius:90
    },
});

export default Home;
