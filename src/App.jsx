import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
function App() {
  let [cart,setCart] = useState(0)
  let [product,setProduct] = useState([])

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

    <button onClick={()=>setProduct([1])}>Click Me</button>
  </>
}

export default App