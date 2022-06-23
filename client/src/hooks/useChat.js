import { useEffect, useState } from "react"

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
        const res = await fetch(`https://localhost:${port || 4001}`,
        {
            method: 'POST',
            body: JSON.stringify({
                nombre: name.nombre, segundoNombre: name.segundoNombre,
                apellidoPaterno: name.apellidoPaterno, apellidoMaterno: name.apellidoMaterno,
                fechaDeNacimiento: Object.values(birthday).join(' '),
                email: contact.correo, telefono: contact.celular
            }),
            headers: {
                'Content-type': 'aplicattion/json'
            }
        })
        const result = await res.json()
        setResponse(result)
    }


    return {
        data, setData, submitData, response
    }
}

export default useChat
