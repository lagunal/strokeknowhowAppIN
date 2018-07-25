import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MainText from "../../UI/MainText";

const ToolkitSingleItem = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(

        <TouchableOpacity onPress={this.handlePress}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>    

                <View style={{flex: 1}}>   
                <MainText>{props.label}</MainText>
                <Text>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

export default ToolkitSingleItem;

