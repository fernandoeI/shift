import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { theme } from "./src/utils/theme";

import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </NativeBaseProvider>
  );
}
