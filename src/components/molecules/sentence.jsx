import React from 'react'
import { Link } from 'react-router-dom'

const sentence = ({id, album, img, frase}) => (
    <>
    <div className="frases">
        <h1 className="title-frases">{album}</h1>
        <div className="frases-card">
            <Link className="link-frases" alt="Pulsa para ver mas" to={`/frases/${id}`}>
                    <img className="img-frases" src={img} alt=""
                    />
            </Link>
            <p className="paragraph-frases">"{frase}"</p>
        </div>
    </div>
   </>
)
export default sentence