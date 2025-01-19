import React,{useState,useEffect, useCallback} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Pagination from './common/Pagination'
function ProductListing() {

    let [products,setProducts] = useState([])

    const getProducts = useCallback(async ()=>{
        try {
            let res = await axios.get(`https://dummyjson.com/products?limit=10&skip=0`)
            if(res.status===200)
            {
                setProducts(res.data.products)
            }
        } catch (error) {
            console.log(error)
            alert("Error Occoured in Fetching Product")
        }
    },[])
    
    useEffect(()=>{
     getProducts()   
    },[])

  return <>
    <div className='d-flex p-2 justify-content-center align-items-center flex-wrap'>
        {
            products.map((e)=>{
                return <ProductCard key={e.id} product={e}/>
            })
        }
    </div>
    <Pagination/>
  </>
}

export default ProductListing