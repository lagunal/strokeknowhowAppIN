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
                    Share  the  Interactive  Medication  toolkit  with  your  family. 
                </MainText>
                {/* <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
                  <Text style={[{color: 'blue'} , {alignSelf: 'center'} ]}>
                  www.strokeknowhow.org 
                  </Text>
                </TouchableOpacity> */}

                <ImageContainer src={require('../assets/medication-icon.png')} />

                <MainText>
                <HeadingText>
                  Personal Cleanliness
                </HeadingText>
                </MainText>

                <MainText>
                {`\u2022`} To prevent infection, protect the skin, forcomfort, a loved one should be washed or bathed every day with warm water and soap. 
                  Dried thoroughly, massaged with a soothing lotion. 
                </MainText>

                <MainText>  
                {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
               </MainText>
               <View style={BorderBox.border}>    
                      <MainText>  
                      <Text style={{fontWeight: 'bold'}}>AbleData</Text> 
                        <TouchableOpacity onPress={() => Linking.openURL('https://abledata.acl.gov/')}>
                          <Text style={[{color: 'blue'} , {fontSize: 20},  {paddingHorizontal: 5}]}>
                            (www.Abledata.com) 
                          </Text>
                        </TouchableOpacity>
                        has information on almost all assistive products and programs in English and Spanish. Provide manufacturers, but sell no products.
                      </MainText>
                      <MainText>
                          <Text style={{fontWeight: 'bold'}}>Call, email, chat </Text> 
                          8:30- 5:30 p.m. EST, M-F 800-227-0216, TTY - 703-992-8313 (TTY), Email: abledata@neweditions.net 
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