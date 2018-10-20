
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Linking, Image, Dimensions
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';

import ImageContainer from '../components/UI/ImageContainer';
import PictureLegend from '../components/UI/PictureLegend';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";


const medicationsImage = require('../assets/india3.png');

const brainImage = require('../assets/india6.png');
const emergencyIcon = require('../assets/emergency-station-icon.png');
const bioImage = require('../assets/bio.jpg');
const rangeMotion = require('../assets/india4.png');
const gettingUp = require('../assets/india5.png');
const weeklyScheduleIcon = require('../assets/fotoWeeklySchedule.jpg');
const helpNeededIcon = require('../assets/fotohelpneeded.png');
const medicationIcon = require('../assets/FotoMedication.jpg');
const physicalIcon = require('../assets/FotoPhysicalTherapy.jpg');

const THRESHOLD = 200;

class HomeScreen extends Component {

  constructor(props) {
      super(props);   
  }

  state = {
    videoAnimationPaused: true,
    //videoRobPaused: true,
    position: {
        start: null,
        end: null,
    },
    // positionVideoRob: {
    //     startRob: null,
    //     endRob: null,
    // }
  };

  handleVideoLayout = (e) => {
    const { height } = Dimensions.get("window");
    
    this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
  };

//   handleVideoLayoutRob = (e) => {
//     const { height } = Dimensions.get("window");
    
//     if (height > 600) {
//         this.state.positionVideoRob.startRob = 11300 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     } else {
//         this.state.positionVideoRob.startRob = 9800 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     }
//   };

