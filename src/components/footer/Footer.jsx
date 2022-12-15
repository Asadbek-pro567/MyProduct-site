import './Footer.css'
import React from 'react'
import Indikator from '../image/indikator.png'
import Logo from '../image/header__logo.png'

function Footer() {
  return (
    <div className="container">
      <footer>
        <div>
          <div className='footer__head'>
            <div>
              <h1>Join 100 Compannies who boost their business with Product</h1>
              <button>Get This</button>
            </div>
            <img src={Indikator} alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
