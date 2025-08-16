import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  linearGradient: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(32),
    // justifyContent: "center",
    alignItems: "center"
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp("8.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerWrap: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp("8.5%"),
    justifyContent: "center",
    alignItems: "center"
  },
  backIcon: {
    width: 33.33,
    height: 33.33,
    resizeMode: "contain"
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Satoshi-Bold",
    color: Colors.White,
  },
  empty: {
    width: 40,
  }
})
export default styles;