import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation
} from "react-native";
import { Colors } from "../constants";
import firebase from "firebase";
import * as actions from "../store/actions";
import { connect } from "react-redux";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };
  handleLogin = () => {
    this.props.authStart();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.authSuccess(user.user);
        this.setState({ email: "", password: "", errorMessage: null });
        //  this.props.navigation.navigate("home");
      })
      .catch(error => {
        this.props.authFail(error.message);
        this.setState({ errorMessage: error.message });
      });
  };
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image
          source={require("../assets/images/home.jpg")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200
          }}
        />

        <Image
          source={require("../assets/logo.png")}
          resizeMode="cover"
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginTop: -30
          }}
        />
        <Text style={styles.greeting}> Sign In </Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.card, styles.button]}
          onPress={this.handleLogin}
        >
          <Text style={{ color: Colors.white, fontWeight: "500" }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: Colors.dark, fontSize: 13 }}>
            New to SocialApp?{" "}
            <Text style={{ color: Colors.primary, fontWeight: "500" }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    shadowColor: "rgba(171, 180, 189, 0.45)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: Colors.gray,
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: Colors.dark
  }
});
