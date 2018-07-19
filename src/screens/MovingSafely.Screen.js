import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import SubHeadingText from '../components/UI/SubHeadingText';
import LegendText from "../components/UI/LegendText";
import PictureLegend from "../components/UI/PictureLegend";

class MovingSafelyScreen extends Component {

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
                    <View style={{padding: 20}}>
                      <Video
                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/16.Transfer-from-bed-to-wheelchair.mp4"}}
                        style={{height: 300}}
                        rate={1}
                        paused={false}
                        volume={1}
                        muted={false}
                        playWhenInactive={false}
                        resizeMode='contain'
                        repeat={false}
                        />
                    </View>
                    <MainText><HeadingText>Protecting Helpers</HeadingText></MainText>
                    
                    <MainText>  
                    When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
                    </MainText>
                    <MainText>
                    Stand with feet slightly apart, one foot ahead of the other to keep your balance and shift your weight if necessary.
                    </MainText>
                    <MainText><HeadingText>
                      Sharing Care
                    </HeadingText></MainText>
                    <ImageContainer src={require('../assets/family.png')} />
                    <MainText>  
                        When my wife, Tina, had a stroke,
                          it hit our whole family, and we each had 
                          a job to do– even the kids.
                    </MainText>
                    <PictureLegend>-- Javier</PictureLegend>
                                    
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