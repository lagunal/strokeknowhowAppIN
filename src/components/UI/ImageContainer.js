import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const imageContainer = (props) => {

    return(
        <View style={[styles.container, {height: props.orientation ? hp('40%') : hp('30%'), justifyContent: props.orientation ? 'flex-start' : 'flex-end'}]}>
            <Image 
                {...props} 
                source={props.source}
                style={[styles.image, props.style]}>
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: props.orientation ? 'flex-start' : 'flex-end',
    //paddingTop: 0,
    paddingVertical: 0,
    //backgroundColor: 'yellow'
  },
  image: {
    
    width: wp('90%'),
    resizeMode: 'contain',
    height: hp('35%'),
  }
});

export default imageContainer;