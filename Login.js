import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2)
    .max(20, "Too Long!")
    .required("please enter your name"),

    password: Yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
   
});

export default function Login(props) {
  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/image1.gif")} />

      <Formik
        initialValues={{ username: "", password: "" }}
        
        onSubmit={
        
          async (values) => {
          console.log(values)
          
          try {
            props.navigation.replace("Screens")
            console.log(values);
            const data = await axios.post(
              "http://192.168.29.232:5000/login",

              values
            );
            console.log(data.config.message);
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={SignupSchema}
        
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
          isValid,
        }) => {
          return (
            
          
             
              <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
                {/* <Text style={styles.person}>Username</Text> */}
                <View style={styles.inputView}>
                  <MaterialIcons name="person" style={styles.icon}></MaterialIcons>
                  <TextInput
                    style={styles.TextInput}
                    placeholder=" Enter your UserName"
                    placeholderTextColor="#003f5c"
                    value={values.username}
                    onChangeText={handleChange("username")}
                  />
                </View>
                {errors.username && touched.username ? (
                  <Text style={styles.errorTxt}>{errors.username}</Text>
                ) : (
                  <Text>{null}</Text>
                )}

                {/* <Text style={styles.person}>Password</Text> */}

                <View style={styles.inputView}>
                  <MaterialIcons name="vpn-key" style={styles.icon}></MaterialIcons>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Password"
                    placeholderTextColor="#003f5c"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry={true}
                  />
                </View>
                {errors.password && touched.password ? (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              ) : (
                <Text>{null}</Text>
              )}
              <Button  style={styles.loginBtn} onPress={handleSubmit} title="LOGIN" />
                {/* <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => handleSubmit}
                  // onPress={() => props.navigation.navigate("Screens")}
                >
                  <Text title="SIGNUP">LOGIN</Text>
                </TouchableOpacity> */}
 <View style={styles.login}>
              <Text>Don't have Account?</Text>
              <TouchableOpacity
                style={styles.registers}
                onPress={() => props.navigation.replace("Register")}
              >
                <Text title="register" style={styles.register}>
                  REGISTER
                </Text>
              </TouchableOpacity>
              </View>
                
               
              </View>
            
           
           
          );
        }}
      </Formik>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
    alignItems: "center",
    justifyContent: "center",
   
    
  },
  person: {
    marginLeft: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 30,
    textAlign: "center",
  },
  box: {
    padding: 20,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "white",
    height:350
  },
  image: {
    marginBottom: 20,
    width: 400,
    height: 250,
    borderWidth: 5,
   
  },
  register: {
    color: "red",
    textAlign: "center",
    paddingTop:20
  },

  inputView: {
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    width: 250,
    height: 40,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  TextInput: {
    textAlign: "justify",
    width: 200,
    height: 30,
    backgroundColor: "whitesmoke",
    fontSize:16
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  register: {
    
    textAlign: "center",
    height:25,
    width:80,
    textAlign: "center",
    backgroundColor:"orange"
  
  },
  registers:{
alignItems:"center",
paddingLeft:10
  },

  loginBtn: {
    width: 90,
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "coral",
    marginLeft: 80,
  },
  person: {
    fontWeight: "bold",
    fontSize: 18,
  },
  errorTxt: {
    color: "red",
  },
  icon:{
    fontSize:16
  },
  login:{
    display:"flex",
    flexDirection:"row",
    paddingTop:20,
    textAlign:"center"
  }
});
