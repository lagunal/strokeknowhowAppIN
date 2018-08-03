
import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";

import {
  StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage, StatusBar
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";

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
      <StatusBar
          barStyle="light-content"
      />
      <BodyScroll>

        <ImageContainer src={require('../assets/home.png')} />  
        <MainText>    
            I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
            I overheard the word ‘stroke,’ and realized they were talking about me. 
            Out of the hospital in five days: I could stand, not walk.
            Insurance paid for a handful of physical therapy. NOW WHAT?
        </MainText>
        <PictureLegend style={{marginLeft: 250}}>-- Mike</PictureLegend>    
        <MainText>
          <HeadingText>
            A New Day
          </HeadingText>
        </MainText>  
        <View style={styles.imageContainer}>  
          <ImageContainer src={require('../assets/newDay.png')} />
        </View>
        <MainText style={[{marginVertical: 5}]}>
            {`\u2022`} It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. Lowers the capacity of heart’s pumping rate, reduces lung capacity, alters blood pressure, increases chance 
            of pneumonia. 
        </MainText>
        <MainText style={[{marginVertical: 5}]}>  
            {`\u2022`} Do slow stretches in bed to ease stiffness. Roll from side to side. 
        </MainText>
        <MainText style={[{marginVertical: 5}]}>  
            {`\u2022`} Before moving take your time, avoid quick changes to avoid becoming dizzy.  
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