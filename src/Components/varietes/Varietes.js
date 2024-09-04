import React from 'react'
import fruits from '../assest.js'


const Varietes = () => {

   
  return (
    <section className='--section2 w3-light-gray'>
    <div className='container'>
   
    <h1 className='--text-center'>Varietes</h1>
    <div className='row --my2'>
    {fruits.map((fruit, index) => {
return(
      <div key={index} className="col-md-6 col-lg-3 --my  col-sm-12">
    <div className="card w3-" style={{width: 18 + 'rem'}}>
  <img src={fruit.image} className="card-img-top w3-image w3-center" style={{width: 150 + 'px', margin: "auto"}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{fruit.name}<span class="w3-right" id="price">${fruit.price}</span></h5>
    <p className="card-text">{fruit.desc}</p>
    <div className="d-flex" style={{display: "flex", justifyContent: "space-between"}}>
    <a href="details.html?cardId=card1" className="btn btn-success Addtocart"  data-card-id="card1">Buy</a> 

    </div>
  </div>
</div>
            </div>
        )
    })}
      
    </div>
     </div>
    </section>
  )
}

export default Varietes