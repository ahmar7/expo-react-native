import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Contact(props) {
  return (
    <View>
      <Text style={styles.text}>Contact</Text>
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Go to Home"
      />
      <Button
        onPress={() => props.navigation.navigate("About")}
        title="Go to About"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 400,
  },
});

export default Contact;
