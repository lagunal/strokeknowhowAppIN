import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';
import Video from 'react-native-video';

import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import SubHeadingText from '../components/UI/SubHeadingText';
import ImageContainer from "../components/UI/ImageContainer";

class RangeMotionScreen extends Component {
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
              screen: "StrokeApp.SkinCareScreen",
              title: "Skin Care",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText><SubHeadingText>Good Body Positioning </SubHeadingText></MainText>

              <Video
                source={require('../assets/8._Proper_Sitting_Posture.mp4')}
                style={{height: 200}}
                rate={1}
                paused={false}
                volume={1}
                muted={false}
                playWhenInactive={true}
                resizeMode='contain'
                repeat={true}
                />

              <View style={{margin: 30}}>
              </View>

              <Video
                source={require('../assets/9._How_Shoulder_Blade_Motion_and_Trunk_Rotation_work_together.mp4')}
                style={{height: 200}}
                rate={1}
                paused={false}
                volume={1}
                muted={false}
                playWhenInactive={true}
                resizeMode='contain'
                repeat={true}
                />


            <MainText>
               More at
            </MainText>
            <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
              www.strokeknowhow.org 
              </Text>
            </TouchableOpacity>

            
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

  
export default RangeMotionScreen;