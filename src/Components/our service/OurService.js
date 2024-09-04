import React from 'react'
import './service.css'
import young from '../images/young.jpg'

const OurService = () => {
  return (
    <section className='--section2'>
    <div className="container">
    <h1 className='--text-center'>Our Service</h1>
    <div className="row --mt3">
       <div className="col-md-6 col-lg-6 col-sm-12">
           <div className="sec-content-div">
          <div className="bars">
            <div className="icon-container">
              <img src="https://i.ibb.co/w6H542X/Fresh.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>Fresh</h5>
              <p>We deliver fresh apples with a 100% guarantee of freshness.</p>
            </div>
          </div>

          <div class="bars">
            <div class="icon-container">
              <img src="https://i.ibb.co/FKNq4Qr/delivered.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>Fast</h5>
              <p>
                We deliver your orders as fast as possible, delivery procedure
                begins as soon as apple is plucked from tree.
              </p>
            </div>
          </div>

           <div class="bars">
            <div class="icon-container">
              <img src="https://i.ibb.co/HHQK1wV/happy.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>Satisfying</h5>
              <p>
                We guarantee 100% customer satisfaction. We do our best to make
                your purchase experience smooth. But if we mess up somehow you
                will get compensated for every inconvenience.
              </p>
            </div>


      </div>
      
        </div>
        </div>
       
        <div class="col-md-6">
          <div class="img-cn">
            <img src={young} className="image-fluid w3-image" alt="" />
          </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default OurService