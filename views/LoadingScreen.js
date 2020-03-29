import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../constants";
import firebase from "firebase";
import * as actions from "../store/actions";
import { connect } from "react-redux";

class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.authSuccess(user);
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
const mapStateToProps = state => {
  return {
    //auth: state.auth.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    authStart: () => dispatch(actions.authLoginStart()),
    authFail: error => dispatch(actions.authLoginFail(error)),
    authSuccess: user => dispatch(actions.authLoginSuccess(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
