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
import HeadingText from '../components/UI/HeadingText';
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

            <MainText><HeadingText>Kufungisisa {`\n`}</HeadingText><SubHeadingText>(Thinking too much in Zimbabwe)</SubHeadingText></MainText>

            <ImageContainer src={require('../assets/kufungisisa.png')} />

            <MainText>
            After my stroke, depression hit me hard. I am the youngest lawyer in the court, suddenly I could not see what my future held. 
            </MainText>
            <MainText>  
            My wife continued my care until she had to return to her job for our income. Then my uncle and a neighbor came.
            </MainText>

            <MainText>
            Three things that helped me: 
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} The love of my wife and children. 
            </MainText>

            <MainText style={styles.bullets}>  
            {`\u2022`} My best friend since childhood challenged me to reach for greater independence. 
            </MainText>

            <MainText style={styles.bullets}>  
            {`\u2022`} From a group of athletes with disabilities I learned an important lesson: ‘Don’t let anyone take away your role in the family, and the responsibilities you can handle.
            </MainText>

            <PictureLegend style={{marginLeft: 150}}>
            -- R.W., Zimbabwe, Africa
            </PictureLegend>

            <ImageContainer src={require('../assets/skin-care2.png')} />

            <MainText>
            There’s no telling who or what it will be that gives you the will and determination to go forward— 
            your openness that counts. 
            It could be your wife or husband, children, God, friends of many years, or people you meet with similar experiences to yours.  
            </MainText>
            <PictureLegend style={{marginLeft: 250}}>--Bill</PictureLegend>

            <MainText><HeadingText>Getting Up {`\n`} When Feeling Down</HeadingText></MainText>
            <MainText>
              Advice from people who’ve been there:
            </MainText>

            <MainText>
            {`\u2022`} Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative ones.
            </MainText>

            <MainText>
            {`\u2022`} Be around people who make you feel good about yourself.  Meet at a
                stroke club and aphasia group. Look for a family touched by stroke, can make a difference.
            </MainText>

            <MainText>
            {`\u2022`} Sadness, impatience, loss, love, come with one another. 
                Feelings are all valid, and a reaction of what you've been through. 
            </MainText>

            <View style={styles.border}>
                <MainText style={[{color: '0d0d0d'},{fontWeight: 'bold'},{marginVertical: 0}]}>
                Centers for Independent Living CIL
                </MainText>
                <Text style={[{fontSize: 18},{alignSelf: 'center'}]}>Disability information.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ilru.org/projects/cil-net/cil-center-and-association-directory')}>
                    <Text style={[{color: '0d0d0d'},{alignSelf: 'center'},{textDecorationLine: 'underline'}]}>
                        http://www.ilru.org/projects/cil-net/
                    </Text>
                </TouchableOpacity> 
            </View>
           
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
    bullets: {
      marginVertical: 5,
    },
    border: {
      borderStyle: 'solid',
      borderWidth: 1, 
      margin: 5,
      backgroundColor: '#e6f2ff',
      height: 70,
    },
  });

  

export default GettingUpScreen;