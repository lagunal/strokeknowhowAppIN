import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";
import HeadingText from '../components/UI/HeadingText';
import SubHeadingText from '../components/UI/SubHeadingText';

const brainImage = require('../assets/india6.png');
const THRESHOLD = 200;

class BrainBodyScreen extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // if (this.props.homeScreen === 'home') { 
        //     return (
        //         <View style={styles.container}>
        //           <HeadingText>Brain Body Connection</HeadingText>
                  
        //           <ImageContainer source={brainImage} orientation={'portrait'}/>
                  
        //           <MainText>
        //           My doctor told me about research that proves after a stroke, when an area of the brain is injured, doing tasks, repeating them several times, helps healing. 
        //                  For six months, I used both my weaker and stronger hand, washing my kitchen window, sorting laundry, polishing the table.{`\n`}
                    
        //           My goal was for my right hand to open and fingers to move. I kept at it, but saw no difference, {`\n`}
        //           One morning I reached for a cup for coffee, suddenly fingers in my right hand slowly opened. I began to cry, and kept moving my fingers. 
        //           </MainText>
      
        //           <PictureLegend >&mdash; Madeline, Stuttgart, Germany</PictureLegend>
      
        //           <MainText>
        //               Add your tasks, use both hands, repeat them several times. 
        //           </MainText>
      
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Fold, open, re-fold items: paper napkins, clothes.
        //           </MainText>
      
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Cut/peel vegetables, fruit. Polish silverware: Wash dishes. Place cans on a shelf.
        //           </MainText>
      
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Polish silverware: Wash dishes.
        //           </MainText>
      
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Button/Unbutton shirt.
        //           </MainText>
      
        //           <TouchableOpacity onPress={this.playVideo}>    
        //               <View style={{padding: 20}}>
        //                   <MainText><SubHeadingText style={{marginBottom: 0, fontSize: 22}}>Check VIDEO &rarr;</SubHeadingText></MainText>
        //                   <Video
        //                       source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/19_Rob_Lawyer_and_blue_grass_musician.mp4"}}
        //                       ref={(ref) => {
        //                           this.player = ref
        //                       }}  
        //                       style={{height: 300}}
        //                       rate={1}
        //                       paused={this.state.videoPaused}
        //                       volume={1}
        //                       muted={false}
        //                       playInBackground={false}
        //                       playWhenInactive={false}
        //                       resizeMode='contain'
        //                       repeat={false}
        //                       />  
        //               </View>
        //           </TouchableOpacity>
      
        //           <HeadingText>What is Aphasia?</HeadingText>
      
        //           <MainText>
        //               Aphasia is a condition that makes it difficult to say what you are thinking, or understand what is said. 
        //               More than half of men and women after a stroke have the condition. 
        //           </MainText>
      
        //           <MainText>
        //               <Text>
        //                   {`\u2022`} Intelligence is not affected.
        //               </Text>    
        //           </MainText>
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Relearning is ongoing: Talking, reading, writing, problem solving. 
        //                       You keep at it, until you get back what you've lost.  
        //           </MainText>
      
        //           <MainText style={styles.bullets}>
        //           {`\u2022`} Find an Aphasia Group or a family with similar experiences. 
        //               It can increases confidence, friendships.  
        //           </MainText>
            
        //         </View>           
        //       );
        // }    

        return (
          <View style={styles.container}>
            <ScrollView
              scrollEventThrottle={16} 
              onScroll={this.handleScroll}
            >

                            <HeadingText>What is Aphasia?</HeadingText>
                              
                              <MainText>
                              More than half of all people who have had a stroke have aphasia -- a condition that makes it difficult to say what you are thinking, or understand what is said.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Aphasia does not affect intelligence.  
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Relearning is ongoing: Talking, reading, writing, problem solving. You keep at it, until you get back what you've lost.   
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} It is helpful to find an Aphasia Group or a family with similar experiences. It can increase confidence, encourage friendships.  
                              </MainText>
                        
                              <HeadingText>Brain Body Connection</HeadingText>
                              
                              <Image source={brainImage} style={styles.imageDefault} resizeMode='contain'/>
                              
                              <MainText>
                              My doctor told our family about research that proves when an area of the brain is injured,doing tasks, repeating them several times, helpsin healing.{`\n`}
                              For six months, my mother used both her weaker and stronger hand, washingdishes, sorting laundry, polishing.{`\n`}  
                              Her goal was for her right hand to open and fingers to move. For six months mother kept at it, but saw no difference.{`\n`}
                              One morning reaching for a plate, suddenly fingers in her right hand slowly opened. She began to cry, kept moving my fingers. 
                              </MainText>
                  
                              {/* <PictureLegend >&mdash; Madeline, Stuttgart, Germany</PictureLegend> */}
                  
                              <MainText>
                              Add your tasks, use both hands, repeat each one several times.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Fold, open, re-fold items: paper napkins, clothes
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Cut/peel vegetables, fruit.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Wash/dry dishes
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Button/Unbutton shirt.
                              </MainText>

            </ScrollView>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    bullets: {
        marginVertical: 5,
    },
    imageDefault: {
        width: wp('90%'),
        marginTop: hp('2%'),
        alignSelf: 'center' 
    },
  });

  

export default BrainBodyScreen;