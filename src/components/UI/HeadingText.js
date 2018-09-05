import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MainText from "./MainText";

const headingText = props => (
  <View style={styles.container}>
      <MainText 
        {...props} 
        style={[styles.textHeading, props.style]}>
        {props.children}
      </MainText>
  </View>
);

const styles = StyleSheet.create({
  textHeading: {
    //fontSize: 22,
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  container: {
    paddingTop: hp('2.5%'),
    width: wp('100%'),
    //backgroundColor: 'gray'
  }
  
});

export default headingText;