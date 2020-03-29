import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

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
      <Tab.Screen name="Posts" component={PostScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
const MainNavigation = props => {
  const authToken = useSelector(state => state.auth.auth);

  useEffect(() => {
    console.log(authToken);
  }, [authToken]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={TabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    userdata: state.auth.auth
  };
};

export default connect(mapStateToProps, null)(MainNavigation);
