
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
                <ul className='header__ul'>
                    <li><Link to='/'>Product</Link></li>
                    <li><Link to='/customers'>Customers</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                </ul>
                <div className='header__ul'>
                    <button className='sign__in'><Link to='/login'>Log In</Link></button>
                    <button className='sign__up'><Link to='/singup'>Sign Up</Link></button>
                    <button className='day'><img className='day__night' src={Day} alt="" /></button>
                </div>
            </div>
    </div>
  )
}

export default Header__logo



