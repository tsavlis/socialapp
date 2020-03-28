import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";
import { Colors } from "../constants";

export default class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "home" : "Auth");
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
