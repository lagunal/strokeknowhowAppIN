import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const bodyScroll = props => (
    <ScrollView
        {...props} 
        style={[styles.body, props.style]}>
        {props.children}
    </ScrollView>
);

const styles = StyleSheet.create({
    body: {
        
    }
});

export default bodyScroll;