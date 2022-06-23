import React from 'react'
import useFormName from '../../hooks/useFormName'
import '../../styles/formName.css'

const FormName = ({ data, setData }) => {

    const {
        dialog, handleName, handleSubmit,
        name
    } = useFormName(data, setData)


    return (
        <div className='formName'>
            <div className='profile-picContainer'>
                <img
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="profile-pic"
                />
            </div>

            <form onSubmit={handleSubmit}>
                <h3>¿Cuál es tu nombre?</h3>
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
                    <div className='dataFullName'>
                        <p>{ dialog.join(' ') }</p>
                    </div>
                )
            }
        </div>
    )
}
// En cuanto se llene el formulario debe desaparecer el boton
export default FormName
