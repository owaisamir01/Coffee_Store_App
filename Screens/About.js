import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, Linking } from "react-native";

function About() {
  const des = "Welcome to the heart of our coffee journey! At [Your Coffee Shop's Name], we're passionate about delivering exceptional coffee experiences. From the meticulous selection of premium beans to the artistry in crafting each cup, our commitment to quality and flavor is unmatched. Join us in celebrating the rich traditions and diverse flavors that make every sip a moment to savor"; // Add your description

  return (
    <View style={styles.maincont}>
      <View style={styles.imgcont}>
        <Image
          style={styles.headerimage}
          resizeMode="cover"
          source={require("./../assets/c-about.jpg")}
        />
      </View>
      <View style={styles.desc}>
        <Text style={styles.desctext} >{des}</Text>
      </View>
      <View>
        <Text style={styles.followcont}>Follow Us On Social Media</Text>
      </View>
      <View style={styles.socialcont}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.instagram.com")}
        >
          <Image
            style={styles.iconImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.youtube.com")}
        >
          <Image
            style={styles.iconImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.facebook.com")}
        >
          <Image
            style={styles.iconImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincont: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#D2B48C",
  },
  imgcont: {
    height:"40%",
  
  },
  headerimage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius:6,
    marginTop:3
  },
  desc: {
    padding: 20,
    paddingLeft:20,
    marginTop:28,
    
  },
  desctext:{
    fontSize:17,
    paddingRight:2,
      marginTop:50,
      marginBottom:-15,
      fontWeight:"800",
      fontStyle:"italic",   
      color: "#8B4513",
    },

  followcont: {
    fontSize:29,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    marginBottom:1,
    color: "rgba(45, 25, 15, 1)",
    fontStyle:"normal",
  },
  socialcont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6,
    
    
  },
  iconStyle: {
    padding:25,
    backgroundColor: "#D2B48C",
    marginBottom:0,
    marginTop:-15,
  

},
  iconImage: {
    width: 35,
    height: 35,
  },
});

export default About;
