import React, {Component} from 'react'
import axios from 'axios'
import GridSentences from '../organisms/gridSentences'

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
            <GridSentences musics={musics}/>
        )
    }
}
export default sentenceContent