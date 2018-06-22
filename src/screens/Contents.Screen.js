import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import BodyScroll from '../components/UI/BodyScroll';


class ContentsScreen extends Component {

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

        <BodyScroll>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Home - A New Day
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Moving Safely
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Weekly Plan
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                       Fatigue is a challenge
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Organizing Medications
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Bladder Control
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Blood pressure
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Range of Motion
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Skin Care
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Getting Up When Feeling Down
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Brain/Body Connection 
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
                    <MainText>
                    <SubHeadingText>
                        Emergency
                    </SubHeadingText>
                    </MainText>  
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePress}>
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