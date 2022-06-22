import React from 'react'
import useFormName from '../../hooks/useFormName'

const FormName = ({ data, setData }) => {

    const {
        dialog, handleName, handleSubmit,
        name
    } = useFormName(data, setData)


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
                {
                    Object.values(name).some(campo => !campo)
                    ? (
                        <input
                            disabled
                            type="submit" value='Continuar'
                        />
                    ) : (
                        <input
                            type="submit" value='Continuar'
                        />
                    )
                }
            </form>
            {
                Object.values(data.name).every(campo => campo) && (
                    <div>
                        <p>{ dialog.join(' ') }</p>
                    </div>
                )
            }
        </div>
    )
}

export default FormName
