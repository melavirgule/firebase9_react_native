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
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { authentication } from "./firebase/firebaseConfig";



// export default function App() {
  const SignInAndOut = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      console.log(res);
      setIsSignedIn(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const SignOutUser = () => {
    signOut(authentication)
    .then((res) => {
      console.log(res);
      setIsSignedIn(false);
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <Text>Helloo</Text>
      <TextInput 
      placeholder='Email' value={email} 
      onChangeText={text=>setEmail(text)}/>
      <TextInput 
      placeholder='Password' zvalue={password} 
      onChangeText={text=>setPassword(text)}
      secureTextEntry={true} />
      {isSignedIn === true ? 
      <Button 
      title={'Sign Out'}
      onPress={SignOutUser}
      />
      :
      <Button 
      title={'Sign In'}
      onPress={signInUser}
      />
      }



      <StatusBar style="auto" />
    </View>
  );
}

export default SignInAndOut;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
