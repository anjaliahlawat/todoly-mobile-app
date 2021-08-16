import React, { ReactElement, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
// import { getUser } from "./app/auth/storage";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App(): ReactElement {
  const [user, setUser] = useState<UserObj | null>();
  // const [isReady, setIsReady] = useState(false);

  // const restoreUser = async () => {
  //   const savedUser = await getUser();
  //   if (savedUser) setUser(savedUser);
  // };
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
