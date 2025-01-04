import React,{useReducer} from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const initialValue = {
    products:[
        {name:'Biscuts',id:1,price:10,selectedQuantity:0},
        {name:'Choclates',id:2,price:5,selectedQuantity:0},
        {name:'Oil',id:3,price:50,selectedQuantity:0},
        

    ],
    cart:[
        {productId:1,quantity:5}
    ],
    value:0
}

function reducer (state,action){

   switch(action.type){

    case 'INCREMENT':{
        const updatedProducts = [...state.products]
        updatedProducts.forEach(p=>{
            if(p.id === action.id)
            {
                p.selectedQuantity +=1

                state.value = state.value + p.price
            }
        })
        return {
            ...state,
            products:updatedProducts
        }
    }

    case 'DECREMENT':{
        const updatedProducts = [...state.products]
        updatedProducts.forEach(p=>{
            if(p.id === action.id && p.selectedQuantity>0)
            {
                p.selectedQuantity -=1

                state.value = state.value - p.price
            }
        })
        return {
            ...state,
            products:updatedProducts
        }
    }

    case 'RESET':{
        
        return {
            products:[
                {name:'Biscuts',id:1,price:10,selectedQuantity:0},
                {name:'Choclates',id:2,price:5,selectedQuantity:0},
                {name:'Oil',id:3,price:50,selectedQuantity:0},
            ],
            cart:[
                {productId:1,quantity:5}
            ],
            value:0
        }
    }

   }

}

function UseReducerExample() {

    let [state,dispatch] = useReducer(reducer,initialValue)

  return <>
    <Container className='mt-5'>
    
    {
        state.products.map((e)=>{
            
            return <div key={e.id}>
                <span>{e.name}(Rs.{e.price}):</span>
                &nbsp;
                <Button variant="primary" onClick={()=>{dispatch({type:'DECREMENT',id:e.id})}}>-</Button>
                &nbsp;
                {e.selectedQuantity}
                &nbsp;
                <Button variant="primary" onClick={()=>{dispatch({type:'INCREMENT',id:e.id})}}>+</Button>
            </div>
        })
    }

    <div className='mt-5'>
        <b>Total Cart Value : Rs. {state.value}</b>
    </div>

    <div className='mt-5'>
        <Button onClick={()=>dispatch({type:'RESET'})}>Checkout</Button>
    </div>
    </Container>
  </>
}

export default UseReducerExample