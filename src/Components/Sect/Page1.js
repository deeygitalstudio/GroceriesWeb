import React from 'react'
import './Page.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import front from "../images/front.png"
import front2 from "../images/front2.png"
import front7 from "../images/front7.png"
import front5 from "../images/front5.png"
import front6 from "../images/front6.png"




const Page1 = () => {

 const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <section className='--section4 my-3'>
    <div className='container'>
   
     <div className="row --flex-center">
     <div className="col-md-6 col-lg-6 col-sm-12">
     <div className="title">
     <h1>Fresh<span> Groceries</span> from Farmers Around You</h1>
     <p>Buy fresh farm products directly from farmers, We deliver to your door step, and if you want to buy in wholesales, we have got you covered</p>
     <button className="btn btn-success">Make  Request</button>
    </div>
     </div>
     <div className="col-md-6 col-lg-6 col-12 --p2 slider-container">
       <Slider {...settings}>
     <img src={front} alt="" />
     <img src={front2} alt="" />
     <img src={front7} alt="" />
     <img src={front5} alt="" />
     <img src={front6} alt="" />
   
     </Slider>
     </div>
     </div>
      </div>
    </section>
  )
}

export default Page1
