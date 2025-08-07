import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  // Pagination
  pagination: {
    position: 'absolute',
    bottom: hp(18),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007BFF',
    width: 16,
  },

  // SlideItems
  slideContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  slide: {
    width: widthScreen,
    alignSelf: "center",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  skipButton: {
    position: 'absolute',
    top: hp(7),
    right: 20,
    zIndex: 1,
    borderRadius: 32,
    width: 69,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.LightWhite
  },
  skipText: {
    color: Colors.White,
    fontSize: 14,
    fontFamily: "SF-Pro-SemiBold"
  },
  image: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    height: 288,
    marginTop: hp(3),
  },
  bottomCard: {
    // backgroundColor: Colors.White,
    width: widthScreen,
    alignSelf: "center",
    flex: 1,
    marginTop: hp(4),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    // padding: 20,
  },
  dataContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.3,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontFamily: "DMSans-Bold",
    color: Colors.Black,
  },
  description: {
    fontSize: 16,
    color: Colors.MediumBlack,
    lineHeight: 26,
    textAlign: 'center',
    fontFamily: "DMSans-Regular",
    marginTop: hp(2),
  },
  nextButton: {
    backgroundColor: Colors.Golden,
    width: widthScreen / 1.2,
    alignSelf: "center",
    borderRadius: 15,
    height: 56,
    marginBottom: hp(5),
    alignItems: 'center',
    justifyContent: "center",
  },
  nextButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontFamily: "DMSans-SemiBold"
  },

});
export default styles;