import React from 'react';
import { Text, Image, View } from 'react-native';
import Images from '../../Styles/Images';
import Styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Styles/Colors';

const HeaderLogo = (props: any) => {
  return (
    <LinearGradient
      colors={[Colors.Golden, 'rgba(255, 179, 0, 0)']} // array of colors
      start={{ x: 0.5, y: 0 }} // start point of the gradient
      end={{ x: 0.5, y: 1 }} // end point of the gradient
      style={Styles.linearGradient}>
      <View style={Styles.dataContainer}>
        <Image source={Images.logo} style={Styles.centerImage} />
        <Text style={[Styles.titleText]}>{`EZ DEALS`}</Text>
      </View>
    </LinearGradient>
  );
};

export default HeaderLogo;
