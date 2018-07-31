import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

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

            <TouchableOpacity onPress={this.handlePress}>
                <ImageToolkitContainer src={props.source} />
            </TouchableOpacity>
            
            <Link />
        </View>
    );

};

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        margin: 5,
        paddingTop: 0,
        paddingBottom: 5,
    },
    text: {
        marginBottom: 0,
        marginTop: 30,
    }
});

export default LinkToolkitWrapper;


