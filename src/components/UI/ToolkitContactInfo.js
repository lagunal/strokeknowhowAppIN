import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import HeadingText from './HeadingText';
import MainText from "./MainText";

const ToolkitContactInfo = (props) => {

    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: props.backgroundColor}}>    
                                
                    <View style={{flex: 2}}>   
                    <MainText>{props.label}</MainText>
                    <Text>{props.name}</Text>
                    </View>

                    <View style={{flex: 1}}>   
                        <MainText>{props.labelContact}</MainText>
                        <Text>{props.phone}</Text>
                    </View>

            </View>
        </TouchableOpacity>
    )

}

export default ToolkitContactInfo;

