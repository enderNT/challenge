import React from 'react'
import useFormContact from '../../hooks/useFormContact'
import '../../styles/formContact.css'

const FormContact = ({ data, setData }) => {

    const {
        handleSubmit, handleContact,
        contact, validateEmail, validatePhone
    } = useFormContact(data, setData)

    return (
        <div className='formContact'>
            <div>
                <img src="www.google.com" alt="profile-pic" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Datos de contacto</h3>
                <input
                    name='correo'
                    type="text" placeholder='Correo electronico'
                    onChange={handleContact} />
                <input
                    name='celular'
                    type="number" placeholder='Telefono celular'
                    onChange={handleContact} />
                {
                    Object.values(contact).some(campo => !campo)
                    || !validateEmail(contact.correo)
                    || !validatePhone(contact.celular)
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
                Object.values(data.contact).every(campo => campo) && (
                    <div className='dataContact'>
                        <p>Correo electrónico: {contact.correo}</p>
                        <p>Teléfono celular: {contact.celular}</p>
                    </div>
                )
            }
        </div>
    )
}

export default FormContact
