import React from 'react';
import { View, Text } from 'react-native';

import HeadingText from './HeadingText';
import MainText from "./MainText";

const ToolkitMedication = (props) => {


    return(
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: props.backgroundColor}}>    

            <View style={{flex: 2}}>   
                <MainText>Medication</MainText>
                <Text>{props.medication}</Text>
            </View>

            <View style={{flex: 1}}>   
                <MainText>Dosage</MainText>
                <Text>{props.dosage}</Text>
            </View>

            <View style={{flex: 1}}>   
                <MainText>Purpose</MainText>
                <Text>{props.purpose}</Text>
            </View>

        </View>

    )

}

export default ToolkitMedication;

