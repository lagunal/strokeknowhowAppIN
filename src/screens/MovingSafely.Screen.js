import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import SubHeadingText from '../components/UI/SubHeadingText';

class MovingSafelyScreen extends Component {

    // Promise.all([
    //   Icon.getImageSource("ios-arrow-forward", 30)
    // ]).then(sources => {
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

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);        
    }
        
    onNavigatorEvent = event => {
        // if (event.type === "ScreenChangedEvent") {
        //   if (event.id === "willDisappear") {
        //     this.props.navigator.pop({
        //       animated: true, // does the pop have transition animation or does it happen immediately (optional)
        //       animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
        //     });
        //   }
        // }
        if (event.type === "NavBarButtonPress") {
            if (event.id === "forwardButton") {
              this.props.navigator.push({
                  screen: "StrokeApp.WeeklyPlanScreen",
                  title: "Weekly Plan",
              });
          }
        }  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <ImageContainer src={require('../assets/boton-video.png')} />
                    <MainText><SubHeadingText>How Helpers Protect Themselves</SubHeadingText></MainText>
                    
                    <MainText>  
                    • When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
                    </MainText>
                    <MainText>
                    • Stand with feet slightly apart, one foot ahead of the other to keep your balance and shift your weight if necessary.
                    </MainText>
                    <MainText><HeadingText>
                      Share the Care
                    </HeadingText></MainText>
                    <ImageContainer src={require('../assets/family.png')} />
                    <MainText>  
                        When my wife, Tina, had a stroke,
                          it hit our whole family, and we each had 
                          a job to do– even the kids.
                    </MainText>
                    <Text style={{marginLeft: 300}}>Javier</Text>
                                    
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
    },

  });

  

export default MovingSafelyScreen;