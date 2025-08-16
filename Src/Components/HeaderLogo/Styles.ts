import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  linearGradient: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(30),
  },
  dataContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
  },
  centerImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  titleText: {
    // marginTop: hp(1),
    fontSize: 20,
    fontFamily: "DMSans-Bold",
    textAlign: "center",
    color: Colors.CharcoalDark
  },
})
export default styles;