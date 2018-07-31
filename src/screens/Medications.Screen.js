import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text, 
    Linking
  } from 'react-native';


import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const helpNeededIcon = require('../assets/medication-icon.png');

class NewDayScreen extends Component {
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
              screen: "StrokeApp.BladderControlScreen",
              title: "Bladder Control",
          });
        }
      }  
    }

    handleMedication = () => {
      this.props.navigator.push({
        screen: "StrokeApp.MedicationsToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll> 
                <MainText><HeadingText>Organizing Medications</HeadingText></MainText>

                <ImageContainer src={require('../assets/medications.png')} />
                
                <MainText>
                    Ruth, M. 78, uses a pill organizer and the Interactive Medication Toolkit. Ruth’s daughter, can also see the Toolkit.
                </MainText>

                <LinkToolkitWrapper 
                  text={'Share Interactive Medication toolkit with family. (click image below)'}
                  source={helpNeededIcon}
                  onPress={this.handleMedication}
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },

  });

  

export default NewDayScreen;