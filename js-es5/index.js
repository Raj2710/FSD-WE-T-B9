// let details = {
//     name:"nagarajan",
//     email:"naga@gmail.com",
//     mobile:"9999999999",
//     "address":{
//         "address line 1":"123, vivekanandha street",
//         "locality":"Medavakkam",
//         "city":"Tambaram",
//         "district":"Chengalpattu"
//     }
// }


// // console.log(details.name,details["address"]["address line 1"],details["address"]["city"])

// console.log(Object.keys(details))
// console.log(Object.values(details))

// Functions - ES5

// function sum (){

// }

//Arrow Functions - ES6

// const functionSum = ()=>{
//     return 10+5
// }


// Variable Declaration
// ES5- var
// ES6 - let and const

// Async programming
// ES5 - callback
// ES6 - Promise


// Spread and Rest operator

// let a = [1,2,3,4,5]
// let b = [...a]
// b.push(10)

// console.log(...a) //==> array will be converted to comma separated values - expand


// function sum (...args){
//     console.log(args)
// }

// sum(1,2,4,5,6,7,8,9,10,20)

// console.log(1,2,3,4,5,6,7,9)

// Spread syntax looks exactly like rest syntax. 
// In a way, spread syntax is the opposite of rest syntax. 
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

// let details = {
//         name:"nagarajan",
//         email:"naga@gmail.com",
//         mobile:"9999999999",
//         address:"123, vivekanandha street"
//     }

// let details2 = {...details}
// console.log(details2)




//Object Destruction

// let details = {
//     name:"nagarajan",
//     email:"naga@gmail.com",
//     mobile:"9999999999",
//     address:"123, vivekanandha street"
// }

// const {name,mobile} = details

// console.log(name,mobile)


// let array = ["Mango","Guava","Lemon"]

// let [f1,f2,f3] = array

// console.log(f1,f2,f3)

// let obj = {f1,f2,f3}

// console.log(obj)

// console.log(`The fruit ${f1} is very tasty`)


//OOPS - Object Oriented Programming

// 1. Class
// 2. Object
// 3. Inheritence
// 4. Polymorphism
// 5. Abstraction   
// 6. Encapsulation


// Students

class Parents {
    constructor(pname,ocupation,mobile){
        this.pname = pname
        this.ocupation = ocupation
        this.mobile = mobile
    }

    parentDisplay()
    {
        console.log(this.pname,this.ocupation,this.mobile)
    }

    getName()
    {
        return this.pname
    }
}


class Students extends Parents{

    #name;

    constructor(name,roll,address,pname,occupation,mobile){
        super(pname,occupation,mobile)
        this.#name = name
        this.rollno = roll
        this.address = address    
    }

    studentDisplay()
    {
        console.log(this.#name,this.rollno,this.address)
        console.log(this.ocupation)
        super.parentDisplay()
    }

    //method overriding
    getName()
    {
        return this.#name
    }

}

let s1 = new Students("Raj","001","123, Eldams Road","Chan","Bank Employee","1111111111")

let s2 = new Students("Naga","002","123, Eldams Road","Chinu","Engineer","222222222")

// console.log(s1.name)

// console.log(s1.rollno)

// console.log(s1.getName())

// s1.studentDisplay()

// s1.parentDisplay()

console.log(s1.getSum(10,20,30))