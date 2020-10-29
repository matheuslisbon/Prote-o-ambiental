import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home/Home'

import OrphanageAnimal from './pages/OrphanageAnimal/OrphanageAnimal'

import Sobre from './pages/Sobre/Sobre'

import Participar from './pages/Participar/Participar'

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/animais' component={OrphanageAnimal} />
      <Route path='/participar' component={Participar} />
    </Switch>
  )

}