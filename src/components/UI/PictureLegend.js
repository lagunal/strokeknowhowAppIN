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
    fontSize: 12,
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: 'center',
}
  
});

export default PictureLegend;