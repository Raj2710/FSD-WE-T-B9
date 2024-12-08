const BASE_URL = "https://675525cb36bcd1eec852acd9.mockapi.io/employee"


const edit = (id)=>{
    console.log("Clicked ",id)
}

const deleteEmployee = async(id)=>{
    try {
        let res = await fetch(`${BASE_URL}/${id}`,{
            method:"DELETE"
        })
        let data = await res.json()

        if(res.status===200)
        {
            alert("Data Deleted Successfully")
            getData()
        }
        else{
            throw `${res.status} : ${data??"Error Occured"}`
        }

    } catch (error) {
        alert(error)
    }
}

const constructTable = (data)=>{
    let tBody = document.getElementById("table-body")
    tBody.innerHTML = ""

    data.forEach((e)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td class="border border-slate-400 w-20 text-center max-md:w-auto">${e.id}</td>
        <td class="border border-slate-400 w-52 text-center max-md:w-auto">${e.firstName}</td>
        <td class="border border-slate-400 w-52 text-center max-md:w-auto">${e.lastName}</td>
        <td class="border border-slate-400 w-40 text-center max-md:w-auto">${new Date(e.doj).toLocaleDateString()}</td>
        <td class="border border-slate-400 w-96 text-center max-md:w-auto">${e.email}</td>
        <td class="border border-slate-400 w-80 text-center max-md:w-auto">${e.mobile}</td>
        <td class="border border-slate-400 w-80 text-center max-md:w-auto">
            <button class="bg-gray-800 text-white p-2 rounded-md" onclick="edit(${e.id})">Edit</button>
            &nbsp;&nbsp;
            <button class="bg-red-500 text-white p-2 rounded-md" onclick="deleteEmployee(${e.id})">Delete</button>
        </td>`

        tBody.appendChild(tr)
    })

}

const getData = async()=>{
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()

        if(res.status === 200)
        {
            constructTable(data)
        }
        else
            throw `${res.status} : ${data.message??"Error Occured"}`

    } catch (error) {
        alert(error)
    }
}

getData()