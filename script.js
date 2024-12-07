// Welcome to Asynchronous Programming

//1. callback
//2. promise
//3. async/await


//Callback - is a function that takes other function as its arguments

// sum(()=>{})

// const displayFn = 

// let a = [1,2,3,4,5]

// a.forEach((e)=>{
//     console.log("Element",e)
// })

// let result = a.map((e)=>{
//     return e*10
// })




// let firstSum = (a,b)=>{
//     return a+b
// }

// function secondSum(values,callbackFn){

//     //destructring array
//     let [a,b,c] = values

//     return callbackFn(a,b) + c
// }
// let array = [1,2,3]
// console.log(secondSum(array,firstSum))


// let result = a.filter((e,i,array)=>{
//     console.log(i,e)
//     console.log(array)
//     return e%2===0
// })

//Writing Filter function using callback

// let array = [3,6,7,2,5,1,11,31,22,28,92,47,59,31]

// let findOddElement = (ele,index,arr)=>{
//     return ele%2 === 1
// }

// let findEvenIndex = (ele,i)=>{
//     return i%2 === 0
// }   

// let filter = (array,callbackFn)=>{
//     let newArr = []
//     for(let i = 0; i<array.length;i++) if(callbackFn(array[i],i,array)) newArr.push(array[i])
//     return newArr
// }

// let output = filter(array,findOddElement)

// let output = filter(array,(e)=>{
//     return e%2===0
// })

// console.log(output)


// let map = (array,callbackFn)=>{
//     let newArr = []
//     for(let i = 0; i<array.length;i++)
//     {
//         let result = callbackFn(array[i],i,array)
//         newArr.push(result)
//     }
//     return newArr
// }

// let output = map(array,(e)=>{
//     return e*10
// })

// console.log(output)


//Callback Hell - Nested Callbacks

// setTimeout(()=>{
//     console.log("Delayed Work")
// },1000)

// setInterval(()=>{
//     console.log("Repeated Task")
// },3000)

// setTimeout(()=>{
//     console.log("Timeout 1")
//     setTimeout(()=>{
//         console.log("Timeout 2")
//         setTimeout(()=>{
//             console.log("Timeout 3")
//             setTimeout(()=>{
//                 console.log("Timeout 4")
//                 setTimeout(()=>{
//                     console.log("Timeout 5")
//                     setTimeout(()=>{
//                         console.log("Timeout 6")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


//Promise 

// let Promise1 = new Promise((resolve,reject)=>{
//     console.log("Promise 1 Invoked")
//     setTimeout(()=>{
//         reject("The task 1 is completed")
//     },1000)
// })

// let Promise2 = new Promise((resolve,reject)=>{
//     console.log("Promise 2 Invoked")
//     setTimeout(()=>{
//         resolve("The task 2 is completed")
//     },1000)
// })

// let Promise3 = new Promise((resolve,reject)=>{
//     console.log("Promise 3 Invoked")
//     setTimeout(()=>{
//         resolve("The task 3 is completed")
//     },3000)
// })


// Promise1
// .then((value)=>console.log(value))
// .catch((error)=>console.error("Error Occoured",error))
// .finally(()=>{console.log("Finally Executed")})

// Promise2
// .then((value)=>console.log(value))
// .catch((error)=>console.error("Error Occoured",error))

// Promise3
// .then(function(value){console.log(value)})
// .catch((error)=>console.error("Error Occoured",error))


//all - promise fulfills when all of the input's promises fulfill 

// Promise.all([Promise1,Promise2,Promise3])
// .then((value)=>console.log(value))
// .catch((error)=>console.error("Error Occoured",error))


//any - promise fulfills when any of the input's promises fulfills, with this first fulfillment value
// Promise.any([Promise1,Promise2,Promise3])
// .then((value)=>console.log(value))
// .catch((error)=>console.error("Error Occoured",error))

//allSettled - promise fulfills when all of the input's promises settle with an array of objects that describe the outcome of each promise.
// Promise.allSettled([Promise1,Promise2,Promise3])
// .then((value)=>{
//     console.log(value)

//     console.log(value.filter((e)=>e.status==='fulfilled'))
// })
// .catch((error)=>console.error("Error Occoured",error))

//race - promise settles with the eventual state of the first promise that settles.
// Promise.race([Promise1,Promise2,Promise3])
// .then((value)=>console.log(value))
// .catch((error)=>console.error("Error Occoured",error))


//async - await

// function resolveAfter2Seconds() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve('Task Completed after 2 seconds');
//       }, 2000);
//     });
//   }

//   resolveAfter2Seconds()
//   .then((value)=>console.log(value))

// let Promise3 = ()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("Promise 3 Invoked")
//     setTimeout(()=>{
//         resolve("The task 3 is completed")
//     },3000)
// })}

// async function asyncCall(){
//    try{
//     let result1 =  await resolveAfter2Seconds()
//     let result2 = await Promise3()
//     console.log(result1)
//     console.log(result2)
//    }
//    catch(error)
//    {
//     console.error("Error",error)
//    }
//    finally{
//     console.log("Finally Done")
//    }
// }

// async function asyncCall(){
//     try{
//      let [result1,result2] = await Promise.all([resolveAfter2Seconds(),Promise3()])
//      console.log(result1)
//      console.log(result2)
//     }
//     catch(error)
//     {
//      console.error("Error",error)
//     }
//     finally{
//      console.log("Finally Done")
//     }
//  }

// asyncCall()

// let time = 0
// setInterval(()=>{
//     console.log(++time)
// },1000)


const URL = "https://restcountries.com/v3.1/all"

// fetch(URL)
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error.message))

const constructCards = (data)=>{

    let root = document.getElementById("root")
    root.setAttribute("class","d-flex p-3 flex-row flex-wrap")

    data.forEach((country)=>
    {
        let cardWrapper = document.createElement("div")
        cardWrapper.setAttribute("class","card m-3")
        cardWrapper.setAttribute("style","width: 18rem;")
        cardWrapper.innerHTML = `<img src="${country.flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <p class="card-text">${country.capital?country.capital[0]:"-"}</p>
            </div>`
         root.append(cardWrapper)
    })
}

async function getData(){
    try{
        let res = await fetch(URL)
        let data = await res.json()
        if(res.status === 200)
        {
            constructCards(data)
        }
        else
            throw `${res.status} : ${data.message??"Error Occoured"}` 
        
    }
    catch(error)
    {
        alert(error)
    }
}
getData()