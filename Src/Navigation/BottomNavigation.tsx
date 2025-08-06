import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Home from "../Screens/MainScreens/Home";
import Orders from "../Screens/MainScreens/Orders";
import Insights from "../Screens/MainScreens/Insights";
import Store from '../Screens/MainScreens/Store';
import Profile from "../Screens/MainScreens/Profile";

const widthScreen = Dimensions.get('window').width;


type BottomStackParamList = {
  HomeTab: undefined,
  OrdersTab: undefined,
  InsightsTab: undefined,
  StoreTab: undefined,
  ProfileTab: undefined,
};

type HomeStackParamList = {
  Home: undefined,
  // MyProfile: undefined,
  // UsersProfile: undefined,
  // CommentPost: undefined,
  // Earnings: undefined
};
type OrdersStackParamList = {
  Orders: undefined,
};
type InsightsStackParamList = {
  Insights: undefined,
};
type StoreStackParamList = {
  Store: undefined,
};
type ProfileStackParamList = {
  Profile: undefined,
};


// const navigationRef = React.createRef<any>();

// export function navigate(name: any, params: any) {
//   navigationRef.current?.navigate(name, params);
// }

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const OrdersStack = createStackNavigator<OrdersStackParamList>();
const InsightsStack = createStackNavigator<InsightsStackParamList>();
const StoreStack = createStackNavigator<StoreStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();


export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="MyProfile" component={MyProfile} />
      <HomeStack.Screen name="UsersProfile" component={UsersProfile} />
      <HomeStack.Screen name="CommentPost" component={CommentPost} /> */}

    </HomeStack.Navigator>
  );
}

const OrdersStacks = () => {
  return (
    <OrdersStack.Navigator initialRouteName="Orders"
      screenOptions={{
        headerShown: false,
      }}>
      <OrdersStack.Screen name="Orders" component={Orders} />

    </OrdersStack.Navigator>
  )
}

export const InsightsStacks = () => {
  return (
    <InsightsStack.Navigator initialRouteName="Insights"
      screenOptions={{
        headerShown: false,
      }}>
      <InsightsStack.Screen name="Insights" component={Insights} />

    </InsightsStack.Navigator>
  );
}

const StoreStacks = () => {
  return (
    <StoreStack.Navigator initialRouteName="Store"
      screenOptions={{
        headerShown: false,
      }}>
      <StoreStack.Screen name="Store" component={Store} />

    </StoreStack.Navigator>
  )
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />

    </ProfileStack.Navigator>
  )
}






export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          let name;
          if (route.name === 'HomeTab') {
            image = Images.home;
            name = 'HOME';
          }
          else if (route.name === 'OrdersTab') {
            image = Images.order;
            name = 'ORDERS';
          }
          else if (route.name === 'InsightsTab') {
            image = Images.insight;
            name = 'INSIGHTS';
          }
          else if (route.name === 'StoreTab') {
            image = Images.store;
            name = 'STORE';
          }
          else if (route.name === 'ProfileTab') {
            image = Images.profile;
            name = 'PROFILE';
          }
          return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', height: Platform.OS == "android" ? hp(8) : hp(7), width: widthScreen / 5 }}>
              {focused && (
                <View style={{
                  position: 'absolute',
                  top: 0,
                  height: 3,
                  width: 38,
                  backgroundColor: Colors.Green,
                  borderRadius: 4,
                }} />
              )}
              <Image source={image} style={{
                marginTop: hp(1.5),
                width: 24,
                height: 24,
                tintColor: focused ? Colors.Green : Colors.SmokyBlack
              }} />
              <Text style={{
                marginTop: hp(0.8),
                fontFamily: "Macan-Bold",
                fontSize: 10,
                color: focused ? Colors.Green : Colors.SmokyBlack
              }}>{name}</Text>
            </View>

          );
        },
        tabBarStyle: {
          height: Platform.OS == "android" ? hp(7.5) + insets.bottom : hp(10.7),
          width: widthScreen,
          alignSelf: "center",
          backgroundColor: Colors.White,
          borderTopWidth: 1,
          borderTopColor: Colors.LightGray,
          justifyContent: "center",
          alignItems: "center",
          position: 'absolute',
          paddingBottom: insets.bottom ,
        },

        tabBarShowLabel: false
      })}>

      <Tab.Screen name="HomeTab" component={HomeStacks} />
      <Tab.Screen name="OrdersTab" component={OrdersStacks} />
      <Tab.Screen name="InsightsTab" component={InsightsStacks} />
      <Tab.Screen name="StoreTab" component={StoreStacks} />
      <Tab.Screen name="ProfileTab" component={ProfileStacks} />
    </Tab.Navigator>
  );
}

export default BottomTabView;