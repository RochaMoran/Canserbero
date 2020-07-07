import React from 'react'
import '../../styles/themeStyles.css'

const datos = [
    {
        id: 1,
        album: 'Muerte',
        img: 'https://i.pinimg.com/originals/01/a2/af/01a2af5aec30b18bf105a5a6f505cb89.jpg',
        frase: 'Y no se muere quien se va, solo se muere el que se olvida.',
        tema: 'El primer Trago',
        artista: 'Canserbero',
        lanzamiento: 2012,
        letra: 'El primer trago para el suelo y una mirada para el cielo  Un año más sin ti físicamente, pero en mi mente siempre, no sabes cuánto te quiero Y no se muere quien se va, sólo se muere el que se olvida Al fin y al cabo la muerte va tan segura de ganar...'
    },
    {
        id: 2,
        album: 'Vida',
        img: 'https://i.pinimg.com/originals/2a/1b/28/2a1b28f532226ef94869cad828b2120e.jpg',
        frase: 'El tiempo sana heridas de manera obvia.. aunque ninguna herida sana sin dejar cicatriz.',
        tema: 'Pensando en ti',
        artista: 'Canserbero',
        lanzamiento: 2010,
        letra: 'Y aquí estaré, con tus fotos en mi memoria Quizás con una nueva novia, pensando en ti El tiempo sana heridas de manera obvia Aunque ninguna herida sana sin dejar cicatriz'
    },
    {
        id: 3,
        album: 'Desconocido',
        img: 'https://www.qhubocali.com/wp-content/uploads/2020/01/067089093ec9d377b95e753ccd609d19.jpg',
        frase: 'Conocemos a las personas cuando por últimas veces las vemos',
        tema: 'De la vida como película y su tragedia, comedia y ficción',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'Es triste pero cierto conocemos a las personas cuando por últimas veces las vemos Unas porque hacen falta cuando se nos fueron Y otras que se alejan, cuando en alguna desgracia caemos'
    },
    {
        id: 4,
        album: 'Desconocido',
        img: 'https://pm1.narvii.com/6489/625f99759fb4d432568d647ee58b4397827f17b9_00.jpg',
        frase: 'Admito que aveces me canso de luchar y quisiera dormir para jamas despertar.',
        tema: 'De la vida como película y su tragedia, comedia y ficción',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'Admito que a veces me cansa lucharY quisiera dormir para jamás despertar Pero recuerdo esos momentos que varias veces me dieron aliento Y que me hacen agradecer cuando despierto'
    },
    {
        id: 5,
        album: 'Can + Zoo',
        img: 'https://steemitimages.com/DQmYDAVykmfwkruwhNmb4i3QPhCQCAVwbPSbNjavJSJgx86/130755.jpg',
        frase: 'Confiar en quien amas no se si es virtud o defecto, mas aun sabiendo que nada es eterno ni perfecto, por eso somos, analfabetas de pensamientos, para no leer fragmentos que matarían sentimientos.',
        tema: 'Cuando Vayas Conmigo',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'Conciencia no razona con hormonas y Corazón y cuerpo no hablan en el mismo idioma, Confiar en quien amas no se si es virtud o defecto Mas aun sabiendo que nada es eterno ni perfecto Por eso somos analfabetas de pensamientos, Para no leer fragmentos que Matarían sentimientos'
    },
    {
        id: 6,
        album: 'Apa y Can',
        img: 'https://pm1.narvii.com/6811/c52dd73d502abecaf3a2281f7b50b7323f1f390fv2_hq.jpg',
        frase: 'Al fin y al cabo ser feliz es lo que debo exigirte y si ya eres feliz sin mi.. no puedo contradecirte.',
        tema: 'Stupid Love Store',
        artista: 'Canserbero, Apache',
        lanzamiento: '2013',
        letra: 'Siquiera pensar en molestar lo que construiste Después de que te fuiste sabiamente Obviamente solo vi después de herirte torpemente Al fin y al cabo ser feliz es lo que debo exigirte Y si ya eres feliz sin mí, no puedo contradecirte'
    },
    {
        id: 7,
        album: 'Desconocido',
        img: 'https://img.europapress.es/fotoweb/fotonoticia_20150406224326_1024.jpg',
        frase: 'A mi nunca me podrán enviar para zonas donde los hipócritas deban pagar su tormento.',
        tema: 'De la vida como película y su tragedia, comedia y ficción',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'A veces bien y a veces mal Pero si de algo estoy seguro es que nunca a mi me podrán enviar Pa las zonas donde los hipócritas deban pagar su tormento Porque digo la verdad hasta cuando miento Y si miento es porque ignoro Por hablar sin pensar Pero nunca por querer cuadrar con todo Porque no soy monedita de oro Me enseñaron a ser sincero para que me crean cuando salga el lobo'
    },
    {
        id: 8,
        album: 'Muerte',
        img: 'https://pbs.twimg.com/profile_images/704740969858666497/LiDAw96m_400x400.jpg',
        frase: 'Debes amar sin miedo a ser traicionado, aunque sin darle prioridad a quien prioridad No te ha dado.. claro..',
        tema: 'De Mi Muerte',
        artista: 'Canserbero',
        lanzamiento: '2012',
        letra: 'Debes amar sin miedo a ser traicionado,Aunque sin darle prioridad al que prioridad no te ha dado, claro.'
    }
    ,
    {
        id: 9,
        album: 'Can + Zoo',
        img: 'https://i.pinimg.com/originals/f2/bb/4d/f2bb4da330dc5ab923c657804f3c2b98.jpg',
        frase: 'Nunca digas siempre por siempre ni para siempre, si siempre que me doy vuelta dejas de ser transparente.',
        tema: 'Cuando Vayas Conmigo',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'Nunca digas siempre por siempre ni para siempre Si siempre que me doy vuelta dejas de ser transparente Lamentablemente Dinero asesino a te quiero Y el amor no es ciego cuando el que ama esta ciego de celos'
    },
    {
        id: 10,
        album: 'Desconocido',
        img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/6/a/e/f/6aefabc214e0b4bb41054e19363d608e.jpg',
        frase: 'Gracias por enseñarme lo que debo mejorar y saber que no a todo el mundo se debe pedir perdón.',
        tema: 'De la vida como película y su tragedia, comedia y ficción',
        artista: 'Canserbero',
        lanzamiento: '',
        letra: 'La vida es un barco, un tren, un avión que no se detiene La vida no es una estación Gracias por enseñarme lo que debo mejorar Y saber que no a todo el mundo se debe pedir perdón'
    },
    {
        id: 11,
        album: '',
        img: 'https://i.pinimg.com/originals/c9/21/6d/c9216d519af142b5eb29ec106bf5e6d6.jpg',
        frase: 'Por ahora a mi el tiempo dirá quien son hermanos y si no hay tranquilazo, me iré como vine al mundo, Solitario como perro aullando a lo profundo.',
        tema: 'Na',
        artista: 'Canserbero',
        lanzamiento: 'May 2011',
        letra: 'Me siento ya como un clavel en el pantano Por ahora a mí, el tiempo dirá quién son hermanos Y si no hay, tranquilazo me iré como vine al mundo Solitario, ¡Como un perro aullando a lo profundo!'
    },
    {
        id: 12,
        album: 'Muerte',
        img: 'https://i.pinimg.com/236x/0c/5b/c8/0c5bc867862d6040fa1a80ce6eb0a7aa.jpg',
        frase: 'Solo hay una cosa de ti que admiro, y es que como siendo tan dos caras puedes todavía dormir tranquilo.',
        tema: 'Jeremías 17:5',
        artista: 'Canserbero',
        lanzamiento: 2012,
        letra: ' Solo hay una cosa en ti que admiro Y es que como siendo tan dos caras puedes todavía dormir tranquilo Por mi parte bien, yo sonrío Pero por mi madre que no es bueno tener al Canserbero de enemigo El barrio no pasó en vano Como Willie Colón en el profundo de mi corazón soy malo'
    }
]

const theme = ({ match }) => {

    const validate = datos.find(d => d.id === parseInt(match.params.id))
    return (
        <div>
            {
                validate ? (
                    <>
                    <div className="theme-container">
                        <img src={validate.img} alt="" className="theme-img"/>
                        <div className="title-theme">
                            <h1 className="theme-album">Frase del album {validate.album}</h1>
                        </div>
                        <div className="information-theme">
                            <ul className="list-theme">
                                <li>Tema: {validate.tema}</li>
                                <li>Artista(s): {validate.artista}</li>
                                <li>Fecha de Lanzamiento: {validate.lanzamiento}</li>
                            </ul>
                            <h2 className="title-sentence">Frase</h2>
                            <p className="sentence">"{validate.frase}"</p>
                        </div>
                        <div className="container-theme__lyrics">
                            <h3>Verso</h3>
                            <p className="paragraph-lyrics"> " {validate.letra} "</p>
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
export default theme