import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Linking
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";

const { width, height } = Dimensions.get("window");
const emergencyIcon = require('../assets/emergency-station-icon.png');

class EmergencyScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    handleEmergency = () => {
      this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
      });
    }

    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>
      //           <LinkToolkitWrapper 
      //             text={'Share Interactive Emergency Information Station Toolkit with family. Click toolkit.'}
      //             source={emergencyIcon}
      //             onPress={this.props.pressEmergency ? this.props.pressEmergency : this.handleEmergency}
      //           />

      //           <HeadingText style={{fontWeight: 'bold'}}>Don’t wait. Get help.</HeadingText>

      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Call 911 or your emergency number.   
      //           </MainText>      

      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Report possible stroke, or another emergency. 
      //           </MainText>    

      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Answer questions in clear, short answers.
      //               If you need a translator, ask immediately. 
      //           </MainText>    

      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Do not hang up first: Wait for instructions. 
      //           </MainText> 
                
      //           <View style={{height: 30}}></View>

      //           <View style={[styles.border, {height: 90}]}>    
      //                 <TouchableOpacity onPress={() => Linking.openURL('https://abledata.acl.gov/m/search')}>
      //                 <MainText style={[{fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
      //                     www.abledata.com
      //                 </MainText>
      //                 </TouchableOpacity>>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>Best adaptable product information - English Spanish</Text>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>800-227-0216, 703-992-8313. TTY</Text>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>abledata@neweditions.net Products to ease living.</Text>

      //           </View>   


      //           <View style={[styles.border, {height: 50}]}>    
      //                 <TouchableOpacity onPress={() => Linking.openURL('https://www.acl.gov/')}>
      //                 <MainText style={[{fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
      //                     www.acl.gov
      //                 </MainText>
      //                 </TouchableOpacity>>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>Community living information.</Text>
      //           </View>>


      //           <View style={[styles.border, {height: 100}]}>
              
      //                 <TouchableOpacity onPress={() => Linking.openURL('https://www.naric.com')}>
      //                   <MainText style={[{fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
      //                     https://www.naric.com
      //                   </MainText>
      //                 </TouchableOpacity>
                      
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>National Rehabilitation Information Center/ NARIC </Text>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('3.5%')}]}>Leading disability-related information.  English/Spanish.</Text>
      //                 <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>1-800-346-2742. English / Spanish</Text>
                      
      //           </View>

      //           <View style={[styles.border, {height: 70}]}>
      //               <TouchableOpacity onPress={() => Linking.openURL('https://www.aphasia.org/site ')}>
      //               <MainText style={[{fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
      //                   https://www.aphasia.org/site 
      //               </MainText>
      //               </TouchableOpacity>

      //               <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>Find support/aphasia programs. English/Spanish</Text>
                  
      //           </View> 

      //           <ImageContainer source={strokeLine} style={{width: wp('60%')}}/>

      //           <View style={[styles.border, {height: 90}]}>
      //                   <TouchableOpacity onPress={() => Linking.openURL('http://www.strokeassociation.org/STROKEORG/strokegroup')}>
      //                   <MainText style={[{fontWeight: 'bold'},{marginVertical: 0},{alignSelf: 'center'}]}>
      //                       http://strokeassociation.org 
      //                   </MainText>
      //                   </TouchableOpacity>
      //                   <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>American Stroke Association</Text>
      //                   <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>1-888-4-STROKE 1-888-478-7653</Text>
      //                   <Text style={[{alignSelf: 'center'},{fontSize: wp('4%')}]}>Learn CPR – Spanish, Chinese, Vietnamese</Text>

      //           </View> 
                
      //           <Link />  

      //           <HeadingText>Getting Organized</HeadingText>

      //           <MainText style={styles.bullets}>
      //           {`\u2022`} Consider using a notebook, cell phone or computer –whatever works for you with subjects 
      //           – medications, physical therapy, speech, doctors, therapists’ notes. 
      //           </MainText>
      //           <MainText style={styles.bullets}>    
      //           {`\u2022`} Keep handy names, phones, addresses of doctors, therapists, helpers, family, neighbors. 
      //            </MainText>
      //           <MainText style={styles.bullets}>   
      //           {`\u2022`} Save bills: Paid and Unpaid, receipts health-care-related purchases, papers for insurance. tax purposes.       
      //           </MainText>
        
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

                          <LinkToolkitWrapper 
                              text={'Type information on this Toolkit. Family can share information on their cell phone.'}
                              source={emergencyIcon}
                              onPress={this.handleEmergency}
                            />

                            <MainText>If you believe it is an emergency – it probably is!</MainText>
                            <HeadingText style={{fontWeight: 'bold'}}>Get help immediately.</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Call your Emergency Number.   
                            </MainText>      

                            <MainText style={styles.bullets}>
                            {`\u2022`} Report possible stroke, or another emergency. 
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} When calling in an emergency, answer questions in clear, short answers.  
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} Do not hang up first: Wait for instructions. 
                            </MainText> 

                            <HeadingText >In Emergency</HeadingText>
                            
                            <Link />  

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
    border: {
      margin: 5,
      //backgroundColor: '#e6f2ff',
      //height: 70,
    },
    boxLink: {
      //fontSize: hp('2%'), 
      //marginHorizontal: hp('3%'),
      //fontSize: wp('3.5%'),
      //marginVertical: 0, 
      //textDecorationLine: 'underline',
      fontWeight: 'bold',
      marginVertical: 0,
      alignSelf: 'center'
    },
    boxText: {
      //fontSize: hp('2%'), 
      //marginHorizontal: height > 600 ? 15 : 0,
      //marginLeft: 0,
      //fontSize: wp('3.5%'),
      //marginVertical: 0,
      //fontWeight: 'bold',
      alignSelf: 'center', 
      fontSize: wp('4%')
    },

  });

  

export default EmergencyScreen;