import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CaptureScreen from "../screens/capture/CaptureScreen";
import MainScreen from "../screens/main/MainScreen";
import CapturedListScreen from "../screens/capturedList/CapturedListScreen";
import CapturedListHeader from "../screens/capturedList/CaptureListHeader";
import colors from "../config/colors";

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
        name="CaptureList"
        component={CapturedListScreen}
        initialParams={{ count: 0 }}
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
          headerTintColor: colors.white,
          headerShadowVisible: false,
          // eslint-disable-next-line react/display-name
          headerTitle: (props) => (
            <CapturedListHeader {...props} route={route} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
