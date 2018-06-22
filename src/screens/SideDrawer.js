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

import {rootNavigator} from './Home.Screen'; //navigator object from homeScreen
import SubHeadingText from "../components/UI/SubHeadingText";

class SideDrawer extends Component {

  loginHandler = () => {
    rootNavigator.push({
      screen: 'StrokeApp.LoginScreen',
    });
    rootNavigator.toggleDrawer({
      side: 'left',
      animated: true,
      to: 'close',
    });
  }

  homeHandler = () => {
    rootNavigator.push({
      screen: 'StrokeApp.HomeScreen',
      title: "Home",
    });
    rootNavigator.toggleDrawer({
      side: 'left',
      animated: true,
      to: 'close',
    });
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 5 }
        ]}
      >
        <TouchableOpacity onPress={() => this.homeHandler() }>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-home-outline"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><SubHeadingText>Home</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Emergency information</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Help Needed Toolkit</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Weekly Schedule Toolkit</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Medications Toolkit</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Physical Therapy Toolkit</SubHeadingText></MainText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.loginHandler() }>
          <View style={styles.drawerItem}>
            <Icon
              name="ios-log-out"
              size={30}
              color="white"
              style={styles.drawerItemIcon}
            />
            <MainText style={styles.textColor}><SubHeadingText>Log Out</SubHeadingText></MainText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
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
