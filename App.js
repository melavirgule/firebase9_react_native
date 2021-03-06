import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";


// export default function App() {
const App = () => {

  // const GetData = async () => {
  //   //Get Data 👇
  //   const citiesCol = collection(db, 'cities');
  //   // Getting all the docs from our cities collection
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   // return cityList;
  //   console.log(cityList);
  // };


  const SetData = async () => {
    const city = "Narnia";
    // set Data 👇
    // Add a new document in collection "cities"
      await setDoc(doc(db, 'cities', "Random_doc2"), {
        // city_name: 'NewCity',
        city_name: city,
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Helloo</Text>
      {/* <Button title={"Get Data"} onPress={GetData} /> */}
      <Button title={"Set Data"} onPress={SetData} />

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
