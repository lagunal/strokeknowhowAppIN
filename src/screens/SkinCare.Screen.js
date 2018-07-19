import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import HeadingText from '../components/UI/HeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";
import BorderBox from '../styles/BorderBox';

class SkinCareScreen extends Component {
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
              screen: "StrokeApp.GettingUpScreen",
              title: "Getting Up",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <ImageContainer src={require('../assets/skin-care1.png')} />

            <MainText>
            {`\u2022`} Check skin every day for redness, injury – especially when skin is fragile, poor circulation, diabetic.
            </MainText>

            <MainText>
            {`\u2022`} Pressure sore or bruise requires immediate attention for medication or treatment.
            </MainText>

            <MainText>
            {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
                Pressure sores, skin breakdown occur from infrequent turning and changing positions. 
            </MainText>

            <MainText>
            {`\u2022`} When changing positions, helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
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

  

export default SkinCareScreen;