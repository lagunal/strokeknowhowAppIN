import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text, 
    Linking
  } from 'react-native';


import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";
import ImageToolkitContainer from "../components/UI/ImageToolkitContainer";
import BorderBox from '../styles/BorderBox';

class NewDayScreen extends Component {
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
              screen: "StrokeApp.BladderControlScreen",
              title: "Bladder Control",
          });
        }
      }  
    }


    render() {
        return (
          <View style={styles.container}>
            <BodyScroll> 
                <MainText><HeadingText>Organizing Medications</HeadingText></MainText>

                <ImageContainer src={require('../assets/medications.png')} />
                
                <MainText>
                  Ruth, M. 78, uses a pill organizer and Interactive Medication Toolkit. Ruth’s daughter, Linda, can also see the Toolkit.
                </MainText>

                <MainText>
                    Share  the  Interactive  Medication  toolkit  with  your  family. (click image below)
                </MainText>
                {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                  <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                  www.strokeknowhow.org 
                  </Text>
                </TouchableOpacity> */}

                <ImageToolkitContainer src={require('../assets/medication-icon.png')} />

                <MainText>
                <HeadingText>
                  Personal Cleanliness
                </HeadingText>
                </MainText>

                <MainText>
                {`\u2022`} To prevent infection, protect the skin, for comfort, a loved one should be washed or bathed every day with warm water and soap. 
                  Dried thoroughly, massaged with a soothing lotion. 
                </MainText>

                <MainText>  
                {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
               </MainText>
               <View style={BorderBox.border}>    
                      <MainText style={[{color: '0d0d0d'}, {fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
                         Product Information 
                         </MainText>
                        <TouchableOpacity onPress={() => Linking.openURL('https://abledata.acl.gov/')}>
                          <Text style={[{color: '0d0d0d'} , {fontSize: 22}, {alignSelf: 'center'},{textDecorationLine: 'underline'}]}>
                                      www.Abledata.com 
                          </Text>
                        </TouchableOpacity>
                      <MainText style={[{color: '0d0d0d'},{marginVertical: 0}]}>
                          1-800-227-0216     English / Spanish
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

  });

  

export default NewDayScreen;