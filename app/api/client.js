import {create} from 'apisauce'
import authStorage from '../auth/storage'

const apiClient = create({
  baseURL: 'http://localhost:3000/api'
})

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if(!authToken) return 
  request.headers['x-auth-token'] = authToken
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig)

  if(response.ok){
    caches.store(url, response.data)
    return response
  }
}

export default apiClient

export default apiClient
