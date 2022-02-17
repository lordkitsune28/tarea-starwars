import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url';
const CharapterCard = ({ id, name, image }) => {
    const [charapter, setCharapter] = useState([])

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


    return (

        <div className="my-5 m-5 d-inline-block">
            <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt={name} id={id} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                        </div>

                    </div>
                </div>
            </div>



        </div>

    )
}

export default CharapterCard