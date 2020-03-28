import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color={Colors.accent}
              onPress={() => this.props.navigation.navigate("Login")}
            />
            <Ionicons name="md-more" size={24} color={Colors.accent} />
          </View>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.dm}>
              <MaterialIcons name="chat" size={18} color={Colors.white} />
            </View>
            <View style={styles.active}></View>
            <View style={styles.add}>
              <Ionicons name="ios-add" size={48} color={Colors.white} />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Julie
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Photographer
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>473</Text>
              <Text style={[styles.text, styles.subtext]}>Posts</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#DFD8C8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1
                }
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>40,733</Text>
              <Text style={[styles.text, styles.subtext]}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>321</Text>
              <Text style={[styles.text, styles.subtext]}>Following</Text>
            </View>
          </View>
          <View style={{ marginTop: 32 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/media.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/media2.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/media3.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>
            <View style={styles.mediaCount}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }
                ]}
              >
                70
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }
                ]}
              >
                Media
              </Text>
            </View>
          </View>
          <Text style={[styles.subtext, styles.recent]}>Recent Activity</Text>

          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#414448", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Thanos Tsavlis </Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#414448", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Jon Doe </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16
  },
  text: {
    fontFamily: "regular",
    color: Colors.accent
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#414448",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    width: 20,
    height: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#414448",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  subtext: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "600"
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    top: "50%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.39)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 5
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});
