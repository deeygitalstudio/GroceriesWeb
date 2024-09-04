import React from 'react'
import close from '../images/close.jpg'

const Contacts = () => {
  return (
    <section className='--section2'>
     <div className="container">
     <h1 className="text-center">Get in Touch</h1>
     <div className="row my-5">
     <div className="col-lg-6 col-md-6 col-sm-12">
      <img src={close} alt="" />
     </div>
     <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="w3-bold py-sm">To make an order or just to know more? Please send us a message</p>
          <form action="">
             <div className="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" className="form-control"  autocomplete="off"  id="exampleFormControlInput1" placeholder="name" />
</div>
             <div className="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" className="form-control"   autocomplete="off" id="exampleFormControlInput1" placeholder="Email Address" />
</div>
             <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" autocomplete="off" id="exampleFormControlInput1" placeholder="Location" />
</div>
<div class="mb-">
  <label for="exampleFormControlTextarea1" className="form-label">Send us a message</label>
  <textarea className="form-control"  autocomplete="off" placeholder="place your orders here, and also include your your delivery details here" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
          </form>
     </div>
     
     
     </div>
     
     </div>
    
    
    </section>
  )
}

export default Contacts