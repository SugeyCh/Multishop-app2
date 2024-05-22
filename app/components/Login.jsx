import { UserLogin, Identificacion, Instancia, Telefono, Clave } from '@c/Icons'
import Image from 'next/image'
import multishop from '@p/Logo Sistema Multishop Pequeno.png'
import { useState } from 'react'

export default function Login() {
  const [cliente, setCliente] = useState({
    identificacion: '',
    instancia: '',
    telefono: '',
    clave: ''
  })
  const [idtError, setIdtError] = useState('')
  const [telError, setTelError] = useState('')

  const validarIdentificacion = (value) => {
    const regex = /^V-\d*$/
    if (!regex.test(value)) {
      setIdtError('Formato incorrecto de identificación')
    } else {
      setIdtError('')
    }
  }

  const validarTelefono = (value) => {
    const regex = /^\d{4}-\d{7}$/
    if (!regex.test(value)) {
      setTelError('Formato incorrecto del telefono')
    } else {
      setTelError('')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCliente({ ...cliente, [name]: value })
    if (name === 'identificacion') { validarIdentificacion(value) }
    if (name === 'telefono') { validarTelefono(value) }
  }

  return (
    <div className="container">
      <div className="user">
        <i><UserLogin /></i>
      </div>
      <div className="form">
        <form action="">
          <div className='input-icon input-msg'>
            <i className='idt'><Identificacion /></i>
            <input
              className="input"
              name='identificacion'
              type="text"
              placeholder="V-Identificación"
              value={cliente.identificacion}
              onChange={handleChange}
            />
            {idtError && <p className='text-red-500 text-sm'>{idtError}</p>}
          </div>

          <div className='input-icon instancia'>
            <i className='int'><Instancia /></i>
            <input className="input" type="text" placeholder="Instancia" />
          </div>

          <div className='input-icon input-msg2'>
            <i className='tel'><Telefono /></i>
            <input
              className="input"
              name='telefono'
              value={cliente.telefono}
              onChange={handleChange}
              type="tel"
              placeholder="Teléfono"
            />
            {telError && <div className='error'> 
                <p className='text-red-500 text-sm'>{telError}</p>
              </div> }
          </div>

          <div className='input-icon clave'>
            <i className='cla'><Clave /></i>
            <input className="input" type="password" placeholder="Clave" />
          </div>

          <div className="btn">
            <button className="button">Iniciar Sesión</button>
          </div>
        </form>
      </div>
      <div className='logo'>
        <Image className='img' src={multishop} alt='logo multishop' priority />
      </div>
    </div>
  )
}