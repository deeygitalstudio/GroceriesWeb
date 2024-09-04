import React from 'react'
import Page1 from '../Components/Sect/Page1'
import About from '../Components/about/About'
import Varietes from '../Components/varietes/Varietes'
import OurService from '../Components/our service/OurService'
import Benefits from '../Components/benefits/Benefits'
import Contacts from '../Components/contacts/Contacts'
import Footer from '../Components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Page1 />
      <About />
      <Varietes />
      <OurService />
      <Benefits />
      <Contacts />
      <Footer />
    </div>
     
  )
}

export default Home