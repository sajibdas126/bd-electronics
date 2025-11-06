import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm"
import { Breadcrums } from '../Components/Breadcrums';
import { BiCategory } from 'react-icons/bi';

export const SingleProduct = () => {
  const params = useParams()
  const [singleProduct,setSingleproduct]= useState(null)
  console.log(params);

  const getSingleProduct =async()=>{
    try{
      const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
      const product =res.data;
      setSingleproduct(product);
      console.log(product);

    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getSingleProduct()
  },[params.id])
// discound math
  const OrginalPrice = singleProduct
  ? Math.round(singleProduct.price + (singleProduct.price * (singleProduct.discount || 0) / 100))
  : 0;

  
  return (
    <>
      {
        singleProduct? <div className='px-4 pb-4 md:px-0'>
       <Breadcrums title={singleProduct.title}/>
       {/* single card */}
       <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10'>
        {/* product image */}
        <div className='w-full'>
            <img src={singleProduct.image} alt={singleProduct.title} className='rounded-2xl w-ful object-cover' />
        </div>
        {/* Product details */}
        <div className='flex flex-col gap-6'>
            <h1 className='md:text-3xl font-bold text-gray-800 '>{singleProduct.title}</h1>
            <div className='text-gray-700'>{singleProduct.brand?.toUpperCase()} / {singleProduct.category?.toUpperCase()} / {singleProduct.model}</div>
            <p className='text-xl text-red-500 font-bold'>${singleProduct.price} <span className='line-through text-gray-700'>${OrginalPrice}</span> <span className='bg-red-500 text-white p-2 rounded-full '> {singleProduct.discount} % discount</span></p>
        </div>
       </div>
        </div> :
        <div className=" flex items-center justify-center h-screen">   
       <video muted autoPlay loop>
         <source src={Loading} type="video/webm"></source>
       </video>         
        </div>
      }
    </>
  )
}

export default SingleProduct;