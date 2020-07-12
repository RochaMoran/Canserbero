import React from 'react'
import PrimerTrago from '../../Sounds/id=1.mp3'
import PensandoEnTi from '../../Sounds/id=2.mp3'
import VidaPeliculaAccion from '../../Sounds/id=3, 4, 7, 10.mp3'
import CuandoVayasConmigo from '../../Sounds/id=5, 9.mp3'
import StupidLoveStory from '../../Sounds/id=6.mp3'
import DeMiMuerte from '../../Sounds/id=8.mp3'
import Na from '../../Sounds/id=11.mp3'
import Jeremias from '../../Sounds/id=12.mp3'

const musicas = [PrimerTrago, PensandoEnTi, VidaPeliculaAccion, CuandoVayasConmigo, StupidLoveStory, DeMiMuerte, Na, Jeremias]

const Musics = ({ id, audio, formato }) => {
    return(
        <>
            <h4 className="title-theme__play">Reproducir Tema</h4>
            <div key={ id } className="container-reproductor">
                { 
                    musicas.find(music => music === audio) ? 
                        <audio 
                            controls
                            className="musics"
                            src={audio}
                            type={formato}
                            key={id}>
                        </audio>
                        :
                        <h1>Cargando Archivo</h1>
                }
            </div>
        </>
    )
}
export default Musics