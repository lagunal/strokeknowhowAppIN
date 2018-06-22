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
              title: "Florence Weiner Bio",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText>
                Get FREE Interactive Emergency Information Station Toolkit at 
            </MainText>
            <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
              www.strokeknowhow.org 
              </Text>
            </TouchableOpacity>

            <ImageContainer src={require('../assets/emergency-station-icon.png')} />    

            <MainText>
                If you believe it is an emergency – it probably is! Get help immediately. 
                Hospital will will call the doctor for information. 
                It helpsto know medical condition, medications (name, dosage).           
            </MainText>

            <MainText><SubHeadingText>Type in information on Emergency Toolkit, keep it handy</SubHeadingText></MainText>

            <MainText>
                Don’t wait. Get help.
            </MainText>

            <MainText>
                Call 911 or your emergency number.   
            </MainText>      

            <MainText>
                • Report possible stroke, or another emergency. 
            </MainText>    

            <MainText>
                • Answer questions in clear, short answers.
                If you need a translator, ask immediately. Do not hang up first: Wait for instructions. 
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

  });

  

export default EmergencyScreen;