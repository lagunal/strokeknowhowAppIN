import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";

class MovingSafelyScreen extends Component {

    static navigatorButtons = {
      rightButtons: [
        {
            //icon:  require('../../img/navicon_add.png'),
            title: "Forward",
            label: "Forward",
            id: "forwardButton"
        }
      ]
    }
  

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        // Icon.getImageSource('user', 30, 'red').then((source) => {
        //   this.setState({ userIcon: source });
          
        // });
    };
    
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
                  screen: "StrokeApp.LearnMoreScreen",
                  title: "Learn More",
              });
          }
        }  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <ImageContainer src={require('../assets/boton-video.png')} />
                    <HeadingText>
                      Share the Care
                    </HeadingText>
                    <ImageContainer src={require('../assets/family.png')} />
                    <MainText>  
                        When my wife, Tina, had a stroke,
                          it hit our whole family, we each had 
                          a job to do– even the kids.
                    </MainText>
                    <Text style={{marginLeft: 300}}>Javier</Text>
                    <MainText>

                    </MainText>
                    <ImageContainer src={require('../assets/help-needed.jpg')} />                      
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