import React from 'react'
import './Resources__head.css'
import Odam from '../../../components/image/odam.png'
import Chat from '../../../components/image/chat.png'

function Resources__head() {
  return (
    <div className='container'>
        <div className="resources__head">
            <div>
                <h1>Great Business made with Product.</h1>
                <p>Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</p>
                <input type="text" placeholder='Enter your email adress'/>
                <button>Join Now</button>
                <div className='odam'>
                    <img src={Odam} alt="" />
                    <h4>Join over <span>4,000+</span> other</h4>
                </div>
            </div>
            <img src={Chat} alt="" />
        </div>
    </div>
  )
}

export default Resources__head