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
import { db } from "./firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore/lite";


// export default function App() {
const App = () => {


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
