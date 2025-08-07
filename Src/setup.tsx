import React, { useCallback } from 'react';
import { View, LogBox } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from "./Navigation/AppNavigation";

LogBox.ignoreAllLogs()

export default function Root() {
  const [isLoaded] = useFonts({
    "SF-Pro-Bold": require("../assets/Fonts/SF-Pro-Text-Bold.otf"),
    "SF-Pro-Medium": require("../assets/Fonts/SF-Pro-Text-Medium.otf"),
    "SF-Pro-Regular": require("../assets/Fonts/SF-Pro-Text-Regular.otf"),
    "SF-Pro-SemiBold": require("../assets/Fonts/SF-Pro-Text-Semibold.otf"),

    "DMSans-Regular": require("../assets/Fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("../assets/Fonts/DMSans-Medium.ttf"),
    "DMSans-SemiBold": require("../assets/Fonts/DMSans-SemiBold.ttf"),
    "DMSans-Bold": require("../assets/Fonts/DMSans-Bold.ttf"),
    "DMSans-Black": require("../assets/Fonts/DMSans-Black.ttf"),
    "DMSans-ExtraBold": require("../assets/Fonts/DMSans-ExtraBold.ttf"),
    
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}
