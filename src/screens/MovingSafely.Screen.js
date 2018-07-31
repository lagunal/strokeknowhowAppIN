import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import SubHeadingText from '../components/UI/SubHeadingText';
import LegendText from "../components/UI/LegendText";
import PictureLegend from "../components/UI/PictureLegend";
import BorderBox from '../styles/BorderBox';

class MovingSafelyScreen extends Component {


    static navigatorButtons = {
      
      rightButtons: [
        {
          
            //icon: sources[0],
            //icon: Icon.getImageSource(Platform.OS === 'android' ? "md-arrow-forward" : "ios-arrow-forward", 30).then((source) => this.setState({ icon: source })),
            icon:  require('../assets/baseline_chevron_right_black_24pt_2x.png'),
            //icon: this.state.userIcon,
            //title: "Forward",
            //label: "Forward",
            //Component: 'ForwardButton',
            id: "forwardButton"
            
        }
      ]
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);    
        // this.state = {
        //   userIcon: ''
        // }
        // Icon.getImageSource(Platform.OS === 'android' ? "md-arrow-forward" : "ios-arrow-forward", 30).then((source) => this.setState({ userIcon: source }));
        // console.log(this.state.userIcon);
        this.state = {
          videoPaused: false,
        }
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

    playVideo = () => {
      this.setState({videoPaused: !this.state.videoPaused})
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <TouchableOpacity onPress={this.playVideo}>
                      <View style={{padding: 20}}>
                        <Video
                          source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/16.Transfer-from-bed-to-wheelchair.mp4"}}
                          ref={(ref) => {
                            this.player = ref
                          }}       
                          style={{height: 300}}
                          rate={1}
                          paused={this.state.videoPaused}
                          volume={1}
                          muted={false}
                          playWhenInactive={false}
                          resizeMode='contain'
                          repeat={false}
                          />
                      </View>
                    </TouchableOpacity>  

                    <MainText><HeadingText>Helpers Protecting Themselves</HeadingText></MainText>
                    
                    <MainText style={styles.bullets}>  
                    {`\u2022`} When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
                    </MainText>
                    <MainText style={styles.bullets}>
                    {`\u2022`} Stand with feet slightly apart, one foot ahead of the other to keep your balance, shift your weight if necessary.
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
                    <PictureLegend style={{marginLeft: 200}}>-- Javier, Lima, Peru</PictureLegend>

                    <MainText>
                      <SubHeadingText>Questions Families Ask Themselves</SubHeadingText>
                    </MainText>
                    <MainText style={styles.bullets}>
                        {`\u2022`} Who will handle personal care; physical therapy? When?
                    </MainText>
                    <MainText style={styles.bullets}>
                        {`\u2022`} Shop, share housekeeping? When? 
                    </MainText>
                    <MainText style={styles.bullets}>     
                        {`\u2022`} Drive to doctor and therapy appointments. 
                    </MainText>
                    <View style={BorderBox.border}>
                        <MainText style={[{color: 'black'}, {marginVertical: 0},{alignSelf: 'center'}]}>
                          <Text style={{fontWeight: 'bold'}}>Stroke Groups</Text>  1-888-4-STROKE 
                        </MainText>
                          <TouchableOpacity onPress={() => Linking.openURL('http://www.strokeassociation.org/STROKEORG/strokegroup')}>
                            <Text style={[{color: 'black'}, {fontSize: 20}, {alignSelf: 'center'},{textDecorationLine: 'underline'}]}>
                                      http://strokeassociation.org 
                            </Text>
                          </TouchableOpacity>
                        <MainText style={[{color: 'black'},{marginVertical: 0}]}>  
                          <Text style={{fontWeight: 'bold'}}>CPR:</Text> 1-877-242-4277  www.heart.org
                        </MainText>
                    </View>

                                    
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
    bullets: {
      marginVertical: 5,
    }
  });

  

export default MovingSafelyScreen;