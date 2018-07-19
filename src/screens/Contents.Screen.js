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
  onNavigatorEvent = event => {

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

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.HomeScreen', 'Home')}>
                <View style={styles.item}>    
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Home - A New Day   
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MovingSafelyScreen','Moving Safely')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Moving Safely
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.WeeklyPlanScreen','Weekly Plan')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Weekly Plan
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.FatigueScreen','Fatigue')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Fatigue is a challenge
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MedicationsScreen','Medications')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Organizing Medications
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BladderControlScreen','Bladder Control')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Bladder Control
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BloodPressureScreen','Blood Pressure')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Blood pressure
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.RangeMotionScreen','Range of Motion')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Range of Motion
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.SkinCareScreen','Skin Care')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Skin Care
                        </SubHeadingText>
                    </MainText>
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.GettingUpScreen','Getting Up')}>
                <View style={styles.item}> 
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Getting Up When Feeling Down
                        </SubHeadingText>
                    </MainText>
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BrainBodyScreen','Brain/Body')}>
                <View style={styles.item}>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Brain/Body Connection 
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.EmergencyScreen','Emergency')}>
                <View style={styles.item}>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Emergency
                        </SubHeadingText>
                    </MainText>  
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BioScreen','Bio')}>
                <View style={styles.item}>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Florence Weiner Bio
                        </SubHeadingText>
                    </MainText>
                    <Icon style={styles.icon} name="ios-arrow-round-forward" size={40} md="md-arrow-round-forward"></Icon>  
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  title: {
    textAlign: 'left',
  },
  icon: {
      marginRight: 20,
  }
});


export default ContentsScreen;