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
import ImageToolkitContainer from "../components/UI/ImageToolkitContainer";
import BorderBox from '../styles/BorderBox';

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


    render() {
        return (
          <View style={styles.container}>
            <BodyScroll> 
                <MainText><HeadingText>Organizing Medications</HeadingText></MainText>

                <ImageContainer src={require('../assets/medications.png')} />
                
                <MainText>
                  Ruth, M. 78, uses a pill organizer and Interactive Medication Toolkit. Ruth’s daughter, Linda, can also see the Toolkit.
                </MainText>

                <MainText>
                    Share  the  Interactive  Medication  toolkit  with  your  family. (click image below)
                </MainText>
                {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                  <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                  www.strokeknowhow.org 
                  </Text>
                </TouchableOpacity> */}

                <ImageToolkitContainer src={require('../assets/medication-icon.png')} />


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