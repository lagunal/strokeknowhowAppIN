import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";



class SkinCareScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>
      //       <HeadingText>Skin Care</HeadingText>

      //       <ImageContainer source={skinImage} />

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Check skin every day for redness, and injury – especially when skin is fragile, poor circulation, diabetic.
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Pressure sore or bruise requires immediate attention for medication and treatment.
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
      //       </MainText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Pressure sores, skin breakdown occur from infrequent turning, changing positions.  
      //       </MainText>
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                             <HeadingText>Skin Care</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Check skin every day for redness, injury – especially when skin is fragile, poor circulation, diabetic. Pressure sores, skin breakdown occur from infrequent turning, changing positions when seated.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Pressure sores require immediate medication, treatment.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
                            </MainText>
          
            </ScrollView>                
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
    bullets: {
      marginVertical: 5,
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default SkinCareScreen;