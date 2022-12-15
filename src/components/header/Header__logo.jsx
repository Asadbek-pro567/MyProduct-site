
import React from 'react'
import Logo from '../image/header__logo.png'
import Day from '../image/Frame.png'
import {Link} from 'react-router-dom'

function Header__logo() {
  return (
    <div className="container">
            <div className='flex'>
                <div className='header__logo'>
                    <img src={Logo} alt="" />
                    <h3>Product</h3>
                </div>
            <input className='input' type="checkbox" id="toggle"></input>
                <label class="navbar-toggler" for="toggle">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </label>
                <ul className='header__ul nav-list'>
                    <li className='nav-item'><Link className='nav-link' to='/'>Product</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/customers'>Customers</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/pricing'>Pricing</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/resources'>Resources</Link></li>
                </ul>
                <div className='header__ul nav-listt'>
                    <button className='sign__in'><Link className='nav-link' to='/login'>Log In</Link></button>
                    <button className='sign__up'><Link className='nav-link' to='/singup'>Sign Up</Link></button>
                    <button className='day'><img className='day__night' src={Day} alt="" /></button>
                </div>
            </div>
    </div>
  )
}

export default Header__logo



