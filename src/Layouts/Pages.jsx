import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import pagesRoutes from "routes/pages"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"

const Pages = () => {
  return (
    <>
      <Header />
      <Switch>
        {pagesRoutes.map((prop) => {
          if (prop.redirect)
            return (
              <Redirect from={prop.path} to={prop.pathTo} key={prop.path} />
            )

          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          )
        })}
      </Switch>
      <Footer />
    </>
  )
}

export default Pages
