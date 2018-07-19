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
        color: '#0d0d0d',
        fontFamily: 'Verdana',
        fontSize: 17,
        textAlign: 'justify',
        margin: 10,
    }
});

export default mainText;