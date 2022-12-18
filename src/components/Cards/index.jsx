import React from 'react'
import './cards.css'

import Botao from '../Botao/Botao'

function Card(props){
  return(
    <div className='card'>
      <div className="card-content">
        <img src={props.imagem} alt="Cappacino" />
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam porro consequuntur dolorem neque, laboriosam natus quasi!</p>
          <div className='card-row'>
            <h4>{props.price}</h4>
            <Botao nomeBtn='Order Now' />
          </div>
      </div>
    </div>
  )
}

export default Card