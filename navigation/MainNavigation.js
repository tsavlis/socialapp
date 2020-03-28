import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import LoginScreen from "../views/Login";
import ProfileScreen from "../views/ProfileScreen";
import HomeScreen from "../views/HomeScreen";
import LoadingScreen from "../views/LoadingScreen";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../views/LoginScreen";
import RegisterScreen from "../views/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessageScreen from "../views/MessageScreen";
import NotificationScreen from "../views/NotificationScreen";
import PostScreen from "../views/PostScreen";

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "main") {
            iconName = "ios-home";
          } else if (route.name === "Messages") {
            iconName = "ios-chatboxes";
          } else if (route.name === "Posts") {
            iconName = "ios-add-circle";
          } else if (route.name === "Notifications") {
            iconName = "ios-notifications";
          } else if (route.name === "Profile") {
            iconName = "ios-person";
          }

          return (
            <Ionicons
              name={iconName}
              size={route.name === "Posts" ? 48 : 24}
              color={route.name === "Posts" ? "#E9446A" : color}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: "#161F3D",
        inactiveTintColor: "#B8BBC4",
        showLabel: false
      }}
    >
      <Tab.Screen name="main" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Posts" component={ModalScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Posts2"
          mode="modal"
          component={PostScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ModalScreen = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="modal"
        mode="modal"
        component={PostScreen}
        options={{ headerShown: false }}
      />
    </ModalStack.Navigator>
  );
};

export default MainNavigation;
