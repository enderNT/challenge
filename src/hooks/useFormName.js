import { useEffect, useState } from "react"

const useFormName = (data, handleData) => {

    const [name, setName] = useState({
        nombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    })

    const [dialog, setDialog] = useState([])

    const [error, setError] = useState(false)

    const [errors, setErrors] = useState([])

    const validateForm = {
        NombreCompleto (CompleteName) {
            return /^[a-zA-Z]+$/.test(CompleteName)    
        },
    }
    
    useEffect(() => {
        Object.values(name).forEach((e, i) => {
            if (validateForm.NombreCompleto(e)) {
                errors[i] = true
                return
            }
            errors[i] = false
            return
        })
    }, [name])

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
        handleSubmit, error, errors
    }
}

export default useFormName
