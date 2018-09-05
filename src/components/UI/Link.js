import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Link = () => (

    <TouchableOpacity onPress={() => Linking.openURL('https://strokeknowhow.org')}>
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
        justifyContent: 'center',
        marginTop: hp('2%')
    },
    textMore: {
        marginHorizontal: 5,
        fontSize: hp('2.5%')
    },
    textLink: {
        fontSize: hp('2.5%'),
        textDecorationLine: 'underline',
    }


});


export default Link;

