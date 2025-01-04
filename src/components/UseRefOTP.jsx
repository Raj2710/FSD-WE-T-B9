import React,{useRef,useEffect} from 'react'

function UseRefOTP() {

    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()


    useEffect(()=>{
        ref1.current.focus()
    },[])
    
    const validKey = (key)=>{
        
        console.log(key)
        return isNaN(key)
    }


    const submit = ()=>{
        if(ref1.current.value && ref2.current.value && ref3.current.value && ref4.current.value)
        {
            alert(`Entered OTP is: ${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`)

            ref1.current.value = ""
            ref2.current.value = ""
            ref3.current.value = ""
            ref4.current.value = ""

            ref1.current.focus()
        }
        else
        {
            alert('Invalid OTP')
        }
    }

  return <>
    
    <h1>Enter your OTP Here</h1>

    <input type='text' ref={ref1} onKeyUp={(e)=>{
        
        if(!validKey(e.key))
            ref2.current.focus()
        else if(e.key === "Backspace")
        {
            ref1.current.focus()
        }
        }}></input>
        
    <input type='text' ref={ref2} onKeyUp={(e)=>{
         if(!validKey(e.key))
            ref3.current.focus()
        else if(!ref2.current.value && e.key === "Backspace")
            ref1.current.focus()
    }}></input>
    <input type='text' ref={ref3} onKeyUp={(e)=>{
         if(!validKey(e.key))
            ref4.current.focus()
        else if(!ref3.current.value &&e.key === "Backspace")
        {
            ref2.current.focus()
        }
    }}></input>
    <input type='text' ref={ref4} onKeyUp={(e)=>{
        if(!validKey(e.key))
            submit()
        else if(!ref4.current.value && e.key === "Backspace")
        {
            ref3.current.focus()
        }
    }}></input>
</>
}

export default UseRefOTP