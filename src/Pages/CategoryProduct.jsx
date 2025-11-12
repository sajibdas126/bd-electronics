import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CategoryProduct = () => {
        const[searchData, setSearchData] =useState([])
        const params = useParams()
        const category = params.category 
        console.log(category)
    
        const getFilterData = async ()=>{
            try{
                const res =await axios.get(`https://fackestoreapi.in/api/products/category?type=${category}`)
                const data = res.data.products 
                setSearchData(data)
            }catch(error){
                console.log(error)
            }
        }
 
        useEffect(()=>{
            getFilterData()
        },[])

  return (
    <div>
        
    </div>
  )
}
