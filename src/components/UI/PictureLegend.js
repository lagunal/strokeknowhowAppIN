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
    marginTop: 0,
    marginRight: 5,
    textAlign: 'right',
}
  
});

export default PictureLegend;