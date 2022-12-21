import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from "expo-camera";

const Screens = () => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setcamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [number, setnumber] = useState("");
  const [checknumber, setchecknumber] = useState(false);
  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    if (cameraPermission.status !== "granted") {
      alert("Permission for media access needed.");
    }
  };
  useEffect(() => {
    permisionFunction();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
    }
  };
  const validate = (num) => {
    const numeric = num.replace(/[^0-9]/g, "");
    setnumber(numeric);

    console.log(number);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.field}>
        <View style={styles.cameraContainer}>
          <Camera
            ref={(ref) => setcamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"1:1"}
          />
        </View>

        <Button title={"Take Picture"} onPress={takePicture} />
      </View>
      <View>
        <Text style={styles.text}>Enter Odometer distance</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter here"
          placeholderTextColor="#003f5c"
          onChange={(num) => validate(num.nativeEvent.text)}
          keyboardType="number-pad"
          value={number}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  field: {
    backgroundColor: "lightskyblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    padding: 5,
    textAlign: "auto",
    fontWeight: "bold",
  },

  header: {
    backgroundColor: "whitesmoke",
    flex: 1,
  },
  TextInput: {
    textAlign: "center",
    width: 250,
    height: 40,
    backgroundColor: "whitesmoke",
    borderWidth: 2,
    borderColor: "blue",
    fontSize: 15,
  },
  button: {
    margin: 15,
    padding: 15,
    width: 150,
    height: 50,
    textAlign: "center",
    backgroundColor: "turquoise",
    color: "black",
    fontSize: 18,
    borderRadius: 9,
  },
});
export default Screens;
