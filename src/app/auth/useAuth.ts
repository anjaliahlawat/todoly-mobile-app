import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import { storeToken, removeToken } from "./storage";

type UseAuthReturnType = {
  user: string | null;
  login: (authToken: string) => void;
  logout: () => void;
};

const useAuth = (): UseAuthReturnType => {
  const { user, setUser } = useContext(AuthContext) as ContextType;

  const login = (authToken: string) => {
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
