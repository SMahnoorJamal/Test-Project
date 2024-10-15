
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator,
  TouchableOpacity, } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { BoxL } from '../../components/BoxL';
import ApiService from '../../Api/ApiService';

function RegisterScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const api = ApiService(); // Initialize ApiService to access get/post

  console.log('props', navigation)

  const fetchUserData = async () => {
    if (!input) {
      Alert.alert('Error', 'Please enter a valid endpoint or input!');
      return;
    }
    setLoading(true); 
    const data = await api.get(input); // Fetch data using input
    setUserData(data);
    setLoading(false); 
  };
  return (
    <ScrollView>
      <BoxL></BoxL>
      <View style={styles.container}>

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.Text}
        >
          {'Register'}

        </Text>

        <View style={{ padding: '8%' }}>
          <Input
            placeholder="Email"
            icon="true"
            value={input}
            style={{
              color: 'black',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 2,
              borderColor: '#C4C4C4',
              height: 56,
              backgroundColor: 'white',
              width: '100%',
              marginTop: 10
            }}
          />
          <Input
            placeholder="Username"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 2,

              borderColor: '#C4C4C4',
              height: 56,
              backgroundColor: 'white',
              width: '100%',
              marginTop: 10
            }} />

          <Input
            placeholder="Password"
            onChan
            icon="true"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 2,
              borderColor: '#C4C4C4',
              height: 56,
              backgroundColor: 'white',
              width: '100%',
              marginTop: 10
            }}
          />

          <View style={{ marginTop: '11%' }}>
            <Button style={{
              width: '100%', height: '45%', alignItems: 'center',
              borderRadius: 50,
              justifyContent: 'center', backgroundColor: 'gray'
            }} text="Register" onPress={() =>

             { {fetchUserData}
            
              navigation.navigate('Form')}} />

            <View style={{ alignItems: 'center' }}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() =>
                //  ApiService.get();
                navigation.navigate('LoginScreen')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : userData ? (
        <Text style={styles.text}>{JSON.stringify(userData, null, 2)}</Text>
      ) : (
        <Text style={styles.text}>No Data Available</Text>
      )}
      </View>

      {/* );
} */}

      {/* 
             <BorderComp navigation={navigation}/>
    */}
    </ScrollView>

  );
}
export default RegisterScreen;

const styles = StyleSheet.create({
  button1: {
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 12,
    height: 51,
    width: '80%',
    justifyContent: 'center',
    left: '10%'
  },
  container:
  {
    marginTop: '10%',
    borderRadius: 50,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: '100%',
    width: '100%',
    marginBottom: '100%',
    backgroundColor: 'white'
  },
  Text:
  {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '7%',
    marginLeft: '9%',
    color: '#989494'
  }
});

