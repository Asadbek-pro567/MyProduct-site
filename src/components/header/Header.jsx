import React from 'react'
import './Header.css'

import Amico from '../image/amico.png'

function Header() {
   



  return (
    <div className="container">
        <header>
            

            <div className="header__inner">
                <div>
                    <h1>Work  at the speed of thought</h1>
                    <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                    <div>
                        <button>Get Started</button>
                        <a href="/"><strong> Watch the Video</strong></a>
                    </div>
                </div>
                <img src={Amico} alt="" />
            </div>
        </header>
    </div>
  )
}

export default Header