import React from 'react'
import Carousel from './Carousel'
import Party from './Party'
import Offer from './Offer'
import Delivery from './Delivery'
import Skills from './Skills'
import Cokkie from './Cokkie'
import Bakery from './Bakery'
import Closing from './Closing'
import Fotter from './Fotter'



export default function Home() {


  return (
    <>
      <div className='Home'>

        <Carousel />
        <Party />
        <Offer />
        <Delivery />
        <Skills />
        <Cokkie />
        <Bakery />
        <Closing />
        <Fotter />
      </div>

    </>
  )
}
