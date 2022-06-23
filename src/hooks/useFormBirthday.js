import { useState } from "react"

const useFormBirthday = (data, handleData) => {

    const currentYear = new Date().getFullYear()

    const [birthday, setBirthday] = useState({
        dia: 0,
        mes: '',
        anio: 0,
    })

    const [dialog, setDialog] = useState([])

    const handleBirthday = (event) => {
        if (event.target.name === 'dia' || event.target.name === 'anio') {
            setBirthday({
                ...birthday,
                [event.target.name]: parseInt(event.target.value)
            })
            return   
        }
        setBirthday({
            ...birthday,
            [event.target.name]: event.target.value
        })
        return
    }

    const enumMes = (mes) => {
        switch(mes.toLowerCase()) {
            case 'enero':
                return true
            case 'febrero':
                return true
            case 'marzo':
                return true
            case 'abril':
                return true
            case 'mayo':
                return true
            case 'junio':
                return true
            case 'julio':
                return true
            case 'agosto':
                return true
            case 'septiembre':
                return true
            case 'octubre':
                return true
            case 'noviembre':
                return true
            case 'diciembre':
                return true
            default:
                return false
        }
    }

    // console.log(Object.values(birthday).some(campo => !campo))

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
        handleSubmit, enumMes, currentYear
    }
}

export default useFormBirthday
