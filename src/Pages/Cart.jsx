import React from 'react'
import { useCart } from '../Context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'

function Cart({location, getLocation})  {
const {cartItem}=useCart()
const {user} = useCart()
console.log(user)

const totalPrice =cartItem.reduce((total,item)=> total + item.price,0)

  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5' >
      {
        cartItem.length > 0 ? <div>
          <h1 className='font-bold text-2xl'>My Cart({cartItem.length})</h1>
          <div>
            <div className='mt-10'>
              {cartItem.map((item,index)=>{
                return <div key={index} className='bg-gray-100 rounded-md items-center justify-between mt-3 w-full' >
                    <div className='flex items-center gap-4'>
                      <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md' />
                      <div>
                        <h1 className='w-[300px] line-clamp-2 text-sm'> {item.title}</h1>
                        <p className='text-red-500 font-semibold text-lg'>${item.price}</p>
                      </div>
                      <div className='bg-red-500 text-white flex  gap-4 rounded-md font-bold text-xl p-2'>
                      <button cursor="pointer">-</button>
                      <span>{1}</span>
                      <button cursor="pointer">+</button>
                    </div>
                    <span className='hover:bg-white/60 transition-all rounded-full p-3 hover:shawo-2xl'>
                      <FaRegTrashAlt className='text-red-500  text-2xl cursor-pointer'/>
                    </span>
                    </div>
                </div>
              })}
            </div>
            {/* delevary form */}
            <div className='grid grid-cols-2 gap-20'>
              <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
              <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="full">Ful Name</label>
                <input type="text" placeholder='Enter your name' className='p-2 rounded-md' />
              </div>
              <div className='flex flex-col space-y-1'>
               <label htmlFor="full">Address</label>
                <input type="text" placeholder='Enter your address' className='p-2 rounded-md'value={location.country} />
              </div>
              <div className=' flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                  <label htmlFor="">State</label>
                  <input type="text" placeholder='Enter your State' className='p-2 rounded-md w-full' value={location.state}/>
                  </div>
                   <div className='flex flex-col space-y-1 w-full'>
                  <label htmlFor="">PostCode</label>
                  <input type="text" placeholder='Enter your PostCode' className='p-2 rounded-md w-full' value={location.postcode}/>
                  </div>
              </div>
               <div className=' flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                  <label htmlFor="">Country</label>
                  <input type="text" placeholder='Enter your country' className='p-2 rounded-md w-full'/>
                  </div>
                   <div className='flex flex-col space-y-1 w-full'>
                  <label htmlFor="">Phone No</label>
                  <input type="" placeholder='Enter your phone No:' className='p-2 rounded-md w-full'/>
                  </div>
              </div>
              {/* form button */}
              <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
               <div className='flexi items-center text-center w-full justify-center text-gray-700'>
                ---------OR----------
              </div>
              <div className='flex justify-center'>
                <button onClick={getLocation} className='bg-red-500 text-white px-3 py-2 rounded-md '>Detect Location</button>
              </div>
              </div>
              {/* oder detels */}
              <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max '>
                  <h1 className='text-gray-800 font-black text-xl '>Bill details</h1>
                  <div className='flex justify-between items-center'>
                      <h1 className='flex items-center gap-2 text-gray-700'> <span> <LuNotebookText/> </span> Items total</h1>
                      <p>${totalPrice}</p>
                  </div>
                <div className='flex justify-between items-center '>
                  <h1 className='flex gap-1 items-center text-gray-700 '><span><MdDeliveryDining/></span>Delivery Charge</h1>
                  <p className='text-red-500 font-semibold'><span className='text-gray-600 line-through '>$25</span>FREE</p>
                </div>

                 <div className='flex justify-between items-center '>
                  <h1 className='flex gap-1 items-center text-gray-700 '><span><GiShoppingBag/></span>Handling Charge</h1>
                  <p className='text-red-500 font-semibold'>$5</p>
                </div>
                <hr className='text-gray-200 mt-2' />
                <div className='flex justify-center items-center'>
                  <h1 className='font-semibold text-lg '>Graand total</h1>
                  <p className='font-semibold text-lg '>${totalPrice + 5}</p>
                </div>
                <div className=''>
                    <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                    <div className='flex gap-3'>
                      <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full'/>
                      <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md '>Apply</button>
                    </div>
                </div>
                <button className='bg-red-500 w-full text-white px-3 py-2 rounded-md cursor-pointer mt-2 '> Proceed to Checkout</button>
              </div>
             
            </div>
          </div>
          </div>: <div>cart is empty</div>
      }
    </div>
  )
}

export default Cart