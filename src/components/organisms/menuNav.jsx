import React from 'react'
import {NavLink} from 'react-router-dom'
import ModeDark from '../modeDark.js'

const MenuNav = () =>(
    <div className="menu" id="menu"> 
        <ul className="list" >
            <li><NavLink to="/" activeClassName="active" className="list_item item1"> Inicio </NavLink></li>
            <li><NavLink to="/musics" activeClassName="active" className="list_item item2"> Musicas </NavLink></li>
            <li><NavLink to="/frases" activeClassName="active" className="list_item item3"> Frases </NavLink></li>
            <li><NavLink to="/registro" activeClassName="active" className="list_item item4"> Registrarse </NavLink></li>
        </ul>
        <div className="mode-color" onClick={ (e) => ModeDark(e) }>
            <div className="item-color__mode" id="itemColor">

            </div>
        </div>
    </div> 
)

export default MenuNav