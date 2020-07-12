import React from 'react'
import { Link } from 'react-router-dom'

const Sentence = ({id, album, img, frase, tema}) => (
    <>
    <div className="sentences" id="sentences">
        <div className="sentences-img">
            <img className="img-sentences" src={img} alt=""/>
        </div>
        <Link className="link-sentences" alt="Pulsa para ver mas" to={`/frases/${id}`}>
            <div className="information-sentence" id="informationSentence">
                <h1 className="title-sentences">{album}</h1>
                <p className="paragraph-sentences">"{frase}"</p>
            </div>
        </Link>
        <div className="container-paragraph__theme">
            <p className="paragraph-theme">Frase del tema "{tema}"</p>
        </div>
    </div>
   </>
)
export default Sentence