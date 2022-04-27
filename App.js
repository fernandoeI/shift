import React from "react";
import { NativeBaseProvider } from "native-base";
import Welcome from "./src/screens/Welcome";
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
    </NativeBaseProvider>
  );
}
