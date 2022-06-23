import React, { useState } from 'react'
import FormName from './FormName'
import FormBirthday from './FormBirthday'
import FormContact from './FormContact'
import '../../styles/chat.css'

const Chat = () => {

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

    return (
        <div className='chat'>
            <header className='chatHeader'>
                <div className='chatHeader__Left'>
                    <h2>Formulario de contacto</h2>
                    <span>En menos de 5 minutos</span>
                </div>
                
                <div className='chatHeader__Right'>
                    <img src="www.google.com" alt="form-icon" />
                </div>
            </header>

            <section className='chatBody'>
                {
                    <FormName
                        setData={setData}
                        data={data}
                    />
                }
                {
                    Object.values(data.name).every(campo => campo) && (
                        <FormBirthday
                            setData={setData}
                            data={data}
                        />
                    )
                }
                {
                    Object.values(data.name).every(campo => campo)
                    && Object.values(data.birthday).every(campo => campo) && (
                        <FormContact
                            setData={setData}
                            data={data}
                        />
                    )
                }
            </section>

            <footer className='chatFooter'>
                {
                    Object.values(data.name)
                    .concat(Object.values(data.birthday))
                    .concat(Object.values(data.contact)).every(campo => campo) && (
                        <div className='submitData'>
                            <div className='confirmation'>
                                <p>Si tus datos son correctos continuemos por favor</p>
                            </div>
                            <div className='buttonStart__container'>
                                <button>Iniciar</button>
                            </div>
                        </div>
                    )
                }
            </footer>
        </div>
    )
}

export default Chat
