let count = 0;
let names = ["Shewag","Ghambir","Kholi","MS Dhoni","Harbajan","Shreeshant"]

const generate = ()=>{
    console.log(`Button is clicked ${++count} times`)

    let main = document.getElementById("main");
    // main.innerText = ""
    let ul = document.createElement("ul");

    names.forEach((e)=>{
        let li = document.createElement("li")
        li.innerText = e;
        ul.appendChild(li)
    })

    main.appendChild(ul)

}


const clearContent = ()=>{
    let main = document.getElementById("main");
    main.innerText = ""
}


let myForm = document.getElementById("myForm")

// myForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Form Submitted")

//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;

//     let display = document.getElementById("display")

//     display.innerText="";

//     display.setAttribute("style","text-align:center;");

//     display.innerHTML = `<h2>Submitted Data</h2>
//     <div>First Name: <strong>${fname}</strong></div>
//     <div>Last Name: <strong>${lname}</strong></div>
//     `
// })

let lable = {
    fname:"First Name",
    lname:"Last Name"
}

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let formData = new FormData(myForm);
    let data = Object.fromEntries(formData);
   
    if(data.fname && data.lname)
    {
        let display = document.getElementById("display")
        display.innerText="";
        display.setAttribute("style","text-align:center;");

        let html = ""

        Object.keys(data).forEach(key=>{
            html += `<div>${lable[key]}: <strong>${data[key]}</strong></div>`
        })


        display.innerHTML = `<h2>Submitted Data</h2>${html}`    
    }
    else
    {
        if(!data.fname)
        {
            let fnameError = document.getElementById("fnameError");
            fnameError.innerText = "First Name is required"
        }
        
        if(!data.lname)
        {
            let lnameError = document.getElementById("lnameError");
            lnameError.innerText = "Last Name is required"
        }
    }
})


let fnameEle = document.getElementById("fname");

fnameEle.addEventListener("blur",(e)=>{

    let fnameError = document.getElementById("fnameError");

    if(!e.target.value)
        fnameError.innerText = "First Name is required"
    else
        fnameError.innerText = ""
})

let lnameEle = document.getElementById("lname");

lnameEle.addEventListener("blur",(e)=>{

    let lnameError = document.getElementById("lnameError");
    
    if(!e.target.value) 
        lnameError.innerText = "Last Name is required"
    else
        lnameError.innerText = ""
})

// fnameEle.addEventListener("change",(e)=>{
//     console.log(e.target.value)
// })