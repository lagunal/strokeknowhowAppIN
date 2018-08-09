import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import BodyScroll from '../components/UI/BodyScroll';


class ContentsScreen extends Component {

        
  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

  }


  handlePress = (screenName, screenTitle) => {
    this.props.navigator.push({
        screen: screenName,
        title: screenTitle
    });
  }
  
  render() {

    return (
      <View style={styles.container}>

        <BodyScroll>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.NewDayScreen', 'New Day')}>
                <View style={styles.item}>
                    <Icon style={styles.icon} name="ios-home" size={30} md="md-home"></Icon>    
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            A New Day   
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MovingSafelyScreen','Moving Safely')}>
                <View style={styles.item}> 
                    <Icon style={styles.icon} name="ios-alert" size={30} md="md-alert"></Icon>  
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Moving Safely
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.WeeklyPlanScreen','Weekly Plan')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="md-calendar" size={30} md="md-calendar"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Weekly Plan
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MedicationsScreen','Medications')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-medkit" size={30} md="md-medkit"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Medications
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BladderControlScreen','Bladder Control')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-man" size={30} md="md-man"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Bladder Control
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BloodPressureScreen','Blood Pressure')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-heart" size={30} md="md-heart"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Blood pressure
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.RangeMotionScreen','Range of Motion')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-walk" size={30} md="md-walk"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Range of Motion
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.SkinCareScreen','Skin Care')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-finger-print" size={30} md="md-finger-print"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Skin Care
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.GettingUpScreen','Getting Up')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-happy" size={30} md="md-happy"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Getting Up 
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BrainBodyScreen','Brain/Body')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-body" size={30} md="md-body"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Brain/Body
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.EmergencyScreen','Emergency')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-warning" size={30} md="md-warning"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Emergency
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

        </BodyScroll>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: '#b30000'
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  icon: {
      marginHorizontal: 10,
      color: 'white',
  }
});


export default ContentsScreen;