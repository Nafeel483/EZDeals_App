import React, { useRef, useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import Images from '../../Styles/Images';
import Styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from '../../Components/OnboardView';

const heightScreen = Dimensions.get('window').height;


const slides = [
  {
    id: '1',
    title: 'Easy Process',
    description: 'Find all your house needs in one place. We provide every service to make your home experience smooth.',
    image: Images.onboarding1,
    gradient: ['#D080FF', '#6C5DD3'],
    buttonText: 'Next',
  },
  {
    id: '2',
    title: 'Easily Buy or Sell',
    description: 'We provide the best transportation service and organize your furniture properly to prevent any damage.',
    image: Images.onboarding2,
    gradient: ['#77CEFF', '#298BC2'],
    buttonText: 'Next',
  },
  {
    id: '3',
    title: 'Expert People',
    description: 'We have the best in class individuals working just for you. They are well trained and capable of handling anything you need.',
    image: Images.onboarding3,
    gradient: ['#FFC876', '#E84B00'],
    buttonText: 'Get Started',
  },
];



const Onboarding = (props: any) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: "off" }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>
        <OnboardingScreen navigation={navigation} dataSlides={slides} />
      </View>
    </SafeAreaView>

  );
}
export default Onboarding;