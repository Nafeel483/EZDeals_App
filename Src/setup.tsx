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
