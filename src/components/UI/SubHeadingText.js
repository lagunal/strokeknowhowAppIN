import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MainText from "./MainText";

const SubHeadingText = props => (
  <MainText 
    {...props} 
    style={[styles.textHeading, props.style]}>
    {props.children}
  </MainText>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
}
  
});

export default SubHeadingText;