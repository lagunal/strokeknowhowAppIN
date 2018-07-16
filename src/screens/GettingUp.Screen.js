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
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";
import BorderBox from '../styles/BorderBox';

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

            <MainText style={{color: 'red'}}>
            {`\u2022`} Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative. 
            </MainText>

            <MainText style={{color: 'red'}}>
            {`\u2022`} Be around people who make you feel good about yourself.  Meet them at a
                stroke club and aphasia group. Look for a family touched by stroke. It can make a difference.
            </MainText>

            <MainText style={{color: 'red'}}>
            {`\u2022`} Sadness, impatience, loss, love, come with one another. 
                Feelings are all valid, and a reaction of what you've been through. 
            </MainText>

            <View style={{padding: 20}}>
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/19.Rob-Lawyer-and-blue-grass-musician.mp4"}}
                style={{height: 200}}
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

            <MainText><SubHeadingText>What is Aphasia?</SubHeadingText></MainText>

            <MainText>
                Aphasia is a condition that makes it difficult to say what you are thinking, or understand what is said. 
                More than half of men and women after a stroke have the condition. 
            </MainText>

            <MainText style={{color: 'red'}}>
                <Text style={{textDecorationLine: 'underline'}}>
                    {`\u2022`} Aphasia does not affect intelligence
                </Text>    
            </MainText>
            <MainText style={{color: 'red'}}>
            {`\u2022`} Learning is ongoing: Talking, reading, writing,  problem solving.
                You keep at it, until you get back what you've lost. 
            </MainText>

            <MainText style={{color: 'red'}}>
            {`\u2022`} Find an Aphasia Group or a family with similar experiences as yours. 
                It increases confidence, and encourages friendships.  
            </MainText>
            <View style={BorderBox.border}>
                <MainText>
                    <Text style={{fontWeight: 'bold'}}>National Aphasia Association. </Text>
                    It is a non-profit organization dedicated to advocating for persons with aphasia and their families.
                    Find support groups, aphasia centers and programs, as well as speech language professionals near you:
                </MainText>
                <MainText>    
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.aphasia.org/site ')}>
                      <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                        https://www.aphasia.org/site 
                      </Text>
                    </TouchableOpacity>  
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
      alignItems: 'center',
      backgroundColor: 'white',
    },

  });

  

export default GettingUpScreen;