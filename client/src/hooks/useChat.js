import { useState } from "react"
import axios from 'axios'

const useChat = () => {
    const [data, setData] = useState({
        name: {
            nombre: '',
            segundoNombre: '',
            apellidoPaterno: '',
            apellidoMaterno: ''
        },
        birthday: {
            dia: 0,
            mes: '',
            anio: 0
        },
        contact: {
            correo: '',
            celular: 0,
        }
    })

    const [response, setResponse] = useState({})

    const submitData = async (Data, port) => {
        const { name, birthday, contact } = Data
        try {
        const res = await axios.post('http://localhost:4001/', {
                    nombre: name.nombre, segundoNombre: name.segundoNombre,
                    apellidoPaterno: name.apellidoPaterno, apellidoMaterno: name.apellidoMaterno,
                    fechaDeNacimiento: Object.values(birthday).join(' '),
                    email: contact.correo, telefono: contact.celular
                })
        setResponse(res.data)
        console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }


    return {
        data, setData, submitData, response
    }
}

export default useChat
