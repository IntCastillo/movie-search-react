import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

import "bulma/css/bulma.css"
import "./App.css"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/detail/:movieId`} component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )

  }
}

export default App;
