import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'

const GetChapterByName = (name) => {
    const [charapter, setCharapter] = useState([]);


    const getData = async () => {
        axios
            .get(url)
            .then((response) => {
                setCharapter(response.data.results);
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getData();
    }, [])
    name = name.toLocaleLowerCase()

    return charapter.filter(r => r.name.toLocaleLowerCase().includes(name))
}

export default GetChapterByName