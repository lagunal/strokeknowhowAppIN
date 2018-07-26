import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MainText from "../../UI/MainText";

const ToolkitMedication = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: props.backgroundColor}}>    

                <View style={{flex: 3}}>   
                    <MainText>{props.labelMedication}</MainText>
                    <MainText>{props.medication}</MainText>
                </View>

                <View style={{flex: 2}}>   
                    <MainText>{props.labelDosage}</MainText>
                    <MainText>{props.dosage}</MainText>
                </View>

                <View style={{flex: 2}}>   
                    <MainText>{props.labelPurpose}</MainText>
                    <MainText>{props.purpose}</MainText>
                </View>

            </View>
        </TouchableOpacity>
    )

}

export default ToolkitMedication;

