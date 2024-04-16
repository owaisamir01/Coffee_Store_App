import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import About from './Screens/About';
import Item from './Screens/Item';
import Contact from './Screens/Contact'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Menu from './Screens/Menu';
// import Contact from './Screens/Menu';
// import About from './Screens/Menu';
// import Item from './Screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
  name="Home" 
  component={Home} 
  options={{
    headerTitleStyle: {
      fontSize: 29,
      color: "#D2B48C", // Use 'color' instead of 'text-color'
    },
    headerTitle: "Home",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "rgba(45, 25, 15, 1)",
    },
  }}
/>
        <Stack.Screen name="About" component={About}
         options={{
          headerTitleStyle: {
            fontSize: 29,
            color: "#D2B48C", // Use 'color' instead of 'text-color'
          },
          headerTitle: "About",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "rgba(45, 25, 15, 1)",
          },
        }}
        />
        <Stack.Screen name="Contact" component={Contact} 
        options={{
          headerTitleStyle: {
            fontSize: 29,
            color: "#D2B48C", // Use 'color' instead of 'text-color'
          },
          headerTitle: "Contact",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "rgba(45, 25, 15, 1)",
          },
        }}
        />
        <Stack.Screen name="Item" component={Item} 
        options={{
          headerTitleStyle: {
            fontSize: 29,
            color: "#D2B48C", // Use 'color' instead of 'text-color'
          },
          headerTitle: "Menu",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "rgba(45, 25, 15, 1)",
          },
        }}
        />
      
        
      </Stack.Navigator>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
