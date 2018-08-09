import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    Linking
  } from 'react-native';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import SubHeadingText from '../components/UI/SubHeadingText';
import PictureLegend from "../components/UI/PictureLegend";


const familyImage = require('../assets/family.png');

class MovingSafelyScreen extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
          videoPaused: true,
        }
    }
        
    playVideo = () => {
      //this.setState({videoPaused: !this.state.videoPaused})
      this.player.presentFullscreenPlayer();
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <TouchableOpacity onPress={this.playVideo}>
                        <View style={{padding: 20}}>
                            <MainText><SubHeadingText style={{marginBottom: 0, fontSize: 22}}>VIDEO: touch it to play</SubHeadingText></MainText>
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
                              playInBackground={false}
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

                    <ImageContainer src={familyImage} />

                    <MainText style={{marginBottom: 0}}>  
                        When my wife, Tina, had a stroke,
                          it hit our whole family, and we each had 
                          a job to do– even the kids.
                    </MainText>
                    <PictureLegend >&mdash;Javier, Lima, Peru</PictureLegend>

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

                    <View style={styles.border}>
                        <MainText style={styles.boxText}>
                          <Text style={{fontWeight: 'bold'}}>Stroke Groups</Text>  1-888-4-STROKE 
                        </MainText>
                          <TouchableOpacity onPress={() => Linking.openURL('http://www.strokeassociation.org/STROKEORG/strokegroup')}>
                            <Text style={styles.boxLink}>
                                      http://strokeassociation.org 
                            </Text>
                          </TouchableOpacity>
                        <MainText style={styles.boxText}>  
                          <Text style={{fontWeight: 'bold'}}>CPR:</Text> 1-877-242-4277  
                          www.heart.org
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
    },
    border: {
      margin: 5,
      backgroundColor: '#e6f2ff',
      height: 60,
    },
    boxLink: {
      fontSize: 15, 
      marginHorizontal: 15, 
      marginVertical: 0, 
      textDecorationLine: 'underline',
      alignSelf: 'center'
    },
    boxText: {
      fontSize: 15, 
      marginHorizontal: 5, 
      marginVertical: 0,
      alignSelf: 'center',
    },
  });

  

export default MovingSafelyScreen;