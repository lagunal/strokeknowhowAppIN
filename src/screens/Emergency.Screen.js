import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import HeadingText from '../components/UI/HeadingText';
import ImageToolkitContainer from "../components/UI/ImageToolkitContainer";

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
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText>
                Share  the  Interactive  Emergency  Information  Station  Toolkit  with  your  family. (Click image below)
            </MainText>
            {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
              www.strokeknowhow.org 
              </Text>
            </TouchableOpacity> */}

            <ImageToolkitContainer src={require('../assets/emergency-station-icon.png')} />    

            <MainText>
                If you believe it is an emergency – it probably is! Get help immediately. 
                Hospital will call the doctor for information. 
                It helps to know medical condition, medications (name, dosage).           
            </MainText>

            <MainText><HeadingText>Don’t wait. Get help.</HeadingText></MainText>

            <MainText>
            {`\u2022`} Call 911 or your emergency number.   
            </MainText>      

            <MainText>
            {`\u2022`} Report possible stroke, or another emergency. 
            </MainText>    

            <MainText>
            {`\u2022`} Answer questions in clear, short answers.
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