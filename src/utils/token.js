const setToken = (idToken) => {
  localStorage.setItem("TOKEN", idToken)
}

const getToken = () => {
  return localStorage.getItem("TOKEN")
}

const loggedIn = () => {
  const token = getToken()
  return !!token
}

const logout = () => {
  localStorage.removeItem("TOKEN")
}

export { loggedIn, setToken, getToken, logout }
