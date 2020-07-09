import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useMusics = id =>{

    const [musics, setMusics] = useState({})

    axios.get("https://my-json-server.typicode.com/RochaMoran/musics/get/"+id)
        .then(resp => setMusics(resp.data))

    return musics
}
export default useMusics