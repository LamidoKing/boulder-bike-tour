/* eslint-disable consistent-return */
import { useEffect, useRef, useReducer } from "react"
import { Request } from "utils"

const useFetch = ({ url, body = null, method = "" }) => {
  const cache = useRef({})

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  }
  const reducer = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" }
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload }
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload }
      default:
        return state
    }
  }, initialState)

  const [state, dispatch] = reducer

  useEffect(() => {
    let cancelRequest = false
    if (!url) return
    if (method === "POST" || method === "PATCH") {
      if (!body) return
    }
    // if (!url && !method && method === ("POST" || "PATCH") && !body) return
    // if (method === ("POST" || "PATCH") && !body) return

    const fetchData = async () => {
      dispatch({ type: "FETCHING" })
      if (cache.current[url]) {
        const data = cache.current[url]
        dispatch({ type: "FETCHED", payload: data })
      } else {
        try {
          const data = await Request(url, body, method)
          cache.current[url] = data.data

          if (cancelRequest) return
          dispatch({ type: "FETCHED", payload: data.data })
        } catch (error) {
          if (cancelRequest) return
          dispatch({ type: "FETCH_ERROR", payload: error.response })
        }
      }
    }

    fetchData()

    return () => {
      cancelRequest = true
    }
  }, [url, body, method, dispatch])

  return state
}

export default useFetch
