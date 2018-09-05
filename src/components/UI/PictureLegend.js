import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PictureLegend = props => (
  <Text 
    {...props} 
    style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 14,
    marginTop: 0,
    marginRight: 10,
    marginLeft: wp('10%'),
    textAlign: 'right',
}
  
});

export default PictureLegend;