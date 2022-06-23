import React, { useState } from 'react'
import FormName from './FormName'
import FormBirthday from './FormBirthday'
import FormContact from './FormContact'
import '../../styles/chat.css'
import useChat from '../../hooks/useChat'

const Chat = () => {

    // const [data, setData] = useState({
    //     name: {
    //         nombre: '',
    //         segundoNombre: '',
    //         apellidoPaterno: '',
    //         apellidoMaterno: ''
    //     },
    //     birthday: {
    //         dia: 0,
    //         mes: '',
    //         anio: 0
    //     },
    //     contact: {
    //         correo: '',
    //         celular: 0,
    //     }
    // })

    const {
        data, setData, submitData, response
    } = useChat()

    return (
        <div className='chat'>
            <header className='chatHeader'>
                <div className='chatHeader__Left'>
                    <h2>Formulario de contacto</h2>
                    <span>En menos de 5 minutos</span>
                </div>
                
                <div className='chatHeader__Right'>
                    <img
                        src="https://veteranos.pjupucmm.com/wp-content/uploads/2018/06/form-icon.png"
                        alt="form-icon"
                    />
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
                                <button onClick={() => submitData(data)}>Iniciar</button>
                            </div>
                            {
                                Object.values(response).length > 0 && (
                                    <div className='response'>
                                        <p>
                                            Fecha de nacimiento:
                                            {response.fechaDeNacimiento}
                                        </p>
                                        <p>
                                            Correo electronico:
                                            {response.email}
                                        </p>
                                        <p>
                                            Telefono celular:
                                            {response.telefono}
                                        </p>
                                        <p>
                                            Nombre:
                                            {response.nombreCompleto}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </footer>
        </div>
    )
}

export default Chat
