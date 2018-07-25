import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MainText from "../../UI/MainText";

class ToolkitContactInfo extends Component {

    handlePress = () => {
        this.props.onItemPress(this.props, this.props.keyId);
    }
    
    render(){
        return(
            <TouchableOpacity onPress={this.handlePress}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: this.props.backgroundColor}}>    
                                    
                        <View style={{flex: 2}}>   
                        <MainText>{this.props.label}</MainText>
                        <Text>{this.props.name}</Text>
                        </View>

                        <View style={{flex: 1}}>   
                            <MainText>{this.props.labelContact}</MainText>
                            <Text>{this.props.phone}</Text>
                        </View>

                </View>
            </TouchableOpacity>
        )
    }

}

export default ToolkitContactInfo;

