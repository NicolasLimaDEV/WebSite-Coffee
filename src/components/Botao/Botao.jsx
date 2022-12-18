import React from 'react'
import './botao.css'

function Botao(props) {
  return (
    <>
      <button className='btn'>{props.nomeBtn}</button>
    </>
  )
}

export default Botao