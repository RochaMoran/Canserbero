import React from 'react'
import { Link } from 'react-router-dom'

const sentence = ({id, album, img, frase}) => (
    <>
    <div className="sentences">
        <h1 className="title-sentences">{album}</h1>
        <div className="sentences-card">
            <Link className="link-sentences" alt="Pulsa para ver mas" to={`/frases/${id}`}>
                <img className="img-sentences" src={img} alt=""
                />
            </Link>
            <div>
                <p className="paragraph-sentences">"{frase}"</p>
            </div>
        </div>
    </div>
   </>
)
export default sentence