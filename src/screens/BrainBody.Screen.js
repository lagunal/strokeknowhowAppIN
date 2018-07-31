import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import LegendText from '../components/UI/LegendText';
import ImageContainer from "../components/UI/ImageContainer";
import HeadingText from '../components/UI/HeadingText';
import BorderBox from '../styles/BorderBox';

class BrainBodyScreen extends Component {
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
              screen: "StrokeApp.EmergencyScreen",
              title: "Emergency",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <ImageContainer src={require('../assets/brain-body.png')} />

            <MainText>
            {'\t'} My doctor told me about research that proves after a stroke, when an area of the brain is injured, doing tasks, repeating them several times, helps healing. 
                   For six months, I used both my weaker and stronger hand, washing my kitchen window, sorting laundry, polishing the table.{`\n`}
              
            {'\t'} My goal was for my right hand to open and fingers to move. I kept at it, but saw no difference, {`\n`}
            {'\t'} One morning I reached for a cup for coffee, suddenly fingers in my right hand slowly opened. I began to cry, and kept moving my fingers. {`\n`}
            
            </MainText>

            <LegendText style={{marginLeft: 180}}>
                -- Madeline, Stuttgart, Germany 
            </LegendText>

            <MainText>
                Add your tasks, use both hands, repeat them several times. 
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Fold, open, re-fold items: paper napkins, clothes.
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Cut/peel vegetables, fruit. Polish silverware: Wash dishes. Place cans on a shelf.
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Polish silverware: Wash dishes.
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Button/Unbutton shirt.
            </MainText>

            <View style={{padding: 20}}>
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/19.Rob-Lawyer-and-blue-grass-musician.mp4"}}
                style={{height: 300}}
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

            <MainText><HeadingText>What is Aphasia?</HeadingText></MainText>

            <MainText>
                Aphasia is a condition that makes it difficult to say what you are thinking, or understand what is said. 
                More than half of men and women after a stroke have the condition. 
            </MainText>

            <MainText>
                <Text style={{fontWeight: 'bold'}}>
                    {`\u2022`} Intelligence is not affected.
                </Text>    
            </MainText>
            <MainText style={styles.bullets}>
            {`\u2022`} Relearning is ongoing: Talking, reading, writing, problem solving. 
                        You keep at it, until you get back what you've lost.  
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Find an Aphasia Group or a family with similar experiences. 
                It can increases confidence, friendships.  
            </MainText>
            <View style={BorderBox.border}>
                <MainText style={[{color: '0d0d0d'}, {fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
                    National Aphasia Association.
                </MainText>
                <Text style={[{alignSelf: 'center'},{fontSize: 20}]}>Find support groups</Text>
               
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.aphasia.org/site ')}>
                    <Text style={[{color: '0d0d0d'} , {fontSize: 20}, {alignSelf: 'center'},{textDecorationLine: 'underline'} ]}>
                        https://www.aphasia.org/site 
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
  });

  

export default BrainBodyScreen;