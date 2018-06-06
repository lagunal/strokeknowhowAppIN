import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";

class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-log-in"
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <MainText>Sign In</MainText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default SideDrawer;
