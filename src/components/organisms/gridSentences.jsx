import React from 'react'
import Cards from '../molecules/sentence'
import WithSentence from '../HOC/withSentence.js'

const gridSentences = ({musics}) => {
    return(
        <div className="sentences-container">
            {
                 musics.map(m => <Cards key={m.id} id={m.id} album={m.album} img={m.img} frase={m.frase} tema={m.tema}/>)
            }
        </div>
    )
}
export default WithSentence("musics", gridSentences)