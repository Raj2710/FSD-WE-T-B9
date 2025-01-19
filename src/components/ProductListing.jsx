import React,{useState,useEffect, useCallback} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Pagination from './common/Pagination'
function ProductListing() {

    let [products,setProducts] = useState([])
    let [limit,setLimit] = useState(10)
    let [currentPage,setCurrentPage] = useState(1)
    let [totalCount,setTotalCount] = useState(0)
    let [search,setSearch] = useState("")

    const getProducts = useCallback(async ()=>{
        try {
            let skip = (currentPage-1) * limit
            let res = await axios.get(`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${search}`)
            if(res.status===200)
            {
                setProducts(res.data.products)
                setTotalCount(res.data.total)
            }
        } catch (error) {
            console.log(error)
            alert("Error Occoured in Fetching Product")
        }
    },[limit,currentPage,search])

    let myTimer = null

    useEffect(()=>{
        getProducts()
    },[limit,currentPage])
    
    useEffect(()=>{
        //debouncing
        myTimer = setTimeout(()=>{
            setCurrentPage(1)
            getProducts()
        },1000)
        return ()=>clearTimeout(myTimer)

    },[search])

  return <>
  <div style={{textAlign:"center",marginTop:"10px"}}>
    <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)} style={{width:"450px"}}/>
  </div>
    <div className='d-flex p-2 justify-content-center align-items-center flex-wrap'>
        {
            products.map((e)=>{
                return <ProductCard key={e.id} product={e}/>
            })
        }
    </div>
    <Pagination 
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={totalCount}
    />
  </>
}

export default ProductListing