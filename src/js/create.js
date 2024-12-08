const BASE_URL = "https://675525cb36bcd1eec852acd9.mockapi.io/employee"

let myForm = document.getElementById("myForm")


myForm.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let formData = new FormData(myForm)
    let data = Object.fromEntries(formData)
    if(data.firstName && data.lastName && data.address && data.dob && data.doj && data.email && data.mobile && data.pan)
    {
        data.dob = new Date(data.dob).toISOString()
        data.doj = new Date(data.doj).toISOString()

        try {
            let res = await fetch(BASE_URL,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(res.status===201)
            {
                alert("Employee Created Successfully")
                window.location.replace("../index.html")
            }
            else
            {
                throw `${res.status} : ${data??"Error Occured"}`
            }
        } catch (error) {
            alert(error)
        }
    }
    else
    {
        alert("All fields are required")
    }
})