import React from 'react'
import './Resources__main.css'
import Bisnes1 from '../../../components/image/Image Placeholder (2).png'
import Bisnes2 from '../../../components/image/Image Placeholder (3).png'
import Bisnes3 from '../../../components/image/Image Placeholder (4).png'
import Bisnes4 from '../../../components/image/Image Placeholder (5).png'
import Bisnes5 from '../../../components/image/Image Placeholder (6).png'
import Bisnes6 from '../../../components/image/Image Placeholder (7).png'
import Insta from '../../../components/image/insta__logo.png'
import Fadcebook from '../../../components/image/facebook__logo.png'
import Twitter from '../../../components/image/twitter__logo.png'
import Map from '../../../components/image/map.png'

function Resources__main() {
  return (
    <>
    
    <div className='container'>
        <div className='stories'>
          <h1>Latest Stories</h1>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
          <div className='latest'>
          <div>
            <img src={Bisnes1} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Increasing Prosperity With Positive Thinking</strong></h2>
          </div>
          <div>
            <img src={Bisnes2} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Motivation Is The First Step To Success</strong></h2>
          </div>
          <div>
            <img src={Bisnes3} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Success Steps For Your Personal Or Business</strong></h2>
          </div>
          <div>
            <img src={Bisnes4} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Increasing Prosperity With Positive Thinking</strong></h2>
          </div>
          <div>
            <img src={Bisnes5} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Motivation Is The First Step To Success</strong></h2>
          </div>
          <div>
            <img src={Bisnes6} alt="" />
            <h3>By <strong>Wahid Ari |</strong>  03 March 2019</h3>
            <h2><strong>Success Steps For Your Personal Or Business</strong></h2>
          </div>

          </div>
        </div>

        <div className="contact__us">
          <h1>Contact Us</h1>
          <h3>Need more detailed information? <br /> Get in touch with us.</h3>
          <div className='contact__inner'>
            <img src={Insta} alt="" />
            <img src={Fadcebook} alt="" />
            <img src={Twitter} alt="" />
          </div>
          <img className='map' src={Map} alt="" />
        </div>
          <div className='send__message'>
            <h1>Send a message</h1>
            <input className='send__inp1' type="text" placeholder='Your name'/>
            <input className='send__inp2' type="text" placeholder='Your email'/>
            <input className='send__inp3' type="text" placeholder='Your Message'/>
            <button>Send</button>
          </div>
    </div>
    </>
  )
}

export default Resources__main