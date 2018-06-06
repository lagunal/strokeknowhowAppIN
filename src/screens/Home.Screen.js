
import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";

import {
  StyleSheet, View, Image, TouchableOpacity
} from 'react-native';

import Footer from '../components/Footer';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";

class HomeScreen extends Component {

  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
      if (event.type === "NavBarButtonPress") {
          if (event.id === "sideDrawerToggle") {
              this.props.navigator.toggleDrawer({
                  side: "left"
              });
          } 
      }  
  }

  learnMoreHandler = () => {
    this.props.navigator.push({
      screen: "StrokeApp.LearnMoreScreen",
      title: "One man's Journey",

    });  
  }

  render() {

    return (
      <View style={styles.container}>
        <Image source={require('../assets/banner.jpg')} style={styles.banner} />
        <MainText>
          <HeadingText>
            Worldwide stroke community learning from one another
          </HeadingText>
        </MainText>
        <Image source={require('../assets/home.png')} style={styles.image} />
        <MainText>
        We’re living through a time when every 
        family affected by stroke must find out what it will 
        take to reclaim your life – there’s no other way! 
        </MainText>
        <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler}>Learn More >></Button>         
        <Footer 
           navigator={this.props.navigator} 
           navBkText={'Home'} navBkAction={'StrokeApp.HomeScreen'}
           navFdText={'A New Day'} navFdAction={'StrokeApp.NewDayScreen'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    //paddingTop: 20,
  },
  banner: {
    //width: '100%',
    height: 110,
  },
  image: {
    width: '100%',
  },
});


export default HomeScreen;