const BASE_URL = "https://675525cb36bcd1eec852acd9.mockapi.io/employee"

const getData = async()=>{
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()

        if(res.status === 200)
        {
            console.log(data)
        }
        else
            throw `${res.status} : ${data.message??"Error Occured"}`

    } catch (error) {
        alert(error)
    }
}

getData()