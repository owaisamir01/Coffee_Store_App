import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setNum] = useState("");
  const [mail, setMail] = useState("");
  const navigation = useNavigation();

  function submit() {
    if (!name || !phone || !mail) {
      Alert.alert("Please fill in all the fields");
    } else {
      Alert.alert("Information Sent");
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Get Your Coffee</Text>
      </View>
      <View style={styles.subtextContainer}>
        <Text style={styles.subtext}>You can reach us anytime via email: Sheikh_Cafe@gmail.com</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Owais Amir"
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="sheikh_cafe@gmail.com"
          value={mail}
          onChangeText={(mail) => setMail(mail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="093123835638"
          value={phone}
          onChangeText={(phone) => setNum(phone)}
        />
      </View>

      <TouchableOpacity onPress={submit} style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D2B48C",
  
},
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B4513",
 
},
  subtextContainer: {
    marginBottom: 20,
    marginLeft:17
  },
  subtext: {
    fontSize: 16,
    color: "#8B4513",
  },
  inputContainer: {
    marginBottom: 20,
    marginTop:7
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#8B4513",
  },
  input: {
    borderWidth: 1,
    borderColor:"rgba(45, 25, 15, 1)",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "rgba(45, 25, 15, 1)",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop:10  
},
  buttonText: {
     color: "#D2B48C",
    fontSize: 18,
  },
});

export default Contact;
