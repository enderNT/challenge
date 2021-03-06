import { useState } from "react"

const useFormContact = (data, handleData) => {
    const [contact, setContact] = useState({
        correo: '',
        celular: 0,
    })

    const handleContact = (event) => {
        if (event.target.name === 'celular') {
            setContact({
                ...contact,
                [event.target.name]: parseInt(event.target.value)
            })
            return 
        }
        setContact({
            ...contact,
            [event.target.name]: event.target.value.trim()
        })
        return
    }

    const validateEmail = (email) => {
        return email
            .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
    }

    const validatePhone = (phone) => {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleData({
            ...data,
            contact
        })
    }

    return {
        handleSubmit, handleContact,
        contact, validateEmail, validatePhone
    }
}

export default useFormContact
