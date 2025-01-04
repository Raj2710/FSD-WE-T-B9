import { useState,useEffect,useRef } from 'react'

function UseRefBasic() {
  let [value,setValue] = useState("")
  // let [count,setCount] = useState(0)
  let count = useRef(0) //this will have an object {current:0}

  // console.log(count)
  useEffect(()=>{
    count.current += 1//count.current = count.current+1 this will not cause re-rendering
  })

  return (
    <>
      <label>Name:</label>
      <input type='text' placeholder='Name' onChange={(e)=>setValue(e.target.value)}></input>

      <h1>Entered Name is {value}</h1>
      <h2>Component rendered {count.current} times</h2>
    </>
  )
}

export default UseRefBasic
