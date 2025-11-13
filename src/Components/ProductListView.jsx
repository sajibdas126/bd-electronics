import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

export const ProductListView = ({product}) => {
const navigate = useNavigate()
const {addToCart} = useCart()




  return (
    <div className='space-y-4 mt-2 rounded-md'>
        <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
            <img src={product.image} alt={product.title} className='md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)} />
            <div className='space-y-2'>
                <h3 className="mt-2 text-sm font-semibold">{product.title}</h3>
                <p className="text-gray-600"><span>${product.price}</span> ({product.discount}% off)</p>
                <button onClick={()=>addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md'> Add to Cart</button>
            </div>
        </div>

    </div>
  )
}
