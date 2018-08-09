import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const physicalIcon = require('../assets/physical-therapy-icon.png');

class BloodPressureScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    handlePhysical = () => {
      this.props.navigator.push({
        screen: "StrokeApp.PhysicalToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText><HeadingText>Blood Pressure</HeadingText></MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Higher (systolic) pressure during a heartbeat. 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Lower (diastolic) pressure is between beats. 
            </MainText>
            <MainText style={styles.bullets}>   
            {`\u2022`} Blood pressure higher than 120/80, lower than (140/90), you are pre-hypertensive.
            </MainText>
            
            <MainText style={styles.bullets}>
            {`\u2022`} Blood pressure higher than 140/90, lower than 160/100, you have <Text style={{textDecorationLine: 'underline'}}>Stage 1</Text> high blood pressure. 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Blood pressure higher than 160/100, you have <Text style={{textDecorationLine: 'underline'}}>Stage 2</Text> high blood pressure. 
            </MainText>

            <MainText><HeadingText>Testing Blood Sugar </HeadingText></MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Blood glucose test is used for diabetes. Results are used to regulate medications, diet.  
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} When to test? Numbers to report.  
            </MainText>
            
            <View style={styles.border}>

                <MainText style={[styles.boxText, {fontWeight: 'bold'}]}>
                  National Rehabilitation 
                </MainText>
                <MainText style={[styles.boxText, {fontWeight: 'bold'}]}>
                  Information Center (NARIC)
                </MainText>                
                <TouchableOpacity onPress={() => Linking.openURL('https://www.naric.com')}>
                  <MainText style={styles.boxLink}>
                    https://www.naric.com
                  </MainText>
                </TouchableOpacity>
                <MainText style={styles.boxText}>
                    1-800-346-2742. English / Spanish
                </MainText>

            </View>
            <MainText><HeadingText>Physical Therapists</HeadingText></MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} How to continue physical therapy?  
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Exercises to do? How? How often? 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} How long?
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Benefits? Purpose?
            </MainText>

            <LinkToolkitWrapper 
              text={'Share Interactive Physical Therapy Toolkit with family. (click image below)'}
              source={physicalIcon}
              onPress={this.props.pressPhysical ? this.props.pressPhysical : this.handlePhysical}
            />

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
    bullets: {
      marginVertical: 5,
    },
    border: {
      margin: 5,
      backgroundColor: '#e6f2ff',
      height: 90,
    },
    boxText: {
      margin: 0,
      alignSelf: 'center'
    },
    boxLink: {
      alignSelf: 'center',
      marginVertical: 0,
      textDecorationLine: 'underline'
    }
  });

  

export default BloodPressureScreen;