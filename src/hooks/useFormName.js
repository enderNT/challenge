import { useEffect, useState } from "react"

const useFormName = (data, handleData) => {

    const [name, setName] = useState({
        nombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    })

    const [dialog, setDialog] = useState([])


    const handleName = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setDialog(Object.values(name))
        handleData({
            ...data,
            name
        })
    }


    return {
        name, handleName, dialog,
        handleSubmit
    }
}

export default useFormName
