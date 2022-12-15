import React from 'react'

import Logo from '../image/header__logo.png'

function Footer__head() {
  return (
    <div className='container'>
        <div className='flex footer__ul'>
          <div className='flex__logo'>
            <img src={Logo} alt="" />
            <h2>Product</h2>
          </div>
          <ul>
            <li>Resources</li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
          <ul>
            <li>Legal Stuff</li>
            <li><a href="/">Disclaimer</a></li>
            <li><a href="/">Financing</a></li>
            <li><a href="/">Privacy Police</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
          <ul>
            <li className='know'>knowing you're always on the best energy deal.</li>
            <li><input type="text" /></li>
            <li><button>Sign Up Now</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer__head