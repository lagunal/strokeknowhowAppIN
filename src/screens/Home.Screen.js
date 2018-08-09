
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar
} from 'react-native';


import BodyScroll from "../components/UI/BodyScroll";
import NewDayScreen from "./NewDay.Screen";
import MovingSafelyScreen from "./MovingSafely.Screen";
import WeeklyPlanScreen from "./WeeklyPlan.Screen";
import MedicationsScreen from "./Medications.Screen";
import BladderControlScreen from './BladderControl.Screen';
import BloodPressureScreen from './BloodPressure.Screen';
import RangeMotionScreen from './RangeMotion.Screen';
import SkinCareScreen from './SkinCare.Screen';
import GettingUpScreen from './GettingUp.Screen';
import BrainBodyScreen from './BrainBody.Screen';
import EmergencyScreen from './Emergency.Screen';
import BioScreen from './Bio.Screen';


class HomeScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  handleHelpNeeded = () => {
    this.props.navigator.push({
      screen: "StrokeApp.HelpNeededToolkitScreen",
    });
  }

  handleSchedule = () => {
    this.props.navigator.push({
      screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  handleMedication = () => {
    this.props.navigator.push({
      screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }

  handlePhysical = () => {
    this.props.navigator.push({
      screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }

  handleEmergency = () => {
    this.props.navigator.push({
      screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }

  render() {

    return (
      <View style={styles.container}>
          <StatusBar
              barStyle="light-content"
          />  
          <BodyScroll>

            <NewDayScreen />

            <MovingSafelyScreen />

            <WeeklyPlanScreen 
                pressSchedule={this.handleSchedule}
                pressHelp={this.handleHelpNeeded}
            />

            <MedicationsScreen 
                pressMedication={this.handleMedication}
            />

            <BladderControlScreen />

            <BloodPressureScreen 
                pressPhysical={this.handlePhysical}
            />

            <RangeMotionScreen />

            <SkinCareScreen />

            <GettingUpScreen />

            <BrainBodyScreen />

            <EmergencyScreen 
                pressEmergency={this.handleEmergency}
            />

            <BioScreen />


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