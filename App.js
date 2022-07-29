import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { theme } from "./src/utils/theme";

import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import Navigation from "./src/navigation/Navigation";

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
      <Navigation />
      <StatusBar barStyle="dark-content" />
    </NativeBaseProvider>
  );
}
