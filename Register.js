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
  SafeAreaView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Login from "./Login";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2)
    .max(20, "Too Long!")
    .required("*please enter your name"),

    password: Yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    number:Yup.string().matches("^[A-Z]{2}[0-9]{2}[A-HJ-NP-Z]{1,2}[0-9]{4}$","Letter in uppercase").required("Enter in uppercase")
});
function Register(props) {

  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source={require("./assets/image1.gif")} />

      
      <Formik initialValues={{ username: "", password: "", number: "" }}
        onSubmit={
          
          async (values) => {
          console.log(values)
          try {
            console.log(values);
            const data = await axios.post(
              "http://192.168.29.232:5000/register",

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
              <Text style={styles.title}>Register</Text>
              <Text style={styles.person}>Username</Text>
              <View style={styles.inputView}>
                <MaterialIcons name="person"></MaterialIcons>
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
              <Text style={styles.person}>Password</Text>
              <View style={styles.inputView}>
                <MaterialIcons name="vpn-key"></MaterialIcons>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter your Password"
                  placeholderTextColor="#003f5c"
                  //   secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                />
              </View>
              {errors.password && touched.password ? (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              ) : (
                <Text>{null}</Text>
              )}
              <Text style={styles.person}>Vehicle number</Text>
              <View style={styles.inputView}>
                <MaterialIcons name="vpn-key"></MaterialIcons>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter your vehiclenumber"
                  placeholderTextColor="#003f5c"
                
                  value={values.number}
                  onChangeText={handleChange("number")}
                />
              </View>
              {errors.number && touched.number ? (
                <Text style={styles.errorTxt}>{errors.number}</Text>
              ) : (
                <Text>{null}</Text>
              )}
              <Button onPress={handleSubmit} title="Submit" />
              {/* <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => handleSubmit}
              >
                <Text
                  title="SIGNUP"
                   onPress={()=>handleSubmit}
                >
                  SIGNUP
                </Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.register}
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text title="register" style={styles.register}>
                  click here to Login
                </Text>
              </TouchableOpacity>
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
  },
  image: {
    marginBottom: 20,
    width: 400,
    height: 200,
    borderWidth: 5,
  },
  register: {
    color: "red",
    textAlign: "center",
  },

  inputView: {
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    width: 250,
    height: 45,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",

    flexDirection: "row",
    justifyContent: "space-around",
  },

  TextInput: {
    textAlign: "justify",
    width: 200,
    height: 40,
    backgroundColor: "whitesmoke",
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
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
});

export default Register;
