import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    Platform,
    Dimensions
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import SubHeadingText from "../components/UI/SubHeadingText";
import BodyScroll from "../components/UI/BodyScroll";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import ImageContainer from "../components/UI/ImageContainer";

const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
const weeklyScheduleIcon = require('../assets/weekly-schedule-icon.png');
const helpNeededIcon = require('../assets/help_needed_icon.png');
const { width, height } = Dimensions.get("window");

class WeeklyPlanScreen extends Component {
  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }


  handleHelpNeeded = () => {
      this.props.navigator.push({
        screen: "StrokeApp.HelpNeededToolkitScreen",
      });
  }
  handleSchedule = () => {
    this.props.navigator.push({
      screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

                <LinkToolkitWrapper 
                  text={'Share Interactive Help Needed Toolkit with family. (click image below)'}
                  source={helpNeededIcon}
                  onPress={this.props.pressHelp ? this.props.pressHelp : this.handleHelpNeeded}
                />
                
                <MainText>
                    <HeadingText>Let's Talk About Safety</HeadingText>
                </MainText>

                <ImageContainer src={safetyImage} />

                <MainText>
                    Pat became a wheelchair user after a car crash. 
                    Her husband, Bill made their home safer and accessible.     
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} To widen the door opening for Pat’s wheelchair, the molding was removed.    
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} Light switches, toilet-tissue dispensers, towel racks to be easily reached were lowered. 
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} A raised toilet makes transfers easier. 
                    A grab bar, and on side of the toilet ensure safer transfers.   
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} The mirrored medicine cabinet was lowered.   
                </MainText>
                <MainText>
                    Falls are the #1 cause of home injuries. Wet bathroom floors lead 
                    home injuries. Millions return to hospitals a month after discharge.     
                </MainText>

                <MainText>
                    <HeadingText>A Weekly Plan</HeadingText>
                </MainText>

                <ImageContainer src={familyPlanImage}  />
                <MainText>
                    Rachel’s granddaughter shows her how to organize a weekly schedule. Tel Aviv, Israel.  
                </MainText>

                <MainText>  
                  <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} Keeping track of time organizes each day. Prioritize what you need to take place, and give it a time.  
                </MainText>
                <MainText style={styles.bullets}>  
                    {`\u2022`} Have stimulating times, others in between, that are quiet — to sit down, nap, simply relax.    
                </MainText>

                <LinkToolkitWrapper 
                  text={'Share interactive Weekly Schedule Toolkit with family. (click image below)'}
                  source={weeklyScheduleIcon}
                  onPress={this.props.pressSchedule ? this.props.pressSchedule : this.handleSchedule}
                />

              <MainText style={styles.bullets}>
              {`\u2022`} After a stroke, each family looks at the care, their living and medical expenses needed, and how each one will help.   
              </MainText>
              <MainText style={styles.bullets}> 
              {`\u2022`} Ask a physical therapist to evaluate the ability to move, talk, understand, handle personal care. 
              </MainText>
              <MainText style={styles.bullets}>
              {`\u2022`} A psychologist can evaluate the emotional affects, and ways the family can cope with the changes.
              </MainText>

            <MainText>
            <HeadingText>
              Personal Cleanliness
            </HeadingText>
            </MainText>

            <MainText style={styles.bullets}> 
            {`\u2022`} To prevent infection, protect skin, and for comfort, a loved one needs to be washed or bathed every day with warm water and soap. 
                      Dry, then massaged with soothing lotion. 
            </MainText>

            <MainText style={styles.bullets}>  
            {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
            </MainText>

            <View style={styles.border}>    
                <View style={styles.boxLineWrapper}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://abledata.acl.gov/new_products')}>
                      <MainText style={styles.boxLink}>
                                  abledata.com 
                      </MainText>
                    </TouchableOpacity>
                    <MainText style={styles.boxText}>
                      Product Information 
                    </MainText>  
                </View>

                <View style={styles.boxLineWrapper}>  
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.acl.gov/')}>
                      <MainText style={styles.boxLink}>
                                  acl.gov
                      </MainText>
                  </TouchableOpacity>
                  <MainText style={styles.boxText}>
                      Community Information
                  </MainText> 
                </View>

                <MainText style={[styles.boxText , {alignSelf: 'center'}]}>
                    English / Spanish
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    border: {
      margin: 5,
      backgroundColor: '#e6f2ff',
      height: 70,
    },
    boxLink: {
      fontSize: 15, 
      marginHorizontal: hp('3%'),
      marginVertical: 0, 
      textDecorationLine: 'underline'
    },
    boxText: {
      fontSize: 15, 
      marginHorizontal: height > 600 ? 15 : 0,
      marginVertical: 0,
      fontWeight: 'bold',
    },
    boxLineWrapper: {
      flex:1, 
      flexDirection: 'row', 
      justifyContent: height > 600 ? 'center' : 'flex-start',
    }

  });

  

export default WeeklyPlanScreen;