import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { CameraType } from "expo-camera/build/Camera.types";
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { library } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  let takePhoto = async () => {
    let photo = await camera.current.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(photo.uri);
    console.log("photo", photo);
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera flashMode={"on"} ref={camera} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front
              );
            }}
          >
            <Ionicons
              style={styles.camicon}
              name="camera-reverse-outline"
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureImg}>
            <Ionicons
              name="camera-outline"
              size={40}
              color="black"
              style={styles.button}
              onPress={() => takePhoto()}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 2,
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  button: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    textAlign: "center",
    marginLeft: 40,
    marginBottom: 20,
  },
  captureImg: {
    flex: 1,

    alignSelf: "flex-end",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: 115,
  },
});
