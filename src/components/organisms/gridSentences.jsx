import React from 'react'
import Cards from '../molecules/Sentence'
import WithSentence from '../HOC/withSentence.js'

const GridSentences = ({musics}) => {
    return(
        <>
        <div className="sentences-container" id="containerSentences">
            {
                 musics.map(m => <Cards 
                                        key={m.id}
                                        id={m.id}
                                        album={m.album}
                                        img={m.img}
                                        frase={m.frase}
                                        tema={m.tema}
                                    />)
            }
        </div>
        </>
    )
}
export default WithSentence("musics", GridSentences)