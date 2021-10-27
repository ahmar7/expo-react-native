import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Home(props) {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      {/* <Button
        onPress={() => props.navigation.navigate("Maps")}
        title="Go to Maps"
      /> */}
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
  btn: {
    marginTop: 50,
    marginBottom: 50,
  },
});

export default Home;
