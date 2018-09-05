import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const imageToolkitContainer = ({ src }) => {

    return(
        <View style={styles.container}>
            <Image 
                source={src}
                style={[styles.image]} 
                resizeMode='contain' >
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('35%'),
  },
  image: {
    width: '100%',
    height: hp('40%'),
  }
});

export default imageToolkitContainer;