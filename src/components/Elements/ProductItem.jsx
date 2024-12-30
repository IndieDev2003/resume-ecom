import React from 'react'
import { hero2 } from '../../assets'

function ProductItem({ productName, productPrice, productImage, }) {
  
  const placeholderImage = 'https://i.pinimg.com/1200x/5b/7d/8d/5b7d8d06a9dcb7f0a1836f047211254a.jpg'

  return (
    <div className='min-h-[270px] w-full relative product-item'>
      <img src={!productImage? placeholderImage: productImage } className='h-[200px] sm:h-[270px] w-full object-cover object-center rounded-xl sm:rounded-2xl border-2' alt="" />
      <div className='px-1'>
        <h2 className='sm:text-xl'>{!productName?'Test Product':productName }</h2>
        <p className='text-gray-700'>${ !productPrice?'255':productPrice}</p>
      </div>
    </div>
  )
}

export default ProductItem