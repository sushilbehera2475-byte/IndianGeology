import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Event_detail from '../component/Event_detail'
import Event_bounser from '../component/Event_bounser'
import Workshop from '../component/Workshop'
import Abstracts from '../component/Abstracts'
import Journal from '../component/Journal'
import Notify from '../component/Notify'
import Field from '../component/Field'
import Organizers from '../component/Organizers'
import Register from '../component/Register'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <div>
      <main>
        <Hero/>
        <About/>
        <Event_detail/>
        <Event_bounser/>
        <Workshop/>
        <Abstracts/>
        <Journal/>
        <Notify/>
        <Field/>
        <Organizers/>
        <Register/>
        
      </main>
      <Footer/>
    </div>
  )
}

export default Home
