import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MainText from "../../UI/MainText";

const ToolkitSingleItem = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(

        <TouchableOpacity onPress={this.handlePress}>
            <View style={styles.container}>    

                <View style={{flex: 1}}>   
                <MainText>{props.label}</MainText>
                <MainText style={styles.label}>{props.name}</MainText>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    label: {
        fontWeight: 'bold',
    },

});

export default ToolkitSingleItem;

