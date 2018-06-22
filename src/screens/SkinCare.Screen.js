import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import SubHeadingText from '../components/UI/SubHeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

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
              • Check skin every day for redness, injury – especially when skin is fragile, poor circulation, diabetic.
            </MainText>

            <MainText>
              • Pressure sore or bruise requires immediate attention for medication or treatment.
            </MainText>

            <MainText>
              • Reposition at least every two hourswhen in bed for extended time. 
                Pressure sores, skin breakdown occur from infrequent turning and changing positions. 
            </MainText>

            <MainText>
              • When changing positions, helpersmust liftnotpull someone across sheet, to avoid friction injuries. 
            </MainText>

            <ImageContainer src={require('../assets/skin-care2.png')} />

            <PictureLegend>
              There’s no telling who or what it will be that gives you the will and determination to go forward—it’s your openness to its reception that counts. 
              It could be your wife or husband, children, God, friends of many years, or people you meet with similar experiences to yours. 
                                      Bill
            </PictureLegend>

            <MainText><SubHeadingText>Kufungisisa (Sadness in Zimbabwe)</SubHeadingText></MainText>

            <ImageContainer src={require('../assets/kufungisisa.png')} />

            <MainText>
              After my stroke, depression hit me hard. Iam the youngest lawyer in the court, suddenly I couldnot see what my future held.  
              My wife continued my care until she had to return to her job for our income.Then my uncle and a neighbor came.
            </MainText>

            <MainText>
              Three things that helped that helped me: 
            </MainText>

            <MainText>
              • The love of my wife and children. 
            </MainText>

            <MainText>  
              • My best friend since childhood challenged me to reach for greater independence. 
            </MainText>

            <MainText>  
            •  From a group of athletes with disabilities I learned an important lesson: ‘Don’t let anyone take away your role in the family, responsibilities you can handle.
            </MainText>

            <PictureLegend>
              R.W., Zimbabwe, Africa
            </PictureLegend>

            <PictureLegend>
              Centers for Independent Living (CIL), consumer-led non residential agencies that offer disability-related information, advocacy, peer counseling. Some have adaptive exercise.
              Can you visit their website: http://www.ilru.org/projects/cil-net/cil-center-and-association-directory 
            </PictureLegend>
            
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