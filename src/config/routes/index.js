import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '../../pages/Home'
import IronGiphy from '../../pages/Iron-giphy'
import SerachGiphy from '../../pages/Search-giphy'

const Routers = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/search-giphy">
            <SerachGiphy />
          </Route>
          <Route path="/iron-giphy">
            <IronGiphy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Routers