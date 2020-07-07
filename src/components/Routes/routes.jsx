import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MenuNav from '../organisms/menuNav'
import Main from '../pages/main'
import sentences from '../pages/sentenceContent'
import theme from '../pages/theme'

const routes = () =>(
  <Router >
    <MenuNav />
    <Switch>
       <Route path="/" exact component={Main} />
       <Route path="/frases/:id" exact component={theme}/>
       <Route path="/frases" component={sentences} /> 
    </Switch>
  </Router>
)
export default routes