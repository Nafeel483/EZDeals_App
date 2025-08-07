import React, { useRef, useEffect } from 'react';
import {
  View,
  Image,
  Animated,
  StatusBar,
  Dimensions
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type Props = {
  navigation: any;
};

const { width } = Dimensions.get('window');
const Splash = (props: any) => {
  const { navigation } = props;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Run animation
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Optional: navigate after 3 seconds
      setTimeout(() => {
        navigation.replace('Onboarding'); 
      }, 3000);
    });
  }, []);

  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        <View style={Styles.centerWrapper}>
            <Animated.Image
              source={Images.logo}
              style={[
                Styles.logo,
                {
                  transform: [{ scale: scaleValue }],
                  opacity: opacityValue,
                },
              ]}
              resizeMode="contain" />
        </View>

      </View>
    </SafeAreaView>
  );
}

export default Splash;