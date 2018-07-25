import React, { Component } from 'react';
import { View } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import BodyScroll from "../../UI/BodyScroll";

import ajax from '../../../ajax/ajax';

class MedicationDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameMedicine: this.props.item.nameMedicine,
            dose: this.props.item.dose,
            morning: this.props.item.morning,
            noon: this.props.item.noon,
            afternoon: this.props.item.afternoon,
            evening: this.props.item.evening,
            bedtime: this.props.item.bedtime
        }
    }
    //updates the data array with the updated info and call function to save 
    handlePress = () => {
        var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.nameMedicine : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.dose : data[key];
                    data[key] = (key === this.props.keyId[2]) ? this.state.morning : data[key];
                    data[key] = (key === this.props.keyId[3]) ? this.state.noon : data[key];
                    data[key] = (key === this.props.keyId[4]) ? this.state.afternoon : data[key];
                    data[key] = (key === this.props.keyId[5]) ? this.state.evening : data[key];
                    data[key] = (key === this.props.keyId[6]) ? this.state.bedtime : data[key];
                }
            }
        
        ajax.saveToolkit(data, this.props.userId, this.props.token, 'medication');
        this.props.onPress();//calls the onPress event from parent 
    }
    
    render(){
        const { item } = this.props;

        return(
            <BodyScroll>
            <View style={{flex: 1}}>    
                                
                <MainText><SubHeadingText>{item.labelMedicine}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.nameMedicine} 
                        onChangeText={nameMedicine => this.setState({ nameMedicine } )} />
                
                <MainText><SubHeadingText>{item.labelDose}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.dose} 
                        onChangeText={dose => this.setState({ dose } )} />

                <MainText><SubHeadingText>{item.labelMorning}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.morning} 
                        onChangeText={morning => this.setState({ morning } )} />

                <MainText><SubHeadingText>{item.labelNoon}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.noon} 
                        onChangeText={noon => this.setState({ noon } )} />

                <MainText><SubHeadingText>{item.labelAfternoon}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.afternoon} 
                        onChangeText={afternoon => this.setState({ afternoon } )} />

                <MainText><SubHeadingText>{item.labelEvening}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.evening} 
                        onChangeText={evening => this.setState({ evening } )} />

                <MainText><SubHeadingText>{item.labelBedtime}</SubHeadingText>  </MainText>
                <TextFieldInput value={this.state.bedtime} 
                        onChangeText={bedtime => this.setState({ bedtime } )} />

                <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                Save
                </Button>
            </View>
            </BodyScroll>
        )
    }

}

export default MedicationDetail;

