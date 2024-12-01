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

let Promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The task 1 is completed")
    },3000)
})

let Promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("The task 2 is incomplete")
    },2000)
})

let Promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The task 3 is completed")
    },5000)
})


Promise1
.then((value)=>console.log(value))
.catch((error)=>console.error("Error Occoured",error))

Promise2
.then((value)=>console.log(value))
.catch((error)=>console.error("Error Occoured",error))

Promise3
.then((value)=>console.log(value))
.catch((error)=>console.error("Error Occoured",error))
