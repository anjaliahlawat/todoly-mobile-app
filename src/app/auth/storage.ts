import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    // console.log(error);
  }
};

const getToken = async (): Promise<string | null> => {
  let token: string | null = "";
  try {
    token = await SecureStore.getItemAsync(key);
  } catch (error) {
    // console.log(error);
  }
  return token;
};

const getUser = async (): Promise<string | null> => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    // console.log(error);
  }
};

export { getUser, getToken, removeToken, storeToken };
