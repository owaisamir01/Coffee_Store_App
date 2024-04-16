import React from "react";
import {StyleSheet, Text,View,FlatList,Image } from "react-native";
import Item_api from "./api/Item_api";
function Item(){
    
    function Itemcard({item}){
        return(
           <View style={styles.container} >
           <View style={styles.cardcontainer} >
            <Image
            style={styles.cardImage}
            source={item.image}
            resizeMode='contain'
            />
           </View>
           <View ><Text style={styles.mainheader}>{item.title}</Text></View>
          <View ><Text style={styles.description}>{item.description}</Text></View> 
           </View>
        )
    }    
    return(
    <FlatList
    keyExtractor={(item)=>item.id}
    data={Item_api}
    renderItem={Itemcard}
    />
    )   
}
const styles = StyleSheet.create({
    cardImage: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      

    },
    container: {
      paddingHorizontal: 7,
      backgroundColor: "#D2B48C",

    },
    cardcontainer: {
      backgroundColor: "rgba(45, 25, 15, 1)",
      textAlign: 'center',
      borderRadius: 5,
      shadowColor: "#8B4513", // Updated shadowColor
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 30,
    
    },
    mainheader: {
      fontSize: 29,
       color: "#8B4513", // Font color set to white,
      textTransform: 'uppercase',
      paddingBottom: 5,
      textAlign: 'center',
      fontWeight:"600",
      paddingTop:-1
    },
    description: {
      textAlign: 'center',
      paddingBottom: 5,
      lineHeight: 20,
      fontSize: 18,
      color: "#8B4513", // Font color set to white
    },
  });
   

export default Item