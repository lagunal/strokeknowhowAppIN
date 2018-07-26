import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";


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

  handlePressEmergency = () => {
    this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }
  handlePressMedications = () => {
    this.props.navigator.push({
        screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }
  handlePressHelpNeeded = () => {
    this.props.navigator.push({
        screen: "StrokeApp.HelpNeededToolkitScreen",
    });
  }
  handlePressPhysical = () => {
    this.props.navigator.push({
        screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }
  handlePressSchedule = () => {
    this.props.navigator.push({
        screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  render() {

    return (
      <View style={styles.container}>


       <TouchableOpacity onPress={this.handlePressHelpNeeded}>
            <MainText>
            <HeadingText>
                Help Needed Toolkit
            </HeadingText>
            </MainText>  
        </TouchableOpacity>
   
        <TouchableOpacity onPress={this.handlePressSchedule}>
            <MainText>
            <HeadingText>
                Weekly Schedule Toolkit
            </HeadingText>
            </MainText>  
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePressMedications}>
            <MainText>
            <HeadingText>
                Medications Toolkit
            </HeadingText>
            </MainText>  
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePressPhysical}>
            <MainText>
            <HeadingText>
                Physical Therapy Toolkit
            </HeadingText>
            </MainText>  
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handlePressEmergency}>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,

  },


});


export default ToolkitHomeScreen;