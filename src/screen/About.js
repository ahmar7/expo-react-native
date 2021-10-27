import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function About({ route }) {
  const { name } = route.params;
  return (
    <View>
      <Text style={styles.text}>About</Text>
      <Text>{name}</Text>
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Go to Home"
      />
      <Button
        onPress={() => props.navigation.navigate("Contact")}
        title="Go to Contact"
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

export default About;
