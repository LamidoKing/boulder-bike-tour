/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

const PrivateRoute = ({ component: Component, ...rest }) => <Route {...rest} />

PrivateRoute.propTypes = propTypes

export default PrivateRoute
