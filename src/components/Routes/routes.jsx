import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MenuNav from '../organisms/MenuNav'
import Main from '../pages/Main'
import sentences from '../pages/SentenceContent'
import musics from '../pages/musics'
import theme from '../pages/InformationTheme'
import Registro from '../pages/Registro'
import Footer from '../molecules/Footer'
import LogIn from '../pages/LogIn'

const Routes = () =>{
  return(
      <Router >
        <MenuNav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/frases/:id" exact component={theme}/>
          <Route path="/frases" component={sentences} /> 
          <Route path="/musics" component={musics} />
          <Route path="/registro" component={Registro} />
          <Route path="/inicioSesion" component={LogIn} />
          <Route component = { () => (<h1>Error 404</h1>)} />
        </Switch>
        <Footer />
      </Router>

  )
}

export default Routes