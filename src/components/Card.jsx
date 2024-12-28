import React,{useState} from 'react'

function Card({cart,setCart}) {
    
    let [toggle,setToggle] = useState(true)

    let add = ()=>{
        setCart(cart+1)
        setToggle(false)
    }

    let remove = ()=>{
        setCart(cart-1)
        setToggle(true)
    }
  return <>
  <div className="col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Special Item</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
                <span className="text-muted text-decoration-line-through">$20.00</span>
                $18.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {
            toggle ? 
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>add()}>Add to cart</a></div> :
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>remove()}>Remove</a></div>
            }
        </div>
    </div>
    </div>
  </>
}

export default Card


export const doSomething = ()=>{
    return "Hello"
}