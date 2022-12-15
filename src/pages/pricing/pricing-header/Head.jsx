import React from 'react'
import './Head.css'

function Head() {
  return (
    <div className='container'>
        <div className='main__price'>
          <h1>PRICING</h1>
          <h2>Let’s get some real work done here.</h2>
          <p>Prodict is your perfect solution for working. Get started now for free</p>
          <div className='flex'>
            <div className='free'>
              <h3>Free</h3>
              <p>Brief price description</p>
              <div className='month'>
                <h1>0</h1>
                <div>
                  <h5>$</h5>
                  <h6>Per / month</h6>
                </div>
              </div>
              <h6>Only 2 Op erators</h6>
              <h6>Notifications</h6>
              <h6>Landing Pages</h6>
              <button>Order Now</button>
            </div>
            <div className='free standart'>
              <h3>Standart</h3>
              <p>Brief price description</p>
              <div className='month mon'>
                <h1>5</h1>
                <div>
                  <h5>$</h5>
                  <h6>Per / month</h6>
                </div>
              </div>
              <h6>5+ operators</h6>
              <h6>Notifications</h6>
              <h6>Landing Pages</h6>
              <button>Order Now</button>
            </div>
            <div className='free'>
              <h3>Premium</h3>
              <p>Brief price description</p>
              <div className='month'>
                <h1>10</h1>
                <div>
                  <h5>$</h5>
                  <h6>Per / month</h6>
                </div>
              </div>
              <h6>10+ operators</h6>
              <h6>Notifications</h6>
              <h6>Landing Pages</h6>
              <button>Order Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Head