import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";

import {rootNavigator} from './Home.Screen'; //navigator object from homeScreen
import SubHeadingText from "../components/UI/SubHeadingText";

class SideDrawer extends Component {

  async logoutHandler () {
    const user = await AsyncStorage.setItem('user', '');
    rootNavigator.push({
      screen: 'StrokeApp.LoginScreen',
      title: 'Login'
    });
    rootNavigator.popToRoot({animated: true, animationType: 'fade',});

    rootNavigator.toggleDrawer({
      side: 'left',
      animated: true,
      to: 'close',
    });
    
  };

  emergencyHandler = () => {
      rootNavigator.push({
        screen: 'StrokeApp.EmergencyToolkitScreen',
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
          { width: Dimensions.get("window").width * 2 }
        ]}
      >
        <View style={styles.drawerItem}>
          <MainText style={styles.textColor}><SubHeadingText>TOOLKITS</SubHeadingText></MainText>
        </View>
        <TouchableOpacity onPress={this.emergencyHandler}>
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
            <MainText style={styles.textColor}><SubHeadingText>Help Needed</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Weekly Schedule</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Medications</SubHeadingText></MainText>
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
            <MainText style={styles.textColor}><SubHeadingText>Physical Therapy</SubHeadingText></MainText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.logoutHandler()}>
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
    backgroundColor: "#1749FF",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1749FF"
  },
  drawerItemIcon: {
    marginRight: 10
  },
  textColor: {
    color: "white",
  },
});

export default SideDrawer;
