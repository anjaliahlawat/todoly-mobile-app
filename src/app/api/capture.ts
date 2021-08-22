import { ApiResponse } from "apisauce";
import client from "./client";

type CaptureTask = {
  user: UserObj;
  tasks: Array<Task>;
};

const captureTask = (
  capturedTask: CaptureTask
): Promise<ApiResponse<unknown, unknown>> =>
  client.post("/capture-task/add", capturedTask);

const getCapturedList = (
  user: UserObj
): Promise<ApiResponse<unknown, unknown>> =>
  client.post("/capture-task/list", user);

export default { captureTask, getCapturedList };
