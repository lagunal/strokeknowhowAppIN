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
import BorderBox from '../styles/BorderBox';

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
                Share this Interactive Help Needed Tool with your family.
              </MainText>
              {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                www.strokeknowhow.org 
                </Text>
              </TouchableOpacity> */}

              <ImageContainer src={require('../assets/help_needed_icon.png')} />

                <MainText>
                  <HeadingText>Questions Families Ask</HeadingText>
                </MainText>
                <MainText style={[{marginVertical: 0}]}>
                    {`\u2022`} Who will handle personal care; physical therapy? When?
                </MainText>
                <MainText style={[{marginVertical: 0}]}>
                    {`\u2022`} Shop, share housekeeping? When? 
                </MainText>
                <MainText style={[{marginVertical: 0}]}>     
                    {`\u2022`} Drive to doctor and therapy appointments. 
                </MainText>
                <View style={BorderBox.border}>
                    <MainText style={[{alignSelf: 'center'}, {textColor: 'white'}]}>
                    Call 1-888-4-STROKE
                    </MainText>
                      <TouchableOpacity onPress={() => Linking.openURL('http://www.strokeassociation.org/STROKEORG/strokegroup')}>
                        <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                                  or  http://strokeassociation.org 
                        </Text>
                      </TouchableOpacity>
                    <MainText style={{marginHorizontal: 25}}>  
                      for nearby Stroke Group.
                      For CPR training, contact www.heart.org 1-877-242-4277
                    </MainText>
                </View>
                <MainText>
                    <HeadingText>A Weekly Plan</HeadingText>
                </MainText>

                <ImageContainer src={require('../assets/family-plan.png')} />
                <MainText>
                    Rachel’s granddaughter shows her how to organize a weekly schedule in Tel Aviv, Israel.  
                </MainText>

                {/* <MainText>  
                  <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>
                </MainText> */}
                <MainText style={[{marginVertical: 0}]}>      
                    {`\u2022`} Keep track of time each day. Prioritize.  
                </MainText>
                <MainText style={[{marginVertical: 0}]}>  
                    {`\u2022`} Have stimulating times, others that are quiet.    
                </MainText>

                <MainText style={[{marginBottom: 0}]} >
                  Share the interactive Weekly Schedule Toolkit with your family. 
                </MainText>
              {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                www.strokeknowhow.org 
                </Text>
              </TouchableOpacity> */}
              
              <ImageContainer style={{width: '50%'}} src={require('../assets/weekly-schedule-icon.png')} />
              
              <MainText><HeadingText>Family Plan</HeadingText></MainText>
              <MainText>
              {`\u2022`} After a stroke, the family looks at the care, living/medical expenses, how each will help.  
              </MainText>
              <MainText>
              {`\u2022`} Ask a physical therapist to evaluate the ability to move, talk, handle personal care. 
              </MainText>
              <MainText>
              {`\u2022`} To understand emotional effects, a psychologist may suggest ways to cope.
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