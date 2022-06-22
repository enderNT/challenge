import { useState } from "react"

const useFormBirthday = (data, handleData) => {

    const [birthday, setBirthday] = useState({
        dia: 0,
        mes: '',
        anio: 0,
    })

    const [dialog, setDialog] = useState([])

    const handleBirthday = (event) => {
        if (event.target.name === 'dia' || event.target.name === 'mes') {
            setBirthday({
                ...birthday,
                [event.target.name]: parseInt(event.target.value)
            })    
        }
        setBirthday({
            ...birthday,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setDialog(Object.values(birthday))
        handleData({
            ...data,
            birthday
        })
    }

    return {
        birthday, dialog, handleBirthday,
        handleSubmit
    }
}

export default useFormBirthday
