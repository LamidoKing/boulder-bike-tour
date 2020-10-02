import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  Box,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from "@material-ui/core"
import Input from "components/CustomTextField/CustomTextField"
import { DirectionsBike, Visibility, VisibilityOff } from "@material-ui/icons"
import { Urls } from "utils"
import Loading from "components/Loading/Loading"
import { useFetch } from "hooks"
import loginStyles from "styles/adminPage/login/login"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Bulder Biker Tour
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const SignIn = () => {
  const classes = loginStyles()
  const history = useHistory()
  const [body, setBody] = useState()
  const { status, error } = useFetch({
    url: `${Urls.bbtApiUrl}/admins/login`,
    body,
    method: "POST",
  })

  useEffect(() => {
    if (status === "fetched") {
      history.push("/admin")
    }
  }, [status, history])

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleClick = () => {
    if (values.email && values.password) {
      setBody({ admin: { email: values.email, password: values.password } })
    }
  }

  return (
    <>
      <Loading status={status} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsBike />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Input
              value={values.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange("email")}
            />
            <Input
              value={values.password}
              type={values.showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Sign In
            </Button>
            {error && (
              <Box mt={8}>
                <Typography variant="h6" color="textSecondary" align="center">
                  {error.statusText}
                </Typography>
              </Box>
            )}
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  )
}

export default SignIn
