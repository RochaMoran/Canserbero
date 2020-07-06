import React from 'react'
import {NavLink} from 'react-router-dom'

const menuNav = () =>(
    <div className="menu">
        <ul className="lista">
            <li><NavLink to="/" activeClassName="active" className="lista_item"> Inicio </NavLink></li>
            <li><NavLink to="#" activeClassName="active" className="lista_item"> Musicas </NavLink></li>
            <li><NavLink to="/frases" activeClassName="active" className="lista_item"> Frases </NavLink></li>
        </ul>
    </div> 
)
export default menuNav