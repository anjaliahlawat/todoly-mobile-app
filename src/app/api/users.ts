import { ApiResponse } from "apisauce";
import client from "./client";

type UserInfo = {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const register = (userInfo: UserInfo): Promise<ApiResponse<unknown, unknown>> =>
  client.post("/users", userInfo);

export default register;
