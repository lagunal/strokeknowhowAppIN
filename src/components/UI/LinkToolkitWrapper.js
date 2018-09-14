import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ImageToolkitContainer from "../UI/ImageToolkitContainer";
import MainText from "../UI/MainText";
import Link from "../UI/Link";

const LinkToolkitWrapper = (props) => {

    handlePress = () => {
        props.onPress();
    }

    return (
        <View style={styles.wrapper}>
            <MainText style={styles.text} >
                {props.text}
            </MainText>

            <TouchableOpacity style={[styles.wrapper, {marginBottom: 10}]} onPress={this.handlePress}>
                <ImageToolkitContainer src={props.source} />
            </TouchableOpacity>
            
            <Link />
        </View>
        
    );

};

const styles = StyleSheet.create({
    wrapper: {
        margin: 5,
        paddingTop: 0,
        paddingBottom: 5,
        
    },
    text: {
        marginBottom: 0,
        alignSelf: 'center',
        fontSize: wp('3.2%'),
        
    }
});

export default LinkToolkitWrapper;


