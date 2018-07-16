import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LegendText = props => (
  <Text 
    {...props} 
    style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    marginLeft: 300, 
    color: 'blue',
}
  
});

export default LegendText;