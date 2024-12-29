import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'

function App() {
  let [cart,setCart] = useState(0)
  let [product,setProduct] = useState([])
  let [productName,setProductName] = useState("")
  let [image,setImage] = useState("")
  let [price,setPrice] = useState(0)
  let [discount,setDiscount] = useState(0)

// useEffect - Hook which will be trigered before component rendering. 

//  1. useEffect without dependency array - This will be rendered for first time and on each state update

    // useEffect(()=>{
    //   console.log("useEffect without dependency array")
    // })

// 2. useEffect - with Empty dependency array - This will be triggered for first time only.

    // useEffect(()=>{
    //   console.log("Use Effect with Empty Dependency array")
    // },[])

// 3. useEffect - with Dependecy array - This will be triggered for first time and if any dependency changes.
    // useEffect(()=>{
    //   console.log("Use Effect with Dependency array")
    // },[product])

  const getData = ()=>{
    fetch('https://675525cb36bcd1eec852acd9.mockapi.io/product')
    .then(res=>res.json())
    .then(data=>setProduct(data))
    .catch(error=>console.error(error.message || error))
  }

  const createProduct = ()=>{
    let newProduct = {productName,image,price,discount,rating:0}

    console.log(newProduct)
    
    fetch('https://675525cb36bcd1eec852acd9.mockapi.io/product',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newProduct)
    })
    .then(res=>{
      if(res.status===201)
      {
        getData()
        //reset form values
        setProductName("")
        setImage("")
        setPrice(0)
        setDiscount(0)
      }
        
    })
    .catch(error=>console.error(error.message || error))
  }

  useEffect(()=>{
    getData()
  },[])

  return <>
    <Nav cart={cart} setCart={setCart}/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      product.map((e)=>{
                        return <Card cart={cart} setCart={setCart} product={e} key={e.id}/>
                      })
                    }
                </div>
            </div>
    </section>

    <section className="p-5">
      <h2 style={{textAlign:"center"}}>Create Product</h2>

    <form>
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input type="text" value={productName} className="form-control" id="productName" onChange={(e)=>setProductName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input type="text" value={image} className="form-control" id="productImage" onChange={(e)=>setImage(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" value={price} className="form-control" id="price" onChange={(e)=>setPrice(Number(e.target.value))}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Discount</label>
        <input type="number" value={discount} className="form-control" id="discount" onChange={(e)=>setDiscount(Number(e.target.value))}/>
      </div>
    </form>
    <button className="btn btn-primary" onClick={()=>createProduct()}>Submit</button>
    </section>

    
  </>
}

export default App