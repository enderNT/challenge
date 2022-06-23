import React from 'react'
import useFormBirthday from '../../hooks/useFormBirthday'
import '../../styles/formBirthday.css'

const FormBirthday = ({ data, setData }) => {

    const {
        birthday, dialog, handleBirthday,
        handleSubmit, enumMes
    } = useFormBirthday(data, setData)

    return (
        <div className='formBirthday'>
            <div>
                <img src="www.google.com" alt="profile-pic" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3>¿Cual es tu fecha de nacimiento?</h3>
                <input
                    name='dia'
                    type="number" placeholder='Dia'
                    onChange={handleBirthday} />
                <input
                    name='mes'
                    type="text" placeholder='Mes'
                    onChange={handleBirthday} />
                <input
                    name='anio'
                    type="text" placeholder='Año'
                    onChange={handleBirthday} />
                {
                    Object.values(birthday).some(campo => !campo)
                    || birthday.dia <= 0 || birthday.dia >= 31
                    || !enumMes(birthday.mes)
                    || birthday.anio <= 1919 || birthday.anio >= 2005
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
                Object.values(data.birthday).every(campo => campo) && (
                    <div className='dataBirthday'>
                        <p>{ dialog.join(' ') }</p>
                    </div>
                )
            }
        </div>
    )
}

export default FormBirthday
