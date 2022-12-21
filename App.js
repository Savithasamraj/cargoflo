import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Login from "./Login.js";
import Register from "./Register.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home/Home.js";

import Screens from "./Screens.js";
import Settings from "./Drawercomponents/Settings";
import Headertitle from "./Home/Headertitle.js";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Drawercomponents/Profile";
import Contacts from "./Drawercomponents/Contacts.js";
import Popup from "./Home/Popup.js";
import { create } from "yup/lib/object.js";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stacks = createNativeStackNavigator();
 const Profiles=createNativeStackNavigator();
 const Settings1=createNativeStackNavigator();
 const Contactsstack=createNativeStackNavigator();
 const ProfileDrawer=createDrawerNavigator();
 function ProfilesDrawer(){
  return(
    <ProfileDrawer.Navigator screenOptions={{
      headerTitle: () => <Headertitle />,
      headerStyle: {
        backgroundColor: "deepskyblue",
        height: 70,
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontsize: 18,
        fontStyle: "italic",
        letterSpacing: 1.5,
      },

      headerRight: () => {
        return (
          <View style={styles.Popup}>
            <Popup></Popup>
          </View>
        );
      },
    }}   initialRouteName={"Profile"}>
      <ProfileDrawer.Screen name="Profile" component={Profile} />
      <ProfileDrawer.Screen name="Home" component={Home} />
      
      
      
      <ProfileDrawer.Screen name="Settings" component={Settings} />
      <ProfileDrawer.Screen name="Contact" component={Contacts} />
    </ProfileDrawer.Navigator>
  )
  }
 
function Profilestack(){
  return(
    <Profiles.Navigator  screenOptions={{ header: () => null }}>
      <Profiles.Screen name="Drawers" component={Drawers}></Profiles.Screen>

      <Profiles.Screen name="Profiles" component={Profile}></Profiles.Screen>

</Profiles.Navigator>
  )
}
function Settingstack(){
  return(
    <Settings1.Navigator  screenOptions={{ header: () => null }}>
      <Settings1.Screen name="Drawers" component={Drawers}></Settings1.Screen>

      <Settings1.Screen name="Settings" component={Settings}></Settings1.Screen>

</Settings1.Navigator>
  )
}
function Contactstack(){
  return(
    <Contactsstack.Navigator  screenOptions={{ header: () => null }}>
      <Contactsstack.Screen name="Drawers" component={Drawers}></Contactsstack.Screen>

      <Contactsstack.Screen name="settings" component={Settings}></Contactsstack.Screen>

</Contactsstack.Navigator>
  )
}

function Rootstack() {
  return (
    <Stacks.Navigator screenOptions={{ header: () => null }}>
      <Stacks.Screen name="Tab" component={MyTabs}></Stacks.Screen>
      <Stacks.Screen name="Drawer" component={Drawers}></Stacks.Screen>
      
      
      <Stacks.Screen name="Home" component={Home}></Stacks.Screen>
    </Stacks.Navigator>
  );
}

function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <Headertitle />,
        headerStyle: {
          backgroundColor: "deepskyblue",
          height: 70,
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontsize: 18,
          fontStyle: "italic",
          letterSpacing: 1.5,
        },

        headerRight: () => {
          return (
            <View style={styles.Popup}>
              <Popup></Popup>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Drawers}
        options={{
          header: () => null,
          tabBarIcon: () => {
            return <MaterialIcons name="home" size={30}></MaterialIcons>;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilesDrawer}
        options={{
          header: () => null,
          tabBarIcon: () => {
            return <MaterialIcons name="call" size={30}></MaterialIcons>;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settingstack}
        options={{
          header: () => null,
          tabBarIcon: () => {
            return  <MaterialIcons name="settings" size={30} ></MaterialIcons>;
          },
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contactstack}
        options={{
          header: () => null,
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="format-list-bulleted"
                size={30}
              ></MaterialIcons>
            );
          },
          
        }}
      />
    </Tab.Navigator>
  );
}

const { Navigator, Screen } = Stack;
function Drawers() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => <Headertitle />,
        headerStyle: {
          backgroundColor: "deepskyblue",
          height: 70,
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontsize: 18,
          fontStyle: "italic",
          letterSpacing: 1.5,
        },

        headerRight: () => {
          return (
            <View style={styles.Popup}>
              <Popup></Popup>
            </View>
          );
        },
      }}
      

    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Contact" component={Contacts} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.rootview}>
        <NavigationContainer>
          <Navigator>
          <Screen name="Register" component={Register}  options={{ header: () => null }} />
            <Screen
              name="Login"
              component={Login}
              options={{ header: () => null }}
            />
            {/* <Screen name="Register" component={Register} /> */}

            <Screen
              name="Drawer"
              component={Rootstack}
              options={{ header: () => null }}
            />
          
            <Screen
              name="Screens"
              component={Screens}
              options={{
                header: () => null,
                headerStyle: {
                  title: "cargoflo",
                },
              }}
            />
           
          </Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  rootview: {
    flex: 1,
    backgroundColor: "white",
  },
  Popup: {
    marginTop: 20,
  },
});
