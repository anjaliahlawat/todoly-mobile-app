import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CaptureScreen from "../screens/capture/CaptureScreen";
import OrganizeScreen from "../screens/organize/OrganizeScreen";
import MainScreen from "../screens/main/MainScreen";

const Stack = createStackNavigator();

const AppNavigator = (): ReactElement => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Capture"
        component={CaptureScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Organize"
        component={OrganizeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
