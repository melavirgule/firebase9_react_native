import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { authentication } from "../firebase/firebaseConfig";



// export default function RegisterScreen() {
const RegisterScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      console.log(res);
      setIsSignedIn(true)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <View style={styles.container}>
      <Text>Helloo</Text>
      <TextInput 
      placeholder='Email' value={email} 
      onChangeText={text=>setEmail(text)}/>
      <TextInput 
      placeholder='Password' value={password} 
      onChangeText={text=>setPassword(text)}
      secureTextEntry={true} />
      <Button 
      title={'Register'}
      onPress={RegisterUser}
      />


      <StatusBar style="auto" />
    </View>
  );
}

export default RegisterScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
