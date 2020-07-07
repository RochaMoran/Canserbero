import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MenuNav from '../organisms/menuNav'
import Main from '../pages/main'
import sentences from '../pages/sentenceContent'
import theme from '../pages/theme'
import musics from '../pages/musics'

const routes = () =>(
  <Router >
    <MenuNav />
    <Switch>
       <Route path="/" exact component={Main} />
       <Route path="/frases/:id" exact component={theme}/>
       <Route path="/frases" component={sentences} /> 
       <Route path="/musics" component={musics} />
       <Route component = { () => (<h1>Error 404</h1>)} />
    </Switch>
  </Router>
)
export default routes