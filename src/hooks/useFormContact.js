import { useState } from "react"


const useFormContact = (data, handleData) => {
    const [contact, setContact] = useState({
        correo: '',
        celular: 0,
    })

    const [dialog, setDialog] = useState([])

    const handleContact = (event) => {
        if (event.target.name === 'celular') {
            setContact({
                ...contact,
                [event.target.name]: parseInt(event.target.value)
            })    
        }
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setDialog(Object.values(contact))
        handleData({
            ...data,
            contact
        })
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setDialog(Object.values(contact))
    //     setData({
    //         ...data,
    //         contact
    //     })
    // }

    return {
        handleSubmit, handleContact, dialog,
        contact
    }
}

export default useFormContact
