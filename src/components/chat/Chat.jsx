import React, { useState } from 'react'
import FormName from './FormName'
import FormBirthday from './FormBirthday'
import FormContact from './FormContact'

const Chat = () => {

    const [data, setData] = useState({
        name: null,
        birthday: null,
        contact: null
    })

    // const [birthday, setBirthday] = useState({
    //     dia: '',
    //     mes: '',
    //     anio: ''
    // })

    // const [contact, setContact] = useState({
    //     correo: '',
    //     celular: ''
    // })

    const [button, setButton] = useState(false)
    const [show, setShow] = false

    const { nombre, segundoNombre, apellidoPaterno, apellidoMaterno } = data.name
    const { dia, mes, anio } = data.birthday
    const { correo, celular } = data.contact


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
                    Object.values(data.name).some(c => !c) && (
                        <FormName
                            setData={setData}
                            data={data}
                        />
                    )
                }
                {<FormBirthday
                />}
                {<FormContact
                />}
            </section>

            <footer className='chatFooter'>
                {
                    !button ?
                    (
                        <span></span>
                    ) : (
                        <div>
                            <button>Continuar</button>
                        </div>
                    )
                }
            </footer>
        </div>
    )
}

export default Chat
