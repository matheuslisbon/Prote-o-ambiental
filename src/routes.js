import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home/Home'

import Sobre from './pages/Sobre/Sobre'

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sobre' component={Sobre} />
    </Switch>
  )

}