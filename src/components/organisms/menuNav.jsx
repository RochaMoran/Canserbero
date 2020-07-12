import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuNav = () =>(
    <div className="menu">
        <ul className="list">
            <li><NavLink to="/" activeClassName="active" className="list_item"> Inicio </NavLink></li>
            <li><NavLink to="/musics" activeClassName="active" className="list_item"> Musicas </NavLink></li>
            <li><NavLink to="/frases" activeClassName="active" className="list_item"> Frases </NavLink></li>
            <li><NavLink to="/registro" activeClassName="active" className="list_item"> Registrarse </NavLink></li>
        </ul>
    </div> 
)
export default MenuNav