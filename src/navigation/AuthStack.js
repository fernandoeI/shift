import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Stepper from "../screens/Stepper/index";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Stepper" component={Stepper} />
    </Stack.Navigator>
  );
};
