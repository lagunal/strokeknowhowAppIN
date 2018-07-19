import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from '../components/UI/ImageContainer';
import SubHeadingText from '../components/UI/SubHeadingText';
import LegendText from '../components/UI/LegendText';

class FatigueScreen extends Component {
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
                  screen: "StrokeApp.MedicationsScreen",
                  title: "Medications",
              });
          }
        }  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <MainText><HeadingText>Fatigue is a Challenge</HeadingText></MainText>
                    
                    <ImageContainer src={require('../assets/fatigue.png')} />
               
                    <MainText>  
                        As a surgeon, my work was non-stop: From six in the morning to 11 at night when I reached home. 
                        Never did I think about my energy. 
                        After stroke, extreme fatigue hit me, I wasn't prepared for it. 
                    </MainText>
                    <PictureLegend style={[{marginLeft: 85}]}>
                        -- Ghauth L. 45, Surgeon, South Africa   
                    </PictureLegend>
                    <MainText><HeadingText>Saving Energy</HeadingText></MainText>
                    <MainText>
                    {`\u2022`} Ask for help when you need it. 
                    </MainText>
                    <MainText>
                    {`\u2022`} Late morning is a good time to bathe, and someone can assist you. 
                    </MainText>
                    <MainText>
                    {`\u2022`} Afterward, if you are very tired, or agitated, relax, then continue the day. 
                    </MainText>
                    <MainText><HeadingText>Climbing Stairs</HeadingText></MainText>
                    <MainText>
                    {`\u2022`} Monitor your breathing. First, breathe in deeply through your nose. 
                    </MainText>
                    <MainText>    
                    {`\u2022`} Next, exhale through pursed lips as you climb one or two stairs, holding on to stair rail. 
                    </MainText>
                    <MainText>
                    {`\u2022`} Stop, rest, breathe deeply, slowly. 
                    </MainText>
                    <MainText>
                    {`\u2022`} Continue climbing two or three steps while you exhale. Stand still when inhaling.
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

  

export default FatigueScreen;