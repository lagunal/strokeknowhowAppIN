import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";

class BladderControlScreen extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>

      //           <HeadingText>Bladder Control</HeadingText>

      //           <ImageContainer source={bladderImage} style={styles.image}/>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Ask a doctor or nurse for help in reestablishing bladder control. 
      //                      Brain and bladder need to keep dry on your schedule.
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. 
      //                      With greater control, urinate every 3 to 4 hours.  
      //           </MainText>

      //           <HeadingText>Bowel Control</HeadingText>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Help is needed in re-training the brain’s ability to control movements. At first, empty on a routine. 
      //                      Then, increase the time to relieve oneself. 
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, and low-fiber. 
      //           </MainText>

      //           <HeadingText>Drinking Water</HeadingText>

      //           <MainText>  
      //           {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. 
      //                     Do not use a straw.                 
      //           </MainText>

      //           <HeadingText>Swallowing</HeadingText>

      //           <ImageContainer source={swallowingImage}  />

      //           <MainText>  
      //               A speech therapist or nurse can help in retraining swallowing. 
      //           </MainText>
      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Act quickly in a swallowing emergency. Learn CPR. 
      //           </MainText>
      //           <MainText style={styles.bullets}>   
      //           {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
      //           </MainText>

      //           <HeadingText>Questions for a Doctor</HeadingText>

      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} What should we know about the stroke? High blood pressure? Diabetes?  Numbers to report? 
      //           </MainText>  
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Side effects of medicine to report?
      //           </MainText>
      //           <MainText style={styles.bullets}>  
      //           {`\u2022`} Has hospital report been sent to my other doctors?
      //           </MainText>

      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView >

                        <HeadingText>Looking at Expenses</HeadingText>

                        <MainText>  
                          After stroke, a family looks at livingand medical expenses, how each one will help. 
                        </MainText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`}  A family may ask a physical therapist or nurse to evaluate their loved one’s ability to move, talk, understand, handle personal care.  
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`}  A psychologist, if a family asks, can evaluate emotional effects of stroke; offer how to cope with changes.  
                        </MainText>

                          <HeadingText>
                          Personal Cleanliness
                          </HeadingText>


                          <MainText style={styles.bullets}> 
                          {`\u2022`} To prevent infection, protect skin, and for comfort, your loved one needs to be washed or bathed every day. Use warm water and soap. Dried thoroughly, massaged with soothing lotion. 
                          </MainText>

                          <MainText style={styles.bullets}>  
                          {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
                          </MainText>

                        <HeadingText>Bladder Control</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Ask a doctor, nurse, health worker reestablishing bladder control. Brain and bladder need to keep dry on your schedule.
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. With greater control, urinate every 3 to 4 hours.  
                        </MainText>

                        <HeadingText>Regaining Bowel Control</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Help is needed in re-training brain’s ability to control movements. At first, empty on a routine. Increase time to relieve oneself. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, low-fiber diet.  
                        </MainText>

                        <HeadingText>Drinking Water</HeadingText>

                        <MainText>  
                        {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. Do not use a straw.                 
                        </MainText>

                        <HeadingText>Swallowing</HeadingText>

                        <MainText>  
                          A nurse or speech therapistcan help retraining swallowing.
                        </MainText>
                        <MainText style={styles.bullets}>
                        {`\u2022`} Act quickly in a swallowing emergency. Learn CPR to save a life. 
                        </MainText>
                        <MainText style={styles.bullets}>   
                        {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
                        </MainText>

                        <HeadingText>Questions to Ask Your Doctor</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} What information do we need about our loved one’s stroke? High blood pressure? Diabetes? Numbers to report? 
                        </MainText>  
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Side effects of medicine to report?
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Has my hospital report been sent to my other doctors?
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
    image: {
      //width: 250,
      width: wp('80%'),
      height: 200,
      //marginTop: 5,
      alignSelf: 'center'
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
    bullets: {
      marginVertical: 5,
    },
  });

  

export default BladderControlScreen;