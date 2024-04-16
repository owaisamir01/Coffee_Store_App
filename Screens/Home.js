import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Menu from "./Menu";
function Home() {
  const desc =
    "Indulge in the rich aroma of freshly brewed coffee at our cozy cafe. From velvety lattes to bold espressos, savor every sip in a welcoming ambiance. Explore a menu crafted with passion, offering a delightful blend of flavors. Elevate your coffee experience with us.";

  return (
    <View style={styles.container}>
         <Text style={styles.mainheader}>Sheikh_Cafe</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.headerimage}
          resizeMode="cover" // Adjusted to cover the container
          source={require("./../assets/cafe-background.jpg")}
        />
      </View>
      <View style={styles.des}>
        <Text style={styles.descText}>{desc}</Text>
      </View>
      <View><Menu/></View>
   
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2B48C",
    alignItems: "center",
    paddingTop: 50, // Adjusted top padding
    height:"100%",
    width:"100%",
    
  },
  mainheader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B4513", // Font color set to white
    marginTop:-40
  },
  imageContainer: {
 overflow: "hidden",
 marginTop: 7, // Adjusted bottom margin
 height :"55%"  
},

  headerimage: {
    width: "99%",
    height:undefined,
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
     borderRadius: 15,
    backgroundColor: "#D2B48C",

},
  des: {
    paddingl: 20,
    
  },
  descText: {
    color: "#8B4513", // Font color set to white
    fontWeight: "700", // Bold font weight
    fontSize: 20,
     // Adjusted font size
paddingTop:15,
marginLeft:10,
marginRight:10,
marginTop:-10, 
fontStyle:"italic"

},


});

export default Home;
