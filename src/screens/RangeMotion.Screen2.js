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
import HeadingText from '../components/UI/HeadingText';

class RangeMotionScreen2 extends Component {
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

            <MainText><HeadingText>Good Body Positioning </HeadingText></MainText>
            <View>
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/8._Proper_Sitting_Posture.mp4"}}
                style={{height: 350}}
                rate={1}
                paused={false}
                volume={1}
                muted={true}
                playInBackground={false}
                playWhenInactive={false}
                resizeMode='contain'
                repeat={false}
                />
            </View>

            <HeadingText style={{alignSelf: 'center'}}>
               More
            </HeadingText>
            <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: 'blue'} , {fontSize: 20}, {alignSelf: 'center'} ]}>
              at www.strokeknowhow.org 
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

  
export default RangeMotionScreen2;