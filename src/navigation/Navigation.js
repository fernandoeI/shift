import React, { useState } from "react";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import RecoveryPassword from "../screens/RecoveryPassword";
import Settings from "../screens/Settings";
import EditProfile from "../screens/Settings/EditProfile";
import ChangePassword from "../screens/Settings/ChangePassword";
import CustomizeTheme from "../screens/Settings/CustomizeTheme";
import Stepper from "../screens/Stepper";
import Community from "../screens/Community";
import Home from "../screens/Home";
import Body from "../screens/Body";
import Mind from "../screens/Mind";
import Nutrition from "../screens/Nutrition";
import Workshops from "../screens/Workshops";

import { IconButton, Image } from "native-base";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // Screens for logged in users
        <Tab.Navigator
          screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        >
          <Tab.Group
            screenOptions={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/tabIcons/Home.png")}
                  alt="Home"
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          >
            <Tab.Screen name="Home" component={Home} />
          </Tab.Group>
          <Tab.Group
            screenOptions={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/tabIcons/Body.png")}
                  alt="Home"
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          >
            <Tab.Screen name="Body" component={Body} />
          </Tab.Group>
          <Tab.Group
            screenOptions={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/tabIcons/Mind.png")}
                  alt="Home"
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          >
            <Tab.Screen name="Mind" component={Mind} />
          </Tab.Group>
          <Tab.Group
            screenOptions={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/tabIcons/Nutrition.png")}
                  alt="Home"
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          >
            <Tab.Screen name="Nutrition" component={Nutrition} />
          </Tab.Group>
          <Tab.Group
            screenOptions={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/tabIcons/Workshops.png")}
                  alt="Home"
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          >
            <Tab.Screen name="Workshops" component={Workshops} />
          </Tab.Group>
        </Tab.Navigator>
      ) : (
        // Auth screens
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Stepper" component={Stepper} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Recovery" component={RecoveryPassword} />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
