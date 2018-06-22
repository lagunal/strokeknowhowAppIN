import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import SubHeadingText from '../components/UI/SubHeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

class BloodPressureScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    static navigatorButtons = {
      rightButtons: [
        {
            icon:  require('../assets/baseline_chevron_right_black_24pt_2x.png'),
            title: "Forward",
            label: "Forward",
            id: "forwardButton"
        }
      ]
    }

    onNavigatorEvent = event => {
      if (event.type === "NavBarButtonPress") {
        if (event.id === "forwardButton") {
          this.props.navigator.push({
              screen: "StrokeApp.RangeMotionScreen",
              title: "Range of Motion",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText><SubHeadingText>Blood pressure</SubHeadingText></MainText>

            <MainText>
              • Higher (systolic) pressure during a heartbeat. 
              • Lower (diastolic) pressure is between beats. Blood pressure higher than 120/80, lower than (140/90), you are pre-hypertensive.
              • Blood pressure higher than 140/90, lower than 160/100, you have Stage 1 high blood pressure. Blood pressure higher than 160/100, you have Stage 2 high blood pressure. 
            </MainText>

            <MainText><SubHeadingText>Testing Blood Sugar </SubHeadingText></MainText>

            <MainText>
              • Blood glucose test is used for diabetes. Results used to regulate medications, diet. 
              • Ask when to test? Numbers to report.  
            </MainText>

            <ImageContainer src={require('../assets/confucious.png')} />

            <PictureLegend>
              It doesn’t matter how slow you go 
              as long as you do not stop.
                                    Confucious
            </PictureLegend>

            <PictureLegend>
              https://www.naric.com NARIC (National Rehabilitation Information Center) Best place for answers in English and Spanish about disability and rehabilitation information. 
              Call, email, chat 8:30-5:30 EST, M to F. 800/346-2742 (V), 301/459-5984 (TTY).
            </PictureLegend>

            <MainText><SubHeadingText>Questions for Physical Therapists</SubHeadingText></MainText>

            <MainText>
              • How to continue physical therapy?  
              • Exercises to do? How? • How often? 
              How long? • Benefits? Purpose?
            </MainText>


            <MainText>
                Get FREE Interactive Physical Therapy Toolkit at 
            </MainText>
            <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
              www.strokeknowhow.org 
              </Text>
            </TouchableOpacity>

            <ImageContainer src={require('../assets/physical-therapy-icon.png')} />
            
            </BodyScroll>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },

  });

  

export default BloodPressureScreen;