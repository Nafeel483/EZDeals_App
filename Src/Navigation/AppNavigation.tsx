
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

// import BottomTabView from "./BottomNavigation";

import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';

type RootStackParamList = {
  Splash: undefined,
  Onboarding: undefined,
  // LoginSignUp: undefined,
  // BottomTabView: undefined,
  
};

// type AuthStackParamList = {
//   Login: { value: string } | undefined,
// };


enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();

export const setNavigator = (nav: any) => {
  const navigator = nav;
};


export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <RootStack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
        {/* <RootStack.Screen name='LoginSignUp' component={LoginSignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} /> */}

        {/* <RootStack.Screen name='ViewOrderDetail' component={ViewOrderDetail} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='StoreLocation' component={StoreLocation} options={{ headerShown: false }} /> */}
       


        {/* Onboarding */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

