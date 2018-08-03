import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const button = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={[{color: props.textColor}, styles.text]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 25,
        borderRadius: 5,
        width: '100%',
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    }
});

export default button;