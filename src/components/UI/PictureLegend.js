import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PictureLegend = props => (
  <Text 
    {...props} 
    style={[props.style , styles.textHeading]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 14,
    //color: 'blue',
    paddingLeft: 15,
    paddingRight: 25,
    textAlign: 'center',
}
  
});

export default PictureLegend;