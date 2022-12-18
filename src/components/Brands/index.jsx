import React from 'react'
import './brands.css'

import starbucks from '../../assets/Stackbuks logo.png'
import nescafe from '../../assets/Nescafe-Logo.png'
import tim from '../../assets/Tim hortins.png'
import dunki from '../../assets/Dunkin Donuts.png'

function Brands() {
  return (
    <article>
      <img src={starbucks} alt="logo Starbucks" />
      <img src={nescafe} alt="logo Nescafé" />
      <img src={tim} alt="logo Tim" />
      <img src={dunki} alt="logo Dunnki" />
    </article>
  )
}

export default Brands