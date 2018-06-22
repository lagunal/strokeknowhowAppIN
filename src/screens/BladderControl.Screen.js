import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import SubHeadingText from '../components/UI/SubHeadingText';
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

                <MainText><SubHeadingText>Retraining the Bladder</SubHeadingText></MainText>

                <MainText>  
                  Ask a doctor or nursere-establishing bladder control. 
                  Brain and bladder need to keep dry on your schedule.
                  • At first, urinate every hour, not wait for urge, until urination is controlled. 
                  With greater control, urinate every 3 to 4 hours. 
                </MainText>

                <MainText><SubHeadingText>Regaining Bowel Control </SubHeadingText></MainText>

                <MainText>  
                • Get help re-training brain’s ability to control movements. At first, empty on a routine. Increase time to relieve oneself. 
                • Constipation, an effect of stroke, caused by certain medications, aging, inactivity, low-fiber. 
                </MainText>

                <MainText><SubHeadingText>Drinking Water</SubHeadingText></MainText>

                <MainText>  
                  • We depend on drinking water to live. After a stroke, swallowing may be difficult, offer sips of water often to avoid dehydration. 
                  Do not use a straw.                
                 </MainText>

                <MainText><SubHeadingText>Swallowing</SubHeadingText></MainText>

                <ImageContainer src={require('../assets/swallowing.png')} />

                <MainText>  
                  Aspeech therapist or nurse can help in retraining swallowing. 
                  • Watchfor a swallowing emergency. Act quickly. 
                  • Learn CPR.
                  • After eating, check for food in cheeks, under the tongue, upper palate.                
                 </MainText>

                <MainText><SubHeadingText>Questions to Ask Your Doctor</SubHeadingText></MainText>

                <MainText>  
                  • What do we need to know about my stroke? High blood pressure, diabetes? Numbers to report?
                  • Side effects of medicine to report?  
                  • Has my hospital report been sent to doctors?
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