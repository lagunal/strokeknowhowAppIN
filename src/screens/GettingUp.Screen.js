import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import SubHeadingText from '../components/UI/SubHeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

class GettingUpScreen extends Component {
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
              screen: "StrokeApp.BrainBodyScreen",
              title: "Brain Body Connection",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <ImageContainer src={require('../assets/getting-up.png')} />

            <MainText><SubHeadingText>Getting Up When Feeling Down</SubHeadingText></MainText>

            <MainText>
              Advice from people who’ve been there:
            </MainText>

            <MainText>
                • For most of us, mornings are hardest time. 
            </MainText>

            <MainText>
                • Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative. 
            </MainText>

            <MainText>
                • Be around people who make you feel good about yourself.  Meet them at a
                stroke club and aphasia group.Look for a familytouched by stroke. It can make a difference.
            </MainText>

            <MainText>
                • Sadness, impatience, loss, love, come with one another. 
                Feelings are all valid, and a reaction of what you've been through. 
            </MainText>

            <ImageContainer src={require('../assets/boton-video.png')} />

            <MainText><SubHeadingText>What is Aphasia?</SubHeadingText></MainText>

            <MainText>
                Aphasia is a condition that makes it difficult to say what you are thinking, or understand what is said. 
                More than half of men and women after a stroke have the condition. 
            </MainText>

            <MainText><SubHeadingText>Aphasia does not affect intelligence</SubHeadingText></MainText>

            <MainText>
                • Learning is ongoing: Talking, reading, writing,  problem solving.
                You keep at it, until you get back what you've lost. 
            </MainText>

            <MainText>
                • Find an Aphasia Group or a family with similar experiences as yours. 
                It increases confidence, and encourages friendships.  
            </MainText>

            <PictureLegend>
                National Aphasia Association (https://www.aphasia.org)
                It is a non-profit organization dedicated to advocating for persons with aphasia and their families.
                Find support groups, aphasia centers and programs, as well as speech language professionals near you:
                https://www.aphasia.org/site    
            </PictureLegend>

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

  

export default GettingUpScreen;