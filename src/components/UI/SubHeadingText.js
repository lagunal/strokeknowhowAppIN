import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubHeadingText = props => (
  <Text 
    {...props} 
    style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
}
  
});

export default SubHeadingText;