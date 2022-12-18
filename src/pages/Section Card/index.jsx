import React from 'react'
import './section-card.css'

import Card from '../../components/Cards'
import Brands from '../../components/Brands'

import Coffee1 from '../../assets/Mask group.png'
import Coffee2 from '../../assets/Mask group 1.png'
import Coffee3 from '../../assets/Mask group 2.png'
import Coffee4 from '../../assets/Mask group 3.png'

function SectionCard() {
  return (
    <section className='section-coffee'>
      <h3>Explore the Coffee World</h3>
      <div className='cards-content'>
        <Card imagem={Coffee1} title='Cappacino' price='$8.60' />
        <Card imagem={Coffee2} title='Mocha' price='$9.20' />
        <Card imagem={Coffee3} title='Latte' price='$11.40' />
        <Card imagem={Coffee4} title='Cold Java' price='6.40' />
      </div>
      <h3>Brands We Work With</h3>
      <Brands />
    </section>
  )
}

export default SectionCard