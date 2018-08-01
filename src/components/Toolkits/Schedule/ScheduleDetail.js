import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import BodyScroll from "../../UI/BodyScroll";
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class ScheduleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
        }
    }
    //updates the data array with the updated info and call function to save 
    handlePress = () => {
        var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.name : data[key];
                }
            }
        
        ajax.saveToolkit(data, this.props.userId, this.props.token, 'schedule');
        this.props.onPress();//calls the onPress event from parent 
    }
    
    render(){
        const { item } = this.props;

        return(
            <BodyScroll>
            <View style={{flex: 1}}>    
                                
                <MainText><SubHeadingText>{item.label}</SubHeadingText>  </MainText>
                <TextInput value={this.state.name} 
                        style={styles.inputStyleToolkit}
                        onChangeText={name => this.setState({ name } )} />

                <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                Save
                </Button>
            </View>
            </BodyScroll>
        )
    }

}

export default ScheduleDetail;

