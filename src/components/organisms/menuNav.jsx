import React from 'react'
import {NavLink} from 'react-router-dom'

const menuNav = () =>(
    <div className="menu">
        <ul className="list">
            <li><NavLink to="/" activeClassName="active" className="list_item"> Inicio </NavLink></li>
            <li><NavLink to="/musics" activeClassName="active" className="list_item"> Musicas </NavLink></li>
            <li><NavLink to="/frases" activeClassName="active" className="list_item"> Frases </NavLink></li>
        </ul>
    </div> 
)
export default menuNav