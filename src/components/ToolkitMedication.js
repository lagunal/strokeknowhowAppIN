import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MainText from "./UI/MainText";

const ToolkitMedication = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: props.backgroundColor}}>    

                <View style={{flex: 2}}>   
                    <MainText>{props.labelMedication}</MainText>
                    <Text>{props.medication}</Text>
                </View>

                <View style={{flex: 1}}>   
                    <MainText>{props.labelDosage}</MainText>
                    <Text>{props.dosage}</Text>
                </View>

                <View style={{flex: 1}}>   
                    <MainText>{props.labelPurpose}</MainText>
                    <Text>{props.purpose}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

}

export default ToolkitMedication;

