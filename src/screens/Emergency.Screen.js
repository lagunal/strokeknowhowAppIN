import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const emergencyIcon = require('../assets/emergency-station-icon.png');

class EmergencyScreen extends Component {
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
              screen: "StrokeApp.BioScreen",
              title: "About Us",
          });
        }
      }  
    }
    handleEmergency = () => {
      this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

                <LinkToolkitWrapper 
                  text={'Share Interactive Emergency Information Station Toolkit with family. (Click image below)'}
                  source={emergencyIcon}
                  onPress={this.handleEmergency}
                />

                {/* <MainText>
                    If you believe it is an emergency – it probably is! Get help immediately. 
                    Hospital will call the doctor for information. 
                    It helps to know medical condition, medications (name, dosage).           
                </MainText> */}

                <MainText><HeadingText>Don’t wait. Get help.</HeadingText></MainText>

                <MainText style={styles.bullets}>
                {`\u2022`} Call 911 or your emergency number.   
                </MainText>      

                <MainText style={styles.bullets}>
                {`\u2022`} Report possible stroke, or another emergency. 
                </MainText>    

                <MainText style={styles.bullets}>
                {`\u2022`} Answer questions in clear, short answers.
                    If you need a translator, ask immediately. 
                </MainText>    

                <MainText style={styles.bullets}>
                {`\u2022`} Do not hang up first: Wait for instructions. 
                </MainText> 
                

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

  });

  

export default EmergencyScreen;