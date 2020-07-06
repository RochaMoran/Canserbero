import React, {Component} from 'react'
import axios from 'axios'
import Cards from '../molecules/sentence'

class sentenceContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            musics:[]
        }
    }
    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/RochaMoran/musics/get')
            .then(resp => this.setState({musics:resp.data}))
    }
    render(){
        const { musics } = this.state
        return(
            <div className="frases-container">
                {musics.map(m => <Cards key={m.id} id={m.id} album={m.album} img={m.img} frase={m.frase}/>)}
            </div>
        )
    }
}
export default sentenceContent