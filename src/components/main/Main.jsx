import React from 'react'
import './Main.css'
import Icon from '../image/icon.png'
import Icon2 from '../image/icon (1).png'
import Icon3 from '../image/icon (2).png'
import Icon4 from '../image/icon (3).png'
import Amico from '../image/amico1.png'
import Amico2 from '../image/amico2.png'
import Amico3 from '../image/amico3.png'
import User1 from '../image/1.png'
import User3 from '../image/3.png'
import User4 from '../image/4.png'
import User5 from '../image/5.png'
import Image1 from '../image/image.png'
import Image2 from '../image/image1.png'
import Image3 from '../image/image2.png'
import Yulduz from '../image/yulduz.png'
import Elisa from '../image/elisa.png'
import Albert from '../image/albert.png'
import Vaxid from '../image/waxid.png'

function Main() {


  return (
    <>
    <div className="container conta">
      <main>
        <div className="main__inner">
          <h1>Product  was Built Specifically for You</h1>
          <div className='main__list'>
            <div>
              <img src={Icon} alt="" />
              <h4>First click tests</h4>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div>
              <img src={Icon2} alt="" />
              <h4>Design surveys</h4>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div>
              <img src={Icon3} alt="" />
              <h4>Preference tests</h4>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div>
              <img src={Icon4} alt="" />
              <h4>Five second tests</h4>
              <p>Personal choices and the overall personality of the person. </p>
            </div>
          </div>
            <button>SIGN UP NOW</button>
        </div>
      </main>
    </div>

    <div className="container">
      <main>
        <div className='flex main__mainner'>
          <div>
            <h4>Effortless Validation for</h4>
            <h1>Management</h1>
            <h5 className='main__h'>Accessory makers</h5>
            <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
            <h5>Alterationists</h5>
            <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
          </div>
          <img src={Amico} alt="" />
        </div>
        <div className='flex main__mainner margin__top'>
          <img src={Amico2} alt="" />
          <div className='main__hero'>
            <h4>Easier decision making for</h4>
            <h1>Customer Support</h1>
            <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
            <ul>
              <li>Never worry about overpaying for your energy again. </li>
              <li>We will only switch you to energy companies that we trust and will treat you right</li>
              <li>We track the markets daily and know where the savings are.</li>
            </ul>
          </div>
        </div>
        <div className="flex main__mainner margin__top">
          <div>
            <h4>Optimisation for</h4>
            <h1>Collaborative</h1>
            <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
            <h5>Accessory makers</h5>
            <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
            <h5>Alterationists</h5>
            <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
          </div>
          <img src={Amico3} alt="" />
        </div>
      </main>
    </div>

    <div className="container cont">
      <main>
        <div>
          <div className='main__proces'>
            <h1>Quick & Easy Process</h1>
            <p>Do you require some help for your project: Conception workshop, <br /> prototyping, marketing strategy, landing page, Ux/UI?</p>
            <div className='display'>
              <div>
                <img src={User5} alt="" />
                <img src={User1} alt="" />
              </div>
              <div>
                <img src={User4} alt="" />
                <img src={User3} alt="" />
              </div>
            </div>
            <button>Contact Our expert</button>
          </div>
        </div>
      </main>
    </div>

    <div className="container">
      <main>
        <div>
          <div>
            <h1>Contents Strategies</h1>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
            <div className='flex stronger'>
              <div className='stronger__list'>
                <img src={Image1} alt="" />
                <div className='stronger__inner'>
                <h4>By <strong>Wahid Ari |</strong> 03 March 2019</h4>
                <h2>Increasing Prosperity With Positive Thinking</h2>
                </div>
              </div>
              <div className='stronger__list'>
                <img src={Image2} alt="" />
                <div className='stronger__inner'>
                <h4>By <strong>Wahid Ari |</strong> 03 March 2019</h4>
                <h2>Motivation Is The First Step To Success</h2>
                </div>
              </div>
              <div className='stronger__list'>
                <img src={Image3} alt="" />
                <div className='stronger__inner'>
                <h4>By <strong>Wahid Ari |</strong> 03 March 2019</h4>
                <h2>Success Steps For Your Personal Or Business</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='btns'>
            <button id='1'>.</button>
            <button id='2'>.</button>
            <button id='3'>.</button>
          </div>
        </div>

        <div className='main__price'>
          <h1>Price Table</h1>
          <p>We offer competitive price</p>
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



          <div>
            <div className='main__clients'>
              <h1>What Clients Say</h1>
              <p>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
              <div className='flex'>
                <div className='main__help'>
                  <img src={Yulduz} alt="" />
                  <h5>Product helps you see how many more days you need to work to reach your financial goal.</h5>
                  <div className='flexx'>
                    <img src={Elisa} alt="" />
                    <div>
                      <h4>Wahid Ari</h4>
                      <h5>Designer</h5>
                    </div>
                  </div>
                </div>
                <div className='main__help'>
                  <img src={Yulduz} alt="" />
                  <h5>Product helps you see how many more days you need to work to reach your financial goal.</h5>
                  <div className='flexx'>
                    <img src={Albert} alt="" />
                    <div>
                      <h4>Wahid Ari</h4>
                      <h5>Designer</h5>
                    </div>
                  </div>
                </div>
                <div className='main__help'>
                  <img src={Yulduz} alt="" />
                  <h5>Product helps you see how many more days you need to work to reach your financial goal.</h5>
                  <div className='flexx '>
                    <img src={Vaxid} alt="" />
                    <div>
                      <h4>Wahid Ari</h4>
                      <h5>Designer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
    </>
  )
}

export default Main