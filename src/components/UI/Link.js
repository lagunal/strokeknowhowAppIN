import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';

const Link = () => (

    <TouchableOpacity onPress={() => Linking.openURL('http://strokeknowhow.org')}>
        <View style={styles.wrapper}>
            <Text style={styles.textMore}>More at</Text>
            <Text style={styles.textLink}>
                StrokeKnowHow.org 
            </Text>
        </View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textMore: {
        marginHorizontal: 5,
        fontSize: 18,
    },
    textLink: {
        color: '#0d0d0d',
        fontSize: 18,
        textDecorationLine: 'underline',
    }


});


export default Link;

