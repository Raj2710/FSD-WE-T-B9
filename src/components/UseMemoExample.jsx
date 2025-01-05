import React, { useMemo, useState} from 'react'


function UseMemoExample() {

    let [products,setProducts] = useState([
        {name:'Biscuts',id:1,price:10,status:true},
        {name:'Choclates',id:2,price:5,status:true},
        {name:'Oil',id:3,price:50,status:false},
        ])
    let [selectedStatus,setStatus] = useState("All")
    let [theeme,setTheeme] = useState(true)

    let visibleProducts = useMemo(()=>{

        console.log("Expensive Function Called")
        for(let i=0;i<=1000000000;i++){}
        console.log("Expensive Operation Done")

        if(selectedStatus === "All")
            return products
        else if(selectedStatus === "Active")
            return products.filter((e)=>e.status)
        else if(selectedStatus === "Inactive")
            return products.filter((e)=>!e.status)

    },[selectedStatus])
    
  return <div className={theeme?"light":"dark"}>
    
    <div>
        <label>Theme: </label>
        <input type='checkbox' onChange={()=>setTheeme(!theeme)} checked={theeme}></input>
    </div>

    <div>
        <ul>
            <li onClick={()=>setStatus("All")} style={{cursor:"pointer"}}>All</li>
            <li onClick={()=>setStatus("Active")} style={{cursor:"pointer"}}>Active</li>
            <li onClick={()=>setStatus("Inactive")} style={{cursor:"pointer"}}>Inactive</li>
        </ul>
    </div>
    {
        visibleProducts.map((e)=>{
            return <div key={e.id}>
                <div>
                    <span>
                        {e.status ? e.name:<strike>{e.name}</strike>}
                    </span>
                    &nbsp;
                    <b>
                        {e.status ? <b>{e.price}</b>:<strike>{e.price}</strike>}
                    </b>
                </div>
            </div>
        })
    }
  </div>
}

export default UseMemoExample