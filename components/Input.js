import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class InputField extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.inputTitle}> {this.props.title} </Text>
        <TextInput
          placeholder={this.props.placeholderText}
          secureTextEntry={this.props.isSecure}
          style={styles.input}
        ></TextInput>
        <View
          style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    color: "#ABB4BD",
    fontSize: 14
  },
  input: {
    paddingVertical: 12,
    color: "#1D2829",
    fontSize: 14,
    fontFamily: "regular"
  }
});
