import React from 'react'
import {Link} from 'react-router-dom'

const labelAnimation = (e, lblName) => {
    const nameLbl = document.getElementById(lblName)
    let active = false
    if(Cambio(e).trim().length == 0 && active == false)
    nameLbl.classList.add('animation')
    active = true
}

const Cambio = (e) =>{
    return e.target.value
}

const QuitarAnimation = (e, lblName) => {
    const nameLbl = document.getElementById(lblName)

    if(Cambio(e).trim().length == 0)
    nameLbl.classList.remove('animation')
}

const LogIn = () =>{

    return(
        <div className="checkIn-container">
            <h1 className="title-logIn">Iniciar Sesión</h1>
            <form action="/home" name="form" className="form">
                <label htmlFor="" className="lbl lbl-email" id="lblEmail">Correo Electronico</label>
                <input type="email" name="emailInput" id="" className="inputTxt input-email"
                    onFocus={ e => labelAnimation(e, "lblEmail")}
                    onBlur={e => QuitarAnimation(e, "lblEmail")}
                />
                <label htmlFor="" className="lbl lbl-password" id="lblPassword">Contraseña</label>
                <input type="password" name="passwordInput" id="" className="inputTxt input-password"
                    onFocus={ e => labelAnimation(e, "lblPassword")}
                    onBlur={e => QuitarAnimation(e, "lblPassword")}
                />
                <input type="submit" value="Registrarse" className="input-submit"/>
            </form>
            <div className="logIn-section">
                <p className="paragraph-logIn">¿Olvidaste tu Contraseña?</p>
                <Link to="#">Recuperar Contraseña</Link>
                <p className="paragraph-logIn">¿No tienes una cuenta?</p>
                <Link to="/registro">¡Registrate Ahora!</Link>
            </div>
        </div>
    )
}

export default LogIn