import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import SubHeadingText from "../components/UI/SubHeadingText";
import PictureLegend from "../components/UI/PictureLegend";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";

class WeeklyPlanScreen extends Component {
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
                  screen: "StrokeApp.FatigueScreen",
                  title: "Fatigue",
              });
          }
        }  
  }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
            <MainText>
                 Get FREE Interactive Help Needed Toolkit at 
              </MainText>
              <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                www.strokeknowhow.org 
                </Text>
              </TouchableOpacity>

              <ImageContainer src={require('../assets/help_needed_icon.png')} />

                <MainText>
                <SubHeadingText>Questions Families Ask</SubHeadingText>
                </MainText>
                <MainText>
                  • Who will handle personal care; 
                      physical therapy? When? • Shop, 
                      share housekeeping? When? 
                  • Drive to doctor and therapy appointments. 
                </MainText>
               
                <MainText style={{margin: 25}}>
                Call 1-888-4-STROKE or
                http://www.strokeassociation.org/STROKEORG/strokegroup for nearby Stroke Group.
                For CPR training, contact www.heart.org 1-877-242-4277

                </MainText>

                <MainText>
                    <HeadingText>A Weekly Plan</HeadingText>
                </MainText>

                <ImageContainer src={require('../assets/family-plan.png')} />
                <PictureLegend>
                Rachel’s granddaughter shows her how to organize a weekly schedule in Tel Aviv, Israel.  
                </PictureLegend>

                <MainText>  
                  <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>
                </MainText>
                <MainText>      
                  • Keeping track of timeorganizes each day. Prioritizes what needs to take place, give it time.• Have stimulating times, others in between, that are quiet — to sit down, nap, simply relax. 
                </MainText>

                <MainText>
                 Get FREE Interactive Weekly Schedule Toolkit at 
              </MainText>
              <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                www.strokeknowhow.org 
                </Text>
              </TouchableOpacity>
              
              <ImageContainer src={require('../assets/weekly-schedule-icon.png')} />
              
              <MainText><SubHeadingText>Family Plan</SubHeadingText></MainText>
              <MainText>
            • After a stroke, the family looks at care, living and medical expenses, how each will help.  
            </MainText>
            <MainText>
            • Ask a physical therapist to evaluate ability to move, talk, understand, handle personal care. 
            </MainText>
            <MainText>
            • To understand emotional effects, a psychologist may suggest ways to cope.
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },

  });

  

export default WeeklyPlanScreen;