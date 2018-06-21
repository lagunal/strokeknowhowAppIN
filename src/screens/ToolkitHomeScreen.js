import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";


class ToolkitHomeScreen extends Component {

  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    //   if (event.type === "NavBarButtonPress") {
    //       if (event.id === "forwardButton") {
    //         this.props.navigator.push({
    //             screen: "StrokeApp.MovingSafelyScreen",
    //             title: "Moving Safely",
    //         });
    //     }
    //   }  

  }

  handlePress = () => {
    this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }

  render() {

    return (
      <View style={styles.container}>


       <TouchableOpacity onPress={this.handlePress}>
            <MainText>
            <HeadingText>
                Emergency Toolkit
            </HeadingText>
            </MainText>  
        </TouchableOpacity>
   
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


export default ToolkitHomeScreen;