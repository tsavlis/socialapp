import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { Colors } from "../constants";
import firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
export default class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    errorMessage: null
  };
  SignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
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
        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={32}
            color={Colors.white}
          />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            top: 64,
            alignItems: "center",
            width: "100%"
          }}
        >
          <Text style={styles.greeting}> Sign Up </Text>
          <TouchableOpacity style={styles.avatar}>
            <Ionicons
              name="ios-add"
              size={40}
              color={Colors.white}
              style={{ marginTop: 6, marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Full Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
          </View>

          <View style={{ marginTop: 32 }}>
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
          onPress={this.SignUp}
        >
          <Text style={{ color: Colors.white, fontWeight: "500" }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ color: Colors.dark, fontSize: 13 }}>
            Allready have an account?{" "}
            <Text style={{ color: Colors.primary, fontWeight: "500" }}>
              Sign In
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    textAlign: "center",
    color: "#fff"
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
  },
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(21, 22 , 41, 0.3)"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E1E2E6",
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center"
  }
});
