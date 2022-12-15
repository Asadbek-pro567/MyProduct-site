import React from 'react'
import './Customers__main.css'
import Mac1 from '../../../components/image/mac1.png'
import Mac2 from '../../../components/image/mac2.png'
import Mac3 from '../../../components/image/mac3.png'
import Place1 from '../../../components/image/Image Placeholder.png'
import Place2 from '../../../components/image/Image Placeholder (1).png'

import Indikator from '../../../components/image/indikator.png'

function Customers__main() {
  return (
    <div className='container'>
        <div className='custom__mainnn'>
            <h1>How Product Work?</h1>
            <div  className='main__flexx'>
                <img src={Mac1} alt="" />
                <div>
                    <h3>STEP 1</h3>
                    <h2>Apply for a product</h2>
                    <p>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology </p>
                </div>
            </div>
            <div  className='main__flexx main__flexxx'>
                <div>
                    <h3>STEP 2</h3>
                    <h2>Pay fully refundable</h2>
                    <p>Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.</p>
                </div>
                <img src={Mac2} alt="" />
            </div>
            <div  className='main__flexx'>
                <img src={Mac3} alt="" />
                <div>
                    <h3>STEP 3</h3>
                    <h2>Completion</h2>
                    <p>Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement</p>
                </div>
            </div>
            <button>Get in touch with us</button>
        </div>

        <div className="custom__footerr">
            <h1>Join thousand of other who have <br /> already received offers</h1>
            <div className='busines'>
                <div>
                    <img src={Place1} alt="" />
                    <h3>Business</h3>
                    <h4>Cash Flow <br /> Asset Backed <br /> Receivables Finance</h4>
                    <h5>Find the best business product</h5>
                </div>
                <div>
                    <img src={Place2} alt="" />
                    <h3>Enterprise</h3>
                    <h4>Site Acquisition <br /> Bridge <br /> Development Financing</h4>
                    <h5>Find the best business product</h5>
                </div>
            </div>
        </div>

        <div className='footer__head fooooter'>
            <div>
              <h1>Join 100 Compannies who boost their business with Product</h1>
              <button>Get This</button>
            </div>
            <img src={Indikator} alt="" />
          </div>
    </div>
  )
}

export default Customers__main