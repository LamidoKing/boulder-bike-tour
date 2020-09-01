import axios from "axios"
import * as AuthToken from "./token"

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
})

instance.defaults.headers.common.Authorization = AuthToken.loggedIn()
  ? `Bearer ${AuthToken.getToken()}`
  : null

const fetch = async (url = "", data = null, method = "") => {
  if (method === "POST") {
    const response = await instance({
      method: "POST",
      url,
      data,
    })

    return response
  }

  if (method === "GET") {
    const response = await instance({
      method: "GET",
      url,
    })

    return response
  }

  if (method === "PATCH") {
    const response = await instance({
      method: "PATCH",
      url,
      data,
    })

    return response
  }

  if (method === "DELETE") {
    const response = await instance({
      method: "DELETE",
      url,
    })

    return response
  }
  return null
}

export default fetch
