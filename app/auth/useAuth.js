import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import { storeToken, removeToken } from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    setUser(jwtDecode(authToken));
    storeToken(authToken);
  };

  const logout = () => {
    setUser(null);
    removeToken();
  };

  return { user, login, logout };
};

export default useAuth;
