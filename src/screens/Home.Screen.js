
import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";

import {
  StyleSheet, View, Image, Text, TouchableOpacity
} from 'react-native';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";


export let rootNavigator = null; //variable to export navigation object to drawer

class HomeScreen extends Component {

  constructor(props) {
      super(props);
      rootNavigator = this.props.navigator; //variable to export navigation object to drawer
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
      if (event.type === "NavBarButtonPress") {
          if (event.id === "forwardButton") {
            this.props.navigator.push({
                screen: "StrokeApp.MovingSafelyScreen",
                title: "Moving Safely",
            });
        }
      }  

  }


  render() {

    return (
      <View style={styles.container}>
      <BodyScroll>
        <ImageContainer src={require('../assets/home.png')} />  
        <MainText>
            I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
            I overheard the word ‘stroke,’ and realized they were talking about me. 
            Out of the hospital in five days: I could stand, but not walk. My family couldn’t understand what I was trying to say to them. 
            Insurance paid only a handful of physical therapy. NOW WHAT?
        </MainText>
        <MainText >
            We’re living through a time when every 
            family affected by stroke must find out what it will 
            take to reclaim your life – there’s no other way!                                             
        </MainText> 
        <Text style={{marginLeft: 300}}>Mike</Text >    
        <MainText>
          <HeadingText>
            A new day
          </HeadingText>
        </MainText>  
        <View style={styles.imageContainer}>  
          <ImageContainer src={require('../assets/newDay.png')} />
        </View>
        <MainText>
            • It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. It lowers capacity of the heart’s pumping rate, reduces lung capacity, alters blood pressure, and increases chance 
            of pneumonia. 
        </MainText>
        <MainText>  
            • Do slow stretches in bed to ease stiffness. Before sitting up, roll from side to side to involve both sides of your body. 
        </MainText>
      </BodyScroll> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },


});


export default HomeScreen;