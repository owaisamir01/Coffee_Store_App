import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.btn_cont}>
      <TouchableOpacity
        style={styles.btn_style}
        onPress={() => navigation.navigate('Contact')}
      >
        <Image
          style={styles.icon_style}
          source={{ uri:"https://img.icons8.com/ios/452/contact-card.png"} }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn_style}
        onPress={() => navigation.navigate('About')}
      >
        <Image
          style={styles.icon_style}
          source={{ uri: "https://img.icons8.com/ios/452/about.png" }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn_style}
        onPress={() => navigation.navigate('Item')}
      >
        <Image
          style={styles.icon_style}
          source={{ uri:"https://img.icons8.com/ios/452/coffee-to-go.png" }}
        />
      </TouchableOpacity>

       </View>
  );
}

const styles = StyleSheet.create({
  btn_cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 0,
   marginLeft:2,
//    backgroundColor:"rgba(45, 25, 15, 1)"

},
  btn_style: {
    padding: 9,
   
  },
  icon_style: {
    width: 50,
    height: 50,
    marginLeft:40,
    marginRight:20,
   
},
});

export default Menu;
