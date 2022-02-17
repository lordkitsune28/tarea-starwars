import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import getChapterByName from '../selectors/getChapterByName'
import querystring from 'query-string'
import CharapterCard from './CharapterCard'
const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { q = "" } = querystring.parse(location.search)


    const [values, handleInputChange, resetForm] = useForm({
        searchText: q
    })

    const { searchText } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }
    const chapterFilteres = getChapterByName(searchText)
    console.log(chapterFilteres);


    return (
        <div>
            <h1>Buscar</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Formulario de Busqueda </h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Busca tu Personaje"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
                <div className="col-7">
                    <h4> Resultado de la Busqueda </h4>
                    <hr />
                    {
                        chapterFilteres.map(charap => (
                            <CharapterCard key={charap.id}
                                {...charap} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen