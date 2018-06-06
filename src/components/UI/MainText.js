import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
    <Text 
        {...props} 
        style={[styles.mainText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "black",
        fontFamily: 'Verdana',
        fontSize: 15,
        textAlign: 'center',
        margin: 7,    
    }
});

export default mainText;