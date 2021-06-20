import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  let token = "";
  try {
    token = await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log(error);
  }
  return token;
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export { getUser, removeToken, storeToken };
