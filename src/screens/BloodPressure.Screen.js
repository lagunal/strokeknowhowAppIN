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
import LegendText from "../components/UI/LegendText";
import BorderBox from '../styles/BorderBox';


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

            <MainText style={{color: 'red'}}>
            {`\u2022`} Higher (systolic) pressure during a heartbeat. 
            </MainText>
            <MainText style={{color: 'red'}}>  
            {`\u2022`} Lower (diastolic) pressure is between beats. Blood pressure higher than 120/80, lower than (140/90), you are pre-hypertensive.
            </MainText>
            <MainText style={{color: 'red'}}>
            {`\u2022`} Blood pressure higher than 140/90, lower than 160/100, you have Stage 1 high blood pressure. 
            </MainText>
            <MainText style={{color: 'red'}}>  
            {`\u2022`} Blood pressure higher than 160/100, you have Stage 2 high blood pressure. 
            </MainText>

            <MainText><SubHeadingText>Testing Blood Sugar </SubHeadingText></MainText>

            <MainText>
            {`\u2022`} Blood glucose test is used for diabetes. Results used to regulate medications, diet. 
            </MainText>
            <MainText>  
            {`\u2022`} Ask when to test? Numbers to report.  
            </MainText>

            <ImageContainer src={require('../assets/confucious.png')} />

            <PictureLegend>
              It doesn’t matter how slow you go 
              as long as you do not stop.
            </PictureLegend>
            <LegendText>Confucious</LegendText>
            
            <View style={BorderBox.border}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.naric.com')}>
                  <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                    https://www.naric.com
                  </Text>
                </TouchableOpacity>
                <MainText>
                  <Text style={{fontWeight: 'bold'}}>NARIC (National Rehabilitation Information Center)</Text> Best place for answers in English and Spanish about disability and rehabilitation information.
                </MainText>
                <MainText>   
                  <Text style={{fontWeight: 'bold'}}>Call, email, chat</Text> 8:30-5:30 EST, M to F. 800/346-2742 (V), 301/459-5984 (TTY).
                </MainText>
            </View>
            <MainText><SubHeadingText>Questions for Physical Therapists</SubHeadingText></MainText>

            <MainText>
            {`\u2022`} How to continue physical therapy?  
            </MainText>
            <MainText>  
            {`\u2022`} Exercises to do? How? How often? 
              How long? Benefits? Purpose?
            </MainText>


            <MainText>
              Share  the  Interactive  Physical  Therapy  Toolkit  with  your  family
            </MainText>
            {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
              www.strokeknowhow.org 
              </Text>
            </TouchableOpacity> */}
            
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