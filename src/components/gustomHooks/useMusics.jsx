import {useState, useEffect} from 'react'
import axios from 'axios'

const useMusics = id =>{
    const [musics, setMusics] = useState({})
    const url = `https://my-json-server.typicode.com/RochaMoran/musics/get/${id}`

    useEffect( () => {
        axios.get(url)
            .then(resp => setMusics(resp.data))
            .catch(error => console.log(error))
    }, [setMusics])

    return musics
}
export default useMusics