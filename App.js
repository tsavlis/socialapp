import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import MainNavigation from "./navigation/MainNavigation";
import { AppLoading } from "expo";
import Fire from "./Fire";
import { Provider } from "react-redux";
import store from "./store/store";
import { NavigationContainer } from "@react-navigation/native";

class App extends React.Component {
  state = {
    fontLoaded: false
  };

  fetchFonts = () => {
    Font.loadAsync({
      regular: require("./assets/fonts/AvenirNextLTPro-Regular.otf"),
      bold: require("./assets/fonts/AvenirNextLTPro-Bold.otf")
    });
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({ fontLoaded: true })}
        />
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
