import React from 'react'
import './Pricing__main.css'
import Head__main from '../../../components/image/head__main.png'
import Feature from '../../../components/image/feature.png'
import Feature1 from '../../../components/image/feature1.png'
import Feature2 from '../../../components/image/feature2.png'
import Plus from '../../../components/image/plus_circle.png'
import Indikator from '../../../components/image/indikator.png'

function Pricing__main() {
  return (
    <div className='container'>
        <div className="head">
            <div className="head__main">
                <h1>ENTERPRISE</h1>
                <h2>Are you interested  in a custom-tailored plan?</h2>
                <p>Product is a set of advanced features for really large teams with projects.</p>
                <button>Get in touch with us</button>
            </div>
        </div>

        <div className="head__mainner">
                <h1>Product is being used with great effects alongside:</h1>
                <div className='display__flex'>
                    <img className='head__logo1' src={Head__main} alt="" />
                    <div className='yonma'>
                        <div>
                            <img src={Feature} alt="" />
                            <h3>Enterpreneur</h3>
                        </div>
                        <h5>Product is a great way to help medium and samall enterprise owners achieve their goals</h5>
                        <div>
                            <img src={Feature1} alt="" />
                            <h3>Accountants</h3>
                        </div>
                        <h5>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</h5>
                        <div>
                            <img src={Feature2} alt="" />
                            <h3>Universities</h3>
                        </div>
                        <h5>Organize university projects and have documents easily graded online with Product</h5>
                    </div>
                </div>
        </div>

        <div className="head__footer">
            <h1>Frequently asked question</h1>
            <h4>Something is not clear? You need help? Check our FAQ section</h4>
            <div className=''>
                <img src={Plus} alt="" />
                <h3>What are my payment option?</h3>
            </div>
            <hr />
            <div className=''>
                <img src={Plus} alt="" />
                <h3>How can I invite collaborator to platform?</h3>
            </div>
            <hr />
            <div className=''>
                <img src={Plus} alt="" />
                <h3>Can I upgrade my plan?</h3>
            </div>
            <hr />
            <div className=''>
                <img src={Plus} alt="" />
                <h3>Can I cancel my plan at anytime?</h3>
            </div>
            <hr />
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

export default Pricing__main