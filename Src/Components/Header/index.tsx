import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Images from '../../Styles/Images';
import Styles from './Styles';
import { LinearGradient } from 'react-native-linear-gradient';


const Header = (props: any) => {
  const { navigation, title, backAction } = props;
  return (
    <LinearGradient
      colors={['#6D20EC', 'rgba(109, 32, 236, 0)']} // array of colors
      start={{ x: 0.5, y: 0 }} // start point of the gradient
      end={{ x: 0.5, y: 1 }} // end point of the gradient
      style={Styles.linearGradient}>
      {
        backAction == true ?
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image source={Images.back} style={Styles.backIcon} />
            </TouchableOpacity>
            <Text style={Styles.headerTitle}>{title}</Text>
            <View style={Styles.empty} />
          </View>
          :
          <View style={Styles.headerWrap}>
            <Text style={Styles.headerTitle}>{title}</Text>
          </View>
      }
    </LinearGradient>
  );
};

export default Header;
