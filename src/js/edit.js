const BASE_URL = "https://675525cb36bcd1eec852acd9.mockapi.io/employee"

let params = new URLSearchParams(window.location.search)
let id = params.get("id")

const lpad = (value)=>{
    return value.toString().padStart(2,'0')
}

const convertDate = (date)=>{
    let d = new Date(date)
    return `${d.getFullYear()}-${lpad(d.getMonth())}-${lpad(d.getDate())}`
}

const mapValues = (data)=>{
    document.getElementById("firstName").value = data.firstName
    document.getElementById("lastName").value = data.lastName
    document.getElementById("dob").value = convertDate(data.doj)
    document.getElementById("doj").value = convertDate(data.doj)
    document.getElementById("address").value = data.address
    document.getElementById("email").value = data.email
    document.getElementById("mobile").value = data.mobile
    document.getElementById("pan").value = data.pan
}

const getData = async()=>{
    try {
        let res = await fetch(`${BASE_URL}/${id}`)
        let data = await res.json()

        if(res.status===200)
        {
            mapValues(data)
        }
        else
            throw `${res.status} : ${data??"Error Occured"}`
    } catch (error) {
        alert(error)
    }
}

getData()


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
            let res = await fetch(`${BASE_URL}/${id}`,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(res.status===200)
            {
                alert("Employee Saved Successfully")
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