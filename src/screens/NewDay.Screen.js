
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


class NewDayScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  render() {
    // if (this.props.homeScreen === true) { 
    //   return (
    //     <View style={styles.container}>
        
    //       <StatusBar
    //           barStyle="light-content"
    //       />    
  
    //       <ImageContainer source={require('../assets/home.png')} />  
    //       <MainText style={{marginBottom: 0}}>    
    //           I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
    //           I overheard the word ‘stroke,’ and realized they were talking about me. 
    //           Out of the hospital in five days: I could stand, not walk.
    //           Insurance paid for a handful of physical therapy. NOW WHAT?
    //       </MainText>
    //       <PictureLegend >&mdash; Mike</PictureLegend>    
          
    //       <HeadingText>A New Day</HeadingText>
          
    //       <ImageContainer source={require('../assets/newDay.png')} />
          
    //       <MainText style={styles.bullets}>
    //           {`\u2022`} It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. Lowers the capacity of heart’s pumping rate, reduces lung capacity, alters blood pressure, increases chance 
    //           of pneumonia. 
    //       </MainText>
    //       <MainText style={styles.bullets}>  
    //           {`\u2022`} Do slow stretches in bed to ease stiffness. Roll from side to side. 
    //       </MainText>
    //       <MainText style={styles.bullets}>  
    //           {`\u2022`} Before moving take your time, avoid quick changes to avoid becoming dizzy.  
    //       </MainText>
  
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
      
        <StatusBar
            barStyle="light-content"
        />    

        <ScrollView>

                   <Image source={require('../assets/india2.png')} style={styles.imageDefault} resizeMode='contain'/>  

                  <MainText style={{marginBottom: 0}}>    
                  After mother had a stroke, my sisters and a helper care for her. When she left the hospital, my mother could stand, but not walk. Aphysical therapist trained us to continue therapy at home. 
                  </MainText>
                  <PictureLegend style={{marginRight: wp('10%') }}>&mdash; Aryun</PictureLegend>    

                  <MainText style={{marginBottom: 0}}>    
                  Her doctor told our family it is important for my mother to get out of bed and dress every day. {`\n`}Benefits: 
                  </MainText>
                    
                  <MainText style={styles.bullets}>
                      {`\u2022`} Complete bed rest deconditions the body.  
                  </MainText>
                  <MainText style={styles.bullets}>  
                      {`\u2022`} Lowers the heart's pumping rate, reduces lung capacity 
                  </MainText>
                  <MainText style={styles.bullets}>  
                      {`\u2022`} Alters blood pressure  
                  </MainText>
                  <MainText style={styles.bullets}>  
                      {`\u2022`} Increases chance of pneumonia   
                  </MainText>
                  <MainText style={styles.bullets}>  
                      {`\u2022`} Can cause skin pressure sores  
                  </MainText>
                  <View style={{borderWidth: 1, marginHorizontal: wp('1%')}}>
                      <MainText style={styles.bullets}>  
                          {`\u2022`} Do slow stretches to ease stiffness. Roll from side to side.  
                      </MainText>
                      <MainText style={styles.bullets}>  
                          {`\u2022`} Before moving take your time. Quick changes can cause becoming dizzy.  
                      </MainText>
                  </View>
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,

  },
  bullets: {
    marginVertical: 5,
  },
  imageDefault: {
    //width: wp('90%'),
    marginTop: hp('2%'),
    alignSelf: 'center'
  },

});


export default NewDayScreen;