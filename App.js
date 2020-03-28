import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import MainNavigation from "./navigation/MainNavigation";
import { AppLoading } from "expo";
import Fire from "./Fire";

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
    return <MainNavigation />;
  }
}

export default App;
