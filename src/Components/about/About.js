import React from 'react'
import farmer1 from "../images/farmer1.jpg"
import './about.css'

const About = () => {
  return (
    <section className='--section2'>
    <div className='container'>
    
          <h1 className='--text-center'>ABOUT US</h1>
      <div className="row my-5">
       <div className="col-md-6 col-lg-6 col-sm-12">
        <img src={farmer1} alt="" className='w3-hover-opacity' />
       
       </div>
       <div className="col-md-6 col-lg-6 col-sm-12 ">
        <p>We are a team of seasoned experts with decades of experience in cultivating and delivering top-quality produce. Our knowledge of premium fruits extends to the essentials found in your grocery basket. Fortunately, we call Deeyfarms home, a region celebrated for its optimal climate and fertile lands conducive to growing a variety of high-quality fruits.</p>
        <p>In the realm of grocery essentials, we understand the importance of sourcing products from the finest environments. Our region's optimal soil conditions, enriched with organic matter, coupled with excellent drainage and aeration facilities, create an ideal setting for cultivating the best produce.</p>
        <p>Deeyfarms' unique climate and environment play a crucial role in delivering grocery items that stand out in terms of freshness, taste, and nutritional value. Explore the exceptional quality of our grocery offerings, carefully selected and sourced from the bountiful landscapes of Deeyfarms. Immerse yourself in the essence of quality and freshness that defines our grocery collection.</p>
       </div>
       </div>
       </div>
    </section>
  )
}

export default About