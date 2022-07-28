import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stepper from "../screens/Stepper";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import RecoveryPassword from "../screens/RecoveryPassword";
import Settings from "../screens/Settings";
import EditProfile from "../screens/Settings/EditProfile";

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Stepper" component={Stepper} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Recovery" component={RecoveryPassword} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
