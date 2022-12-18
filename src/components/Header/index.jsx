import React, { useState } from 'react'
import './header.css'

import Botao from '../Botao/Botao'

function Header() {
  return (
    <header className='header'>
      <h1>Filtro</h1>

      <nav className='menu'>
        <a href="#">Home</a>
        <a href="#">Explore Us</a>
        <a href="#">Brands</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="btns">
        <Botao className='btn' nomeBtn='Sign up/Login' />
        <Botao nomeBtn='Get the app' />
      </div>
    </header>
  )
}

export default Header