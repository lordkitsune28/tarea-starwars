import React, { useState } from 'react'

const useForm = (inicialState = {}) => {
    const [values, setValues] = useState(inicialState);

    const handleInputChange = ({ target }) =>
        setValues({
            ...values,
            [target.name]: target.value
        })

    const resetForm = () => {
        setValues(inicialState)

    }

    return [values, handleInputChange, resetForm]


}
export default useForm