import React from 'react';
import "../../styles/themeStyles.css"
import useMusics from '../gustomHooks/useMusics'

const InformationTheme = ({match}) =>{
 
  const musics = useMusics(match.params.id)

  return (
    <div className="theme-container">
        {
        musics ? (
            <>
            <div className="grid-item grid-item1">
                <div className="container-img__theme">
                    <img src={musics.img} alt="" className="theme-img"/>
                </div>
            </div>
            <div className="grid-item grid-item2">
                <div className="title-theme">
                    <h1 className="theme-album">Frase del album {musics.album}</h1>
                </div>
                <div className="information-theme">
                    <ul className="list-theme">
                        <li>Tema: <br></br> <span className="span">{musics.tema}</span></li>
                        <li>Artista(s): <br></br> <span className="span">{musics.artista}</span></li>
                        <li>Fecha de Lanzamiento: <br></br> <span className="span">{musics.lanzamiento}</span></li>
                    </ul>
                </div>
                <div className="sentence">
                    <h2 className="title-sentence">Frase</h2>
                    <p className="paragraph-sentence">"{musics.frase}"</p>
                </div>
                <div className="container-theme__lyrics">
                    <h3 className="title-verse">Verso</h3>
                    <p className="paragraph-lyrics"> " {musics.letra} "</p>
                </div>
                <div className="hear-theme">
                    <h4 className="title-theme__play">Reproducir Tema</h4>
                    <div key={ musics.id } className="container-reproductor">
                    <audio controls className="musics">
                        <source src={ musics.audio } type={ musics.formato } />
                    </audio>
                    </div>
                </div>
            </div>   
            </>
        ) : 
            <h1>Bye Mundo</h1>
    }
    </div>
)
}
export default InformationTheme