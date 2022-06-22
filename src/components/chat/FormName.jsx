import React from 'react'

const FormName = ({ data, setData }) => {

    const [name, setName] = useState({
        nombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    })

    const handleName = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setData({
            ...data,
            name
        })
    }



    return (
        <div>
            <div>
                <img src="www.google.com" alt="profile-pic" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3>¿Cual es tu nombre?</h3>
                <input
                    name='nombre'
                    type="text" placeholder='Nombre'
                    onChange={handleName} />
                <input
                    name='segundoNombre'
                    type="text" placeholder='Segundo nombre'
                    onChange={handleName} />
                <input
                    name='apellidoPaterno'
                    type="text" placeholder='Apellido paterno'
                    onChange={handleName} />
                <input
                    name='apellidoMaterno'
                    type="text" placeholder='Apellido materno'
                    onChange={handleName} />
                <input type="submit" />
            </form>
            <p>{`${name.nombre (name.segundoNombre && name.segundoNombre) (name.apellidoPaterno)}`}</p>
        </div>
    )
}

export default FormName
