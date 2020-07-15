import React from 'react'
import {Link} from 'react-router-dom'

const labelAnimation = (e, lblName) => {
    const nameLbl = document.getElementById(lblName)

    if(Cambio(e).trim().length === 0)
        nameLbl.classList.add('animation')

}

const Cambio = (e) =>{
    return e.target.value
}

const QuitarAnimation = (e, lblName) => {
    const nameLbl = document.getElementById(lblName)

    if(Cambio(e).trim().length === 0)
        nameLbl.classList.remove('animation')

}

const Registro = () =>{

    return(
        <div className="checkIn-container">
            <h1 className="title-logIn">Registrarse</h1>
            <form action="/home" name="form" className="form">
                <label htmlFor="" className="lbl lbl-name" id="">Nombre de Usuario</label>
                <input type="text" name="nameInput" id="inputNameId" className="inputTxt input-name"
                    onFocus={e => labelAnimation(e, "lblName")}
                    onBlur={e => QuitarAnimation(e, "lblName")}
                />
                <label htmlFor="" className="lbl lbl-password" id="lblPassword">Contraseña</label>
                <input type="password" name="passwordInput" id="inputPasswordId" className="inputTxt input-password"
                    onFocus={ e => labelAnimation(e, "lblPassword")}
                    onBlur={e => QuitarAnimation(e, "lblPassword")}
                />
                <label htmlFor="" className="lbl lbl-email" id="lblEmail">Correo Electronico</label>
                <input type="email" name="emailInput" id="" className="inputTxt input-email"
                    onFocus={ e => labelAnimation(e, "lblEmail")}
                    onBlur={e => QuitarAnimation(e, "lblEmail")}
                />
                <input type="submit" value="Registrarse" className="input-submit"/>
            </form>
            <div className="logIn-section">
                <p className="paragraph-logIn">¿Ya tienes una cuenta?</p>
                <Link to="/inicioSesion">¡Iniciar Sesión!</Link>
            </div>
        </div>
    )
}

export default Registro