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
import { Formik } from "formik";
const Screens = (props) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setcamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [number, setnumber] = useState("");
  const [checknumber, setchecknumber] = useState(false);
  const permisionFunction = async () => {
   
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
      <Formik initialValues={{ number: "" }}
      onSubmit=

      {
        async(values)=>{
          console.log(values)
        props.navigation.replace("Drawer")
        }
      }
    
      
      >
         {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
         
        }) => {
          return (
      <View style={styles.odometer}>
        <Text style={styles.text}>Enter Odometer distance</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter here"
          placeholderTextColor="#003f5c"
          onChange={(num) => validate(num.nativeEvent.text)}
          keyboardType="number-pad"
          value={number}
          maxLength={7}
          onChangeText={handleChange("number")}
        ></TextInput>
        <View>
        <TouchableOpacity> 
          <Text style={styles.button} onPress={handleSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
      </View>
      )}}
      </Formik>
  
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
  
    fontSize: 15,
  },
  button: {
    margin: 15,
   
    width: 100,
    height: 40,
    textAlign: "center",
    backgroundColor: "lightskyblue",
    paddingTop:8,
    fontSize: 16,
    borderRadius: 9,
  },
  odometer:{
    flex:0.5,
    alignItems:"center",
    backgroundColor:"whitesmoke"
  }
});
export default Screens;
