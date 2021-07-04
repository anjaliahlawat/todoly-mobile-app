import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key: string, value: unknown): Promise<void> => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: any): boolean => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const get = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value as string);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value as string;
  } catch (error) {
    // console.log(error);
    return null;
  }
};

export { store, get };
