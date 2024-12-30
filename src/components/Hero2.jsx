import React from 'react'
import { hero2, hero3, heroMain } from '../assets'

function Hero2() {
  return (
      <section className='h-screen sm:h-[550px] px-2 sm:px-10 gap-3 sm:gap-0 flex flex-col sm:flex-row justify-between'>
          {/* Hero Left */}
          <div className='h-full w-full sm:w-3/4 border rounded-3xl flex items-center bg-cover bg-center'  style={{backgroundImage : `url(${heroMain})`}}>
              <div className='w-[300px] ml-10'>
                  <h2 className='text-4xl sm:text-5xl'>Color of the Summer Outfit</h2>
                  <p className='text-sm my-2 sm:my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, neque?</p>
                  <button className='px-10 py-2 bg-black text-white rounded-full'>View Collection</button>
              </div>
          </div>



          {/* Hero Right */}
          <div className='w-full sm:w-[23%]  h-[200px] sm:h-full flex sm:flex-col items-center justify-between gap-2 sm:gap-0'>
              {/* Hero Right Upper */}
              <div className='h-full sm:h-[48%] w-full border rounded-3xl p-5 bg-cover bg-center' style={{backgroundImage : `url(${hero2})`}}>
                  <p className='text-2xl sm:text-4xl'>Outdoor <br/> Active</p>
              </div>

              {/* Hero Right Bottom */}
              <div className='h-full sm:h-[48%] w-full border rounded-3xl p-5 bg-cover bg-center'  style={{backgroundImage : `url(${hero3})`}}>
                  <p className='text-2xl sm:text-4xl'>Casual <br/> Comfort</p>
              </div>
          </div>
    </section>
  )
}

export default Hero2