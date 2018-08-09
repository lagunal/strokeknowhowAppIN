import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Platform
  } from 'react-native';

import SubHeadingText from '../components/UI/SubHeadingText';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";

const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');

class BladderControlScreen extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
          <View style={styles.container}>
            <BodyScroll >

                <MainText><HeadingText>Bladder Control</HeadingText></MainText>

                <ImageContainer src={bladderImage} style={styles.image}/>

                <MainText style={styles.bullets}>  
                {`\u2022`} Ask a doctor or nurse for help in reestablishing bladder control. 
                           Brain and bladder need to keep dry on your schedule.
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. 
                           With greater control, urinate every 3 to 4 hours.  
                </MainText>

                <MainText><HeadingText>Bowel Control</HeadingText></MainText>

                <MainText style={styles.bullets}>  
                {`\u2022`} Help is needed in re-training the brain’s ability to control movements. At first, empty on a routine. 
                           Then, increase the time to relieve oneself. 
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, and low-fiber. 
                </MainText>

                <MainText><HeadingText>Drinking Water</HeadingText></MainText>

                <MainText>  
                {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. 
                          Do not use a straw.                 
                </MainText>

                <MainText><HeadingText>Swallowing</HeadingText></MainText>

                <ImageContainer src={swallowingImage}  />

                <MainText>  
                    A speech therapist or nurse can help in retraining swallowing. 
                </MainText>
                <MainText style={styles.bullets}>
                {`\u2022`} Act quickly in a swallowing emergency. Learn CPR. 
                </MainText>
                <MainText style={styles.bullets}>   
                {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
                </MainText>

                <MainText><HeadingText>Questions for a Doctor</HeadingText></MainText>

                <MainText style={styles.bullets}>  
                {`\u2022`} What should we know about the stroke? High blood pressure? Diabetes?  Numbers to report? 
                </MainText>  
                <MainText style={styles.bullets}>  
                {`\u2022`} Side effects of medicine to report?
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} Has hospital report been sent to my other doctors?
                </MainText>

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
    image: {
      width: 250,
      height: 200,
      marginTop: 5,
    },
    bullets: {
      marginVertical: 5,
    },
  });

  

export default BladderControlScreen;