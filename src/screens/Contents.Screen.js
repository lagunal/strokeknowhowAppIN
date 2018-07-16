import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';


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
                    <MainText>
                    <SubHeadingText>
                        Home - A New Day
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MovingSafelyScreen','Moving Safely')}>
                    <MainText>
                    <SubHeadingText>
                        Moving Safely
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.WeeklyPlanScreen','Weekly Plan')}>
                    <MainText>
                    <SubHeadingText>
                        Weekly Plan
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.FatigueScreen','Fatigue')}>
                    <MainText>
                    <SubHeadingText>
                       Fatigue is a challenge
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.MedicationsScreen','Medications')}>
                    <MainText>
                    <SubHeadingText>
                        Organizing Medications
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BladderControlScreen','Bladder Control')}>
                    <MainText>
                    <SubHeadingText>
                        Bladder Control
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BloodPressureScreen','Blood Pressure')}>
                    <MainText>
                    <SubHeadingText>
                        Blood pressure
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.RangeMotionScreen','Range of Motion')}>
                    <MainText>
                    <SubHeadingText>
                        Range of Motion
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.SkinCareScreen','Skin Care')}>
                    <MainText>
                    <SubHeadingText>
                        Skin Care
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.GettingUpScreen','Getting Up')}>
                    <MainText>
                    <SubHeadingText>
                        Getting Up When Feeling Down
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BrainBodyScreen','Brain/Body')}>
                    <MainText>
                    <SubHeadingText>
                        Brain/Body Connection 
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.EmergencyScreen','Emergency')}>
                    <MainText>
                    <SubHeadingText>
                        Emergency
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.GettingOrganizedScreen','Getting Organized')}>
                    <MainText>
                    <SubHeadingText>
                        Getting Organized
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('StrokeApp.BioScreen','Bio')}>
                    <MainText>
                    <SubHeadingText>
                        Florence Weiner Bio
                    </SubHeadingText>
                    </MainText>  
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
    paddingTop: 30,

  },


});


export default ContentsScreen;