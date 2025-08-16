import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flexGrow: 1,
  },
  backgroundWrapper: {
    flex: 1,
  },
  mainHeadContainer: {
    flex: 0.35
  },

  centerContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(3)
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginBottom: hp(4),
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "DMSans-Bold",
    marginBottom: hp(1.5),
    textAlign: "center"
  },
  accountWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(1),
  },
  messageText: {
    fontSize: 14,
    fontFamily: "DMSans-Medium",
    marginRight: hp(0.5)
  },
  registerText: {
    fontSize: 14,
    fontFamily: "DMSans-Bold",
    color: Colors.Blue,
    marginLeft: hp(0.5)
  },


  inputHeader: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
    width: widthScreen / 1.3,
    alignSelf: 'center',
  },


  wrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    borderRadius: 8,
    height: hp(6),
    marginTop: hp(1.5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Colors.StormGrey,
    borderColor: Colors.Border
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "DMSans-Medium",
    marginLeft: hp(2),
    color: Colors.Black
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: hp(2),
  },
  iconStyle: {
    marginRight: hp(2),
    color: Colors.Grayish
  },
  errorText: {
    fontSize: 12,
    fontFamily: "DMSans-Medium",
    marginTop: hp(1.5),
    textAlign: "center",
    color: Colors.Red
  },

  loginButton: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.Golden
  },
  loginText: {
    fontSize: 16,
    color: Colors.White,
    fontFamily: "DMSans-Bold",
  },

  bottomHeadContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginBottom: hp(1.5)
  },
  socialBoxWrap: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginBottom: hp(2),
  },
  socialText: {
    fontSize: 14,
    fontFamily: "DMSans-Medium",
    textAlign: "center",
    color: Colors.MediumBlue
  },
  nextButtonInner: {
    width: "50%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: hp(3.5),
    marginTop: hp(0.5)
  },
  nextIcon: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },

});
export default styles;