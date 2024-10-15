

import React from 'react';
import {
  StyleSheet, Image, View, Text
} from 'react-native';
import LoginScreen from '../classes/LoginScreen/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../classes/RegisterScreen';

const Stack = createNativeStackNavigator();
const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='LoginScreen'
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen
          name="Form"
          component={LoginScreen} />
          <Stack.Screen
          name="Register"
          component={RegisterScreen} 
          />


      </Stack.Navigator>



    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;