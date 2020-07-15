import React from 'react';
import useMusics from '../gustomHooks/useMusics'
import Musics from '../molecules/Musics'

const InformationTheme = ({ match }) =>{
 
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
                            <li className="li1" id="liTheme">Tema: <br></br>
                                <span className="span musica">{musics.tema}</span>
                            </li>
                            <li className="li2">Artista(s): <br></br> 
                                <span className="span artista">{musics.artista}</span>
                            </li>
                            <li className="li3">Fecha de Lanzamiento: <br></br>
                                <span className="span lanzamiento">{musics.lanzamiento}</span>
                            </li>
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
                        <Musics id={musics.id} audio={musics.audio} formato={musics.formato}/>
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