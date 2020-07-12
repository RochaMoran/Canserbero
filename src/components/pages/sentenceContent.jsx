import React, {Component} from 'react'
import axios from 'axios'
import GridSentences from '../organisms/GridSentences'

class SentenceContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            musics:[]
        }
    }

    componentDidMount(){
        const url = 'https://my-json-server.typicode.com/RochaMoran/musics/get'

        axios.get(url)
            .then(resp => this.setState({musics:resp.data}))
    }
    
    render(){

        const { musics } = this.state

        return(
            <GridSentences musics={musics}/>
        )
    }
}
export default SentenceContent