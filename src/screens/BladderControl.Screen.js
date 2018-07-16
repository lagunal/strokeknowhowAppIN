import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import SubHeadingText from '../components/UI/SubHeadingText';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";

class BladderControlScreen extends Component {
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
              screen: "StrokeApp.BloodPressureScreen",
              title: "Blood Pressure",
          });
        }
      }  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll style={{flexGrow: 100}}>

                <ImageContainer src={require('../assets/bladder-control.png')} />

                <MainText><HeadingText>Retraining the Bladder</HeadingText></MainText>

                <MainText>  
                {`\u2022`} Ask a doctor or nurser in re-establishing bladder control. 
                  Brain and bladder need to keep dry on your schedule.
                </MainText>
                <MainText>  
                {`\u2022`} At first, urinate every hour, not wait for urge until urination is controlled. 
                  With greater control, urinate every 3 to 4 hours when awake. 
                </MainText>

                <MainText><HeadingText>Regaining Bowel Control </HeadingText></MainText>

                <MainText>  
                {`\u2022`} Get help re-training brain’s ability to control movements. At first, empty on a routine. Increase time to relieve oneself. 
                </MainText>
                <MainText>  
                {`\u2022`} Constipation, an effect of stroke, caused by certain medications, aging, inactivity, low-fiber. 
                </MainText>

                <MainText><HeadingText>Drinking Water</HeadingText></MainText>

                <MainText>  
                {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, offer sips of water often to avoid dehydration. 
                  Do not us a straw.                
                </MainText>

                <MainText><HeadingText>Swallowing</HeadingText></MainText>

                <ImageContainer src={require('../assets/swallowing.png')} />

                <MainText>  
                  Aspeech therapist or nurse can help retraining swallowing. 
                </MainText>
                <MainText>
                {`\u2022`} Watch for a swallowing emergency. Act quickly. 
                  After eating, check for food in cheeks, under the tongue, upper palate.  
                </MainText>
                <MainText>   
                {`\u2022`} Learn CPR.               
                </MainText>

                <MainText><HeadingText>Questions to Ask Your Doctor</HeadingText></MainText>

                <MainText>  
                {`\u2022`} What do we need to know about my stroke? High blood pressure, diabetes?
                  Side effects of medicine to report?  
                </MainText>  
                <MainText>  
                {`\u2022`} Has my hospital report been sent to doctors?
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

  });

  

export default BladderControlScreen;