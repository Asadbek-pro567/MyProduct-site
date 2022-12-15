import React from 'react'
import './Customers__header.css'
import Airbnb from '../../../components/image/Airbnb.png'
import Google from '../../../components/image/Google.png'
import Microsoft from '../../../components/image/Microsoft.png'
import Fedex from '../../../components/image/Fedex.png'
import Icon1 from '../../../components/image/icon.png'
import Icon2 from '../../../components/image/icon (1).png'
import Icon3 from '../../../components/image/icon (2).png'


function Customers__head() {
  return (
    <div className='container'>
        <div className="customs__head">
            <h1>Our Clients</h1>
            <div>
                <img src={Airbnb} alt="" />
                <img src={Google} alt="" />
                <img src={Microsoft} alt="" />
                <img src={Fedex} alt="" />
            </div>
        </div>
        <div className="custom__main">
            <h1>Why Choose Product?</h1>
            <div className='display__flex special'>
                <div>
                    <img src={Icon1} alt="" />
                    <h3>Special Business</h3>
                    <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                </div>
                <div>
                    <img src={Icon2} alt="" />
                    <h3>Instant Result</h3>
                    <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                </div>
                <div>
                    <img src={Icon3} alt="" />
                    <h3>Fastest way to organize</h3>
                    <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers__head