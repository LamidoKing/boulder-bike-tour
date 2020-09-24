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
    const response = await axios({
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

// import * as AuthToken from "./token"

// const postoptions = (type) => {
//   let headers = {
//     Accept: "application/json",
//   }

//   if (type === "data") {
//     headers = {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     }
//   }

//   if (AuthToken.loggedIn()) {
//     headers.Authorization = `Bearer ${AuthToken.getToken()}`
//   }

//   const options = {
//     mode: "cors",
//     cache: "default",
//     credentials: "same-origin",
//     headers,
//     redirect: "follow",
//     referrer: "client",
//   }

//   return options
// }

// const post = async (url = "", data) => {
//   const options = postoptions("data")

//   const response = await fetch(url, {
//     method: "POST",
//     ...options,
//     body: JSON.stringify(data),
//   })

//   return response.json()
// }

// const postFile = async (url = "", data) => {
//   const options = postoptions("file")

//   const response = await fetch(url, {
//     method: "POST",
//     ...options,
//     body: data,
//   })

//   return response.json()
// }

// const get = async (url = "") => {
//   const options = postoptions("data")

//   const response = await fetch(url)

//   return response.json()
// }

// const patch = async (url = "", data) => {
//   const options = postoptions("data")

//   const response = await fetch(url, {
//     method: "PATCH",
//     ...options,
//     body: JSON.stringify(data),
//   })

//   return response.json()
// }

// const del = async (url = "") => {
//   const options = postoptions("data")

//   const response = await fetch(url, {
//     method: "DELETE",
//     ...options,
//   })

//   return response.json()
// }

// export { post, postFile, get, patch, del }
