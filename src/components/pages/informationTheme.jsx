import React from 'react';
import "../../styles/themeStyles.css"
import useMusics from '../gustomHooks/useMusics'

const InformationTheme = ({match}) =>{
 
  const musics = useMusics(match.params.id)

  return (
    <div>
        {
            musics ? (
                <>
                <div className="theme-container">
                    <img src={musics.img} alt="" className="theme-img"/>
                    <div className="title-theme">
                        <h1 className="theme-album">Frase del album {musics.album}</h1>
                    </div>
                    <div className="information-theme">
                        <ul className="list-theme">
                            <li>Tema: {musics.tema}</li>
                            <li>Artista(s): {musics.artista}</li>
                            <li>Fecha de Lanzamiento: {musics.lanzamiento}</li>
                        </ul>
                        <h2 className="title-sentence">Frase</h2>
                        <p className="sentence">"{musics.frase}"</p>
                    </div>
                    <div className="container-theme__lyrics">
                        <h3>Verso</h3>
                        <p className="paragraph-lyrics"> " {musics.letra} "</p>
                    </div>
                    <div className="listen-theme">
                        <h4 className="title-theme__play">Reproducir Tema</h4>
                        <audio src="" controls className="audio"></audio>
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