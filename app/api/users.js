import client './client'

const register = (userInfo) => client.post("/users", userInfo)

export default { register }