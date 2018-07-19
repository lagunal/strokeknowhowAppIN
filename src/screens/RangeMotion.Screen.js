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

            <MainText><HeadingText>Range-of-Motion</HeadingText></MainText>
            {/* <View>
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/9._How_Shoulder_Blade_Motion_and_Trunk_Rotation_work_together.mp4"}}
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
            </View> */}
            <MainText>
                Range-of-motion exercises can keep joints
                moving freely and fully. Some exercises are to
                do either by yourself or with someone.
            </MainText>
            <MainText>
            {`\u2022`} Do all exercises in a slow, smooth motion.
                      Create a relaxed, unhurried, calm atmosphere –
                      a partnership.
            </MainText>  
            <MainText>
            {`\u2022`} A helper firmly holds the joint being exercised
                      with one hand and the other to create, guide
                      movement. Helpers need to stop exercise when
                      a joint is not moving freely, or if there is
                      discomfort.
            </MainText>          

            <MainText><HeadingText>Body Positioning</HeadingText></MainText>
            <MainText>
                  At all times — whether lying in bed, sitting, or
                  walking — good body positioning is essential for
                  body&#39;s basic soundness. Will help prevent
                  contractures, a shortening of muscles around
                  joints.
            </MainText>
            <MainText>
            {`\u2022`} Head and neck need to be in alignment to keep
                      balance. Position of your head affects muscle
                      tone of the trunk, arms, legs. If turned to one
                      side, can interfere with balance, ability to move
                      about.
            </MainText>  
            <MainText>
            {`\u2022`} Your wrist should be extended, keeping your
                      fingers as straight as possible. Hips, knees,
                      ankles should not roll outward when sitting.
            </MainText>   
            <MainText>
            {`\u2022`} Change your position often. Lift your leg to
                      reposition your foot when it drops down, raise
                      your affected arm with your stronger arm to
                      realign your position.
            </MainText>   

            <MainText style={{alignSelf: 'center'}}>
               More at
            </MainText>
            <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
              <Text style={[{color: '#0d0d0d'} , {fontSize: 20}, {textDecorationLine: 'underline'},{alignSelf: 'center'} ]}>
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