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
import HeadingText from "../components/UI/HeadingText";

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
              name="ios-home-outline"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><HeadingText>Home</HeadingText></MainText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-list-box-outline"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><HeadingText>Contents</HeadingText></MainText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-create-outline"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><HeadingText>Toolkits</HeadingText></MainText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-log-in"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><HeadingText>Sign In</HeadingText></MainText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    //paddingTop: 10,
    backgroundColor: "#0773B9",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#0773B9"
  },
  drawerItemIcon: {
    marginRight: 10
  },
  textColor: {
    color: "white",
  },
});

export default SideDrawer;
