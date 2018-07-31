import React, { Component } from 'react';

import {
  StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';

import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import MainText from "../../components/UI/MainText";



const helpNeededImage = require('../../assets/help_needed_icon.png');
const scheduleImage = require('../../assets/weekly-schedule-icon.png');
const medicationsImage = require('../../assets/medication-icon.png');
const physicalImage = require('../../assets/physical-therapy-icon.png');
const emergencyImage = require('../../assets/emergency-station-icon.png');

class ToolkitHomeScreen extends Component {

  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {

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

        <View style={styles.row}>
                <View style={styles.toolkitWrap}>
                    <MainText><HeadingText>Help Needed</HeadingText></MainText> 
                    <View style={styles.imageWrap}> 
                        <TouchableOpacity onPress={this.handlePressHelpNeeded}>
                                <Image source={helpNeededImage} style={styles.image}  />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.toolkitWrap}>
                    <MainText><HeadingText>Schedule</HeadingText></MainText> 
                    <View style={styles.imageWrap}> 
                        <TouchableOpacity onPress={this.handlePressSchedule}>
                                <Image source={scheduleImage} style={[{width: '95%'} , {height: '95%'}]} />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>

        <View style={styles.row}>
                <View style={styles.toolkitWrap}>
                    <MainText><HeadingText>Medications</HeadingText></MainText> 
                    <View style={styles.imageWrap}> 
                        <TouchableOpacity onPress={this.handlePressMedications}>
                                <Image source={medicationsImage} style={styles.image}  />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.toolkitWrap}>
                    <MainText><HeadingText>Therapy</HeadingText></MainText> 
                    <View style={styles.imageWrap}> 
                        <TouchableOpacity onPress={this.handlePressPhysical}>
                                <Image source={physicalImage} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>

        <View style={styles.row}>
                <View style={styles.toolkitWrap}>
                    <MainText><HeadingText>Emergency</HeadingText></MainText> 
                    <View style={styles.imageWrap}> 
                        <TouchableOpacity onPress={this.handlePressEmergency}>
                                <Image source={emergencyImage} style={styles.image}  />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.toolkitWrap}>
                    <View style={styles.imageWrap}> 
                    </View>
                </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  toolkitWrap: {
    flex: 1,

  },
  imageWrap: {
     flex: 1,
  },
  image: {
      width: '100%',
      height: '100%'
  }

});


export default ToolkitHomeScreen;