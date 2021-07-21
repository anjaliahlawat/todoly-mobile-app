import { create, ApisauceInstance, ApiResponse } from "apisauce";
import * as caches from "../utility/cache";
import { getToken } from "../auth/storage";

const apiClient: ApisauceInstance = create({
  baseURL: "https://todoly-app-service.herokuapp.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const { get } = apiClient;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
apiClient.get = async (url, params, axiosConfig): Promise<ApiResponse<any>> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    caches.store(url, response.data);
  }
  return response;
};

export default apiClient;