  handleScroll = (e) => {
    
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.videoAnimationPaused;
    //const pausedRob = this.state.videoRobPaused;
    const { start, end } = this.state.position;
    //const { startRob, endRob } = this.state.positionVideoRob;
    // console.log('scroll ' + scrollPosition);
    // console.log('start ' + this.state.positionVideoRob.startRob);
    // console.log('end ' + this.state.positionVideoRob.endRob);

    //Video animation
    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ videoAnimationPaused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ videoAnimationPaused: true });
    }
    //Video Rob
    // if (scrollPosition > startRob && scrollPosition < endRob && pausedRob) {
    //     this.setState({ videoRobPaused: false });
    // } else if (scrollPosition < startRob || scrollPosition > endRob && !pausedRob) {
    //     this.setState({ videoRobPaused: true });
    // }
   // console.log(this.state.videoAnimationPaused);
  };  

  handleHelpNeeded = () => {
    this.props.navigator.push({
      screen: "StrokeApp.HelpNeededToolkitScreen",
    });
  }

  handleSchedule = () => {
    this.props.navigator.push({
      screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  handleMedication = () => {
    this.props.navigator.push({
      screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }

  handlePhysical = () => {
    this.props.navigator.push({
      screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }

  handleEmergency = () => {
    this.props.navigator.push({
      screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }

//   handleFullScreen = () => {
//     this.player.seek(0);
//   }
//   handleFullScreenAnimation = () => {
//     this.player2.seek(0);
//   }

  playVideo = () => {
    this.player.presentFullscreenPlayer();
  }

  playVideoAnimation = () => {
    this.player2.presentFullscreenPlayer();
  }

//   handleOnLoadAnimation = () => {
//     this.player2.seek(2);
//     const paused = this.state.videoAnimationPaused;
//     this.setState({ paused: true });

//   };
//   handleOnLoadRob = () => {
//     this.player.seek(1);
//     const paused = this.state.videoRobPaused;
//     this.setState({ paused: true });

//   };

  render() {
    //const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <StatusBar
              barStyle="light-content"
          />  
          <ScrollView
          scrollEventThrottle={16} 
          onScroll={this.handleScroll}
          minimumZoomScale={1}
          maximumZoomScale={2}
          >
{/*************** New Day Screen  ********************************/}
                <View>
                        
                        <StatusBar
                            barStyle="light-content"
                        />    

                        <Image source={require('../assets/india2.png')} style={styles.imageDefault} resizeMode='contain'/>  

                        <MainText style={{marginBottom: 0}}>    
                        After mother had a stroke, my sisters and a helper care for her. When she left the hospital, my mother could stand, but not walk. Aphysical therapist trained us to continue therapy at home. 
                        </MainText>
                        <PictureLegend style={{marginRight: wp('10%') }}>&mdash; Aryun</PictureLegend>    
                        
                        <MainText style={{marginBottom: 0}}>    
                        Her doctor told our family it is important for my mother to get out of bed and dress every day. {`\n`}Benefits: 
                        </MainText>
                          
                        <MainText style={styles.bullets}>
                            {`\u2022`} Complete bed rest deconditions the body.  
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Lowers the heart's pumping rate, reduces lung capacity 
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Alters blood pressure  
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Increases chance of pneumonia   
                        </MainText>
                        <MainText style={styles.bullets}>  
                            {`\u2022`} Can cause skin pressure sores  
                        </MainText>
                        <View style={{borderWidth: 1, marginHorizontal: wp('1%')}}>
                            <MainText style={styles.bullets}>  
                                {`\u2022`} Do slow stretches to ease stiffness. Roll from side to side.  
                            </MainText>
                            <MainText style={styles.bullets}>  
                                {`\u2022`} Before moving take your time. Quick changes can cause becoming dizzy.  
                            </MainText>
                        </View>

                </View>

 {/*************** Moving Safely Screen  ********************************/}
                      <View>
                              <TouchableOpacity onPress={this.playVideoAnimation}>
                                  <View style={{padding: 20}}>
                                      <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>Touch video to open full screen player &rarr;</SubHeadingText></MainText>
                                      <Video
                                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                                        ref={(ref) => {
                                          this.player2 = ref
                                        }}       
                                        style={{height: 300}}                             
                                        rate={1}
                                        paused={this.state.videoAnimationPaused}
                                        onLayout={this.handleVideoLayout}
                                       // volume={1}
                                       // muted={false}
                                       // onLoad={this.handleOnLoadAnimation}
                                       // onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                                        //playInBackground={false}
                                        //playWhenInactive={false}
                                        resizeMode='contain'
                                        repeat
                                        />
                                  </View>
                              </TouchableOpacity> 

                              <HeadingText>Helpers Protecting Themselves</HeadingText>
                              
                              <MainText style={styles.bullets}>  
                              {`\u2022`} When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Stand with feet slightly apart, one foot ahead of the other to keep your balance, and shift your weight if necessary.
                              </MainText>
                
                              <HeadingText>Questions Families {`\n`} Ask Themselves</HeadingText>
                              
                              <MainText style={styles.bullets}>
                                  {`\u2022`} Who will handle personal care; physical therapy? When?
                              </MainText>
                              <MainText style={styles.bullets}>
                                  {`\u2022`} Who will Shop, housekeeping? When? 
                              </MainText>
                              <MainText style={styles.bullets}>     
                                  {`\u2022`} Drive to doctor and therapy appointments. 
                              </MainText>        
                    </View>

{/*************** Weekly Plan Screen  ********************************/}
                    <View>

                    <LinkToolkitWrapper 
                      text={'The family can share this Interactive Toolkit on their cell phone.'}
                      source={helpNeededIcon}
                      onPress={this.handleHelpNeeded}
                    />


                    <HeadingText>Let's Talk About Safety</HeadingText>

                    <MainText>
                      To make your home safer after a stroke:   
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Doors may need to be widen for a wheelchair.    
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Lower light switches, toilet-tissue dispensers, towel racksto be easily reached. Lower a mirror and medicine cabinet. 
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} A raised toilet makestransfers easier. Grab barson side of toilet, on wall, ensure safer transfers.   
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Falls #1 cause of home injuries, especially on wet bathroom floors transferring. Many people return to hospitals one month after discharge because of injuries.   
                    </MainText>
                   
                    <Link />  
                  
                    <HeadingText>Benefits of a Weekly Schedule</HeadingText>

                    <MainText style={styles.bullets}>      
                        {`\u2022`} Organizing each day benefits the family. It prioritizes what needs to take place, give it a time.  
                    </MainText>
                    <MainText style={styles.bullets}>  
                        {`\u2022`} Have stimulating times, in between, time to relax, nap. Gives a caring partner time to rest and renew.    
                    </MainText>

                    <LinkToolkitWrapper 
                      text={'Type in your schedule. Share with family this Toolkit on their cell phone.'}
                      source={weeklyScheduleIcon}
                      onPress={this.handleSchedule}
                    />

                    </View>



{/*************** Medications Screen  ********************************/}

                    <View>
                        <HeadingText>Organizing Medications</HeadingText>

                        <Image source={medicationsImage} style={styles.imageDefault} resizeMode='contain'/>
                        
                        <MainText>
                        My mother uses a pill organizer, Interactive Medication Toolkit. 
                        I typed in her medications. After taking a medication my mother’s
                        helpers put a check in the box. I can also see Toolkit on my cell phone and certain mother is taking her medications.
                        </MainText>

                        <LinkToolkitWrapper 
                          text={'Family can see Interactive Medication Toolkiton a cell phone.'}
                          source={medicationIcon}
                          onPress={this.handleMedication}
                        />
                    </View>     



{/*************** Bladder Control Screen  ********************************/}

                    <View>

                        <HeadingText>Looking at Expenses</HeadingText>

                        <MainText>  
                          After stroke, a family looks at livingand medical expenses, how each one will help. 
                        </MainText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`}  A family may ask a physical therapist or nurse to evaluate their loved one’s ability to move, talk, understand, handle personal care.  
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`}  A psychologist, if a family asks, can evaluate emotional effects of stroke; offer how to cope with changes.  
                        </MainText>

                          <HeadingText>
                          Personal Cleanliness
                          </HeadingText>


                          <MainText style={styles.bullets}> 
                          {`\u2022`} To prevent infection, protect skin, and for comfort, your loved one needs to be washed or bathed every day. Use warm water and soap. Dried thoroughly, massaged with soothing lotion. 
                          </MainText>

                          <MainText style={styles.bullets}>  
                          {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
                          </MainText>

                        <HeadingText>Bladder Control</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Ask a doctor, nurse, health worker reestablishing bladder control. Brain and bladder need to keep dry on your schedule.
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. With greater control, urinate every 3 to 4 hours.  
                        </MainText>

                        <HeadingText>Regaining Bowel Control</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Help is needed in re-training brain’s ability to control movements. At first, empty on a routine. Increase time to relieve oneself. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, low-fiber diet.  
                        </MainText>

                        <HeadingText>Drinking Water</HeadingText>

                        <MainText>  
                        {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. Do not use a straw.                 
                        </MainText>

                        <HeadingText>Swallowing</HeadingText>

                        <MainText>  
                          A nurse or speech therapistcan help retraining swallowing.
                        </MainText>
                        <MainText style={styles.bullets}>
                        {`\u2022`} Act quickly in a swallowing emergency. Learn CPR to save a life. 
                        </MainText>
                        <MainText style={styles.bullets}>   
                        {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
                        </MainText>

                        <HeadingText>Questions to Ask Your Doctor</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} What information do we need about our loved one’s stroke? High blood pressure? Diabetes? Numbers to report? 
                        </MainText>  
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Side effects of medicine to report?
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Has my hospital report been sent to my other doctors?
                        </MainText>

                    </View>        


{/*************** Blood Pressure Screen  ********************************/}

                    <View>

                          <HeadingText>Blood Pressure</HeadingText>

                          <MainText style={styles.bullets}>
                                {`\u2022`} Systolic pressure (S), is the highest pressure during a heartbeat. 
                                </MainText>
                                <MainText style={styles.bullets}>  
                                {`\u2022`} Diastolic pressure (D), is the lowest pressure between beats.
                                </MainText>
                                <MainText style={styles.bullets}>   
                                {`\u2022`} Normal blood pressure, less than 120 (S) and less than 80 (D).
                                </MainText>
                                
                                <MainText style={styles.bullets}>
                                {`\u2022`} Elevated between 120-129 (S) and less than 80 (D).
                                </MainText>
                                <MainText style={styles.bullets}>  
                                {`\u2022`} High Blood Pressure Hypertension state 1, 130-139 (S) or 80-89 (D).
                                </MainText>
                                <MainText style={styles.bullets}>  
                                {`\u2022`} High Blood Pressure Hypertension state 2, 140 or higher (S) or 90 or higher (S).
                                </MainText>
                                <MainText style={styles.bullets}>  
                                {`\u2022`} Hypertension crisis, consult your doctor immediately, higher than 180 (S) and/or higher than 120 (D).
                            </MainText>

                          <HeadingText>Testing Blood Sugar </HeadingText>

                          <MainText style={styles.bullets}>
                          {`\u2022`} Blood glucose test is used for diabetes. Results used to regulate medications, diet. Ask when to test, numbers to report to doctor.    
                          </MainText>

                          <HeadingText>Physical Therapists</HeadingText>

                          <MainText style={styles.bullets}>
                          {`\u2022`} How to continue physical therapy?  
                          </MainText>
                          <MainText style={styles.bullets}>  
                          {`\u2022`} Exercises to do? How? How often? 
                          </MainText>
                          <MainText style={styles.bullets}>  
                          {`\u2022`} How long?
                          </MainText>
                          <MainText style={styles.bullets}>  
                          {`\u2022`} Benefits? Purpose?
                          </MainText>

                          <LinkToolkitWrapper 
                            text={'Share the Interactive Physical Therapy Toolkit with the family on their cell phones.'}
                            source={physicalIcon}
                            onPress={this.handlePhysical}
                          />

                      </View>         


{/*************** Range of motion Screen  ********************************/}

                      <View>
                            <HeadingText>Range-of-Motion</HeadingText>

                            <Image source={rangeMotion} style={styles.imageDefault} resizeMode='contain'/>     

                            <MainText>
                                Range-of-motion exercises can keep joints
                                moving freely and fully. Exercises are to do either by yourself or with someone. 
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Do exercises in a slow, smooth motion.  
                                      A helper firmly holds joint exercised with one hand, other to create, guide movement. 
                                      Helpers stop exercise when a joint is not moving freely, or there is discomfort. 
                            </MainText>  
                            <MainText style={styles.bullets}>
                            {`\u2022`} Move and stretch muscles in a weakened arm and leg <Text style={{textDecorationLine: 'underline'}}>several times a day</Text>, 
                            to prevent contractures, shortening of muscles around joints that cause tight, painful bands.
                            </MainText>          

                            <HeadingText>Body Positioning</HeadingText>
                            <MainText>
                                At all times — whether lying in bed, sitting, or walking — good body positioning is essential for the body's soundness. 
                                To prevent contractures. 
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Position of your head affects muscle tone of trunk, arms, legs. 
                                        If turned to one side, interferes with balance. ability to move about. 
                            </MainText>  
                            <MainText style={styles.bullets}>
                            {`\u2022`} Weight needs to be evenly distributed. Use a pillow to prop up lowered side.  
                            </MainText>   
                            <MainText style={styles.bullets}>
                            {`\u2022`} To hold your shoulder joint in place, support forearm with a pillow. 
                                      Have your shoulder and arm stretched forward.
                            </MainText>
                            <MainText style={styles.bullets}>
                            {`\u2022`} Lift weaker wrist with sound hand to bring arm forward. 
                                      Keep wrist extended, fingers straight as possible. 
                            </MainText>   
                            
                            <Link />

                      </View>     

{/*************** Skin Care Screen  ********************************/}

                      <View>
                            <HeadingText>Skin Care</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Check skin every day for redness, injury – especially when skin is fragile, poor circulation, diabetic. Pressure sores, skin breakdown occur from infrequent turning, changing positions when seated.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Pressure sores require immediate medication, treatment.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
                            </MainText>

                      </View>           

{/*************** Getting Up Screen  ********************************/}

                      <View>

                            <Image source={gettingUp} style={styles.imageDefault} resizeMode='contain'/>

                            <MainText>
                            After my stroke, depression hit me hard. I am the youngest lawyer in the court, suddenly I could not see what my future held. 
                            </MainText>
                            <MainText>  
                            My husband continued my care until he had to return to his job. Then my aunt came, two neighbors helped the most.
                            </MainText>

                            <MainText>
                            Two things helped me: 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`}  The love of my husband.  
                            </MainText>

                            <MainText style={styles.bullets}>  
                            {`\u2022`} My best friend challenged me to reach greater independence.  
                            </MainText>

                            <PictureLegend >&mdash; Anaya</PictureLegend>

                            <HeadingText>Getting Up when Feeling Down</HeadingText>
                            <MainText>
                            Advice from men and women who have had a stroke:
                            </MainText>

                            <MainText>
                            {`\u2022`} Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative ones. 
                            </MainText>

                            <MainText>
                            {`\u2022`} Be around people who make you feel good about yourself. Look for a family touched by stroke, can make a difference.
                            </MainText>

                            <MainText>
                            {`\u2022`} Sadness, impatience, loss, love, come with one another. All feelings are valid, reactions what you've been through. 
                            </MainText>           

                            <Link />
                      </View>           

{/*************** Brain Body Screen  ********************************/}

                      <View>
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
                  
    
                      </View>          


{/*************** Emergency Screen  ********************************/}

                    <View>
                            <LinkToolkitWrapper 
                              text={'Type information on this Toolkit. Family can share information on their cell phone.'}
                              source={emergencyIcon}
                              onPress={this.handleEmergency}
                            />

                            <MainText>If you believe it is an emergency – it probably is!</MainText>
                            <HeadingText style={{fontWeight: 'bold'}}>Get help immediately.</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Call your Emergency Number.   
                            </MainText>      

                            <MainText style={styles.bullets}>
                            {`\u2022`} Report possible stroke, or another emergency. 
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} When calling in an emergency, answer questions in clear, short answers.  
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} Do not hang up first: Wait for instructions. 
                            </MainText> 
                            
                            <HeadingText >In Emergency</HeadingText>
                            
                            <Link />  

                  </View>           

{/*************** Bio Screen  ********************************/}

                  <View style={{marginTop: 50}}>
                          <ImageContainer source={bioImage} orientation={'portrait'} style={[styles.image, {height: '100%'}]} />    

                          <MainText>
                          A long-time activist in the disability rights movement, and author of more than a dozen books, Florence Weiner has interviewed hundreds of men and women and their families touched by stroke. She shares their advice here, at StrokeKnowHow.org a worldwide stroke community based on the belief we learn best from one another.    
                          </MainText>

                          <MainText>
                          Every stroke is unique. So is the path we choose to find our way back. If you find answers, motivation, inspiration and hope, this work will fulfill its purpose.    
                          </MainText>
                          <MainText>For Richard, the brightest light.</MainText>
                  </View>       


          </ScrollView>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  bullets: {
    marginVertical: 5,
  },
  image: {
    //width: 250,
    width: wp('80%'),
    height: 200,
    //marginTop: 5,
    alignSelf: 'center'
  },
  imageDefault: {
    width: wp('90%'),
    marginTop: hp('2%'),
    alignSelf: 'center' 
  },
  imageWeekly: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  imageGetting: {
    width: wp('90%'),
    height: 180,
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  imagePat: {
    width: wp('60%'),
    height: 300,
    marginTop: hp('2%'),
    alignSelf: 'center'
  },
});


export default HomeScreen;