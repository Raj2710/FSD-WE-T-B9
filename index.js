// console.log("Welcome to Node")

// console.log("I am node")

// const os = require("os");

// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.uptime())

const fs = require('fs')

// fs.readFile('./text.txt','utf-8',(err,data)=>{
//     if(err) 
//         console.log(err)
//     console.log(data)
// })

// let data = fs.readFileSync('./text.txt','utf-8')
// console.log(data)
// console.log("Hello")

// let now = new Date().toISOString()
// let data = `Welcome to My Class ${now}`
// console.log("Before Writing "+now)
// async
// fs.writeFile('./text.txt',data,'utf-8',(err)=>{
//     if(err)
//         console.log(err)
//     else
//     {
//         fs.readFile('./text.txt','utf-8',(err,data)=>{
//             if(err) 
//                 console.log(err)
//             console.log("Data from File "+data)
//         })
//     }
// })

//sync
// try {
//     fs.writeFileSync('./text.txt',data,'utf-8')
//     let result = fs.readFileSync('./text.txt','utf-8')
//     console.log(result)

// } catch (error) {
//     console.log(error)
// }

// try {
//     fs.appendFileSync('./text.txt',`\n${data}`,'utf-8')
//     let result = fs.readFileSync('./text.txt','utf-8')
//     console.log(result)

// } catch (error) {
//     console.log(error)
// }



// fs.writeFile('./text1.txt','Hello','utf-8',(err)=>{
//     if(err) 
//         console.log(err)
// })

const http = require('http')
const PORT = 8000
const USERS = [
    {
        id:1,
        name:"Naga",
        email:"naga@gmail.com"
    },
    {
        id:2,
        name:"Raj",
        email:"raj@gmail.com"
    },
    {
        id:3,
        name:"Vinoth",
        email:"vinoth@gmail.com"
    },
    {
        id:4,
        name:"Cibi",
        email:"cibi@gmail.com"
    }
]

const server = http.createServer((req,res)=>{
    let url = req.url.split("/")
    url.shift()
    let [path,params] = url
    switch(path)
    {
        case 'users' : {
            console.log(params)
            if(params!=null || params!=undefined)
            {   
                let index = -1
                for(let i = 0;i<USERS.length;i++)
                    if(USERS[i].id === Number(params))
                        index = i

                if(index!==-1)
                {
                    res.writeHead(200,"OK",{'content-type':"application/json"})
                    res.end(JSON.stringify(USERS[index]))
                }
                else
                {
                    res.writeHead(400,"Bad Request",{'content-type':"application/json"})
                    res.end(JSON.stringify({message:`Invalid UserId`}))
                }

            }
            else
            {
                res.writeHead(200,"OK",{'content-type':"application/json"})
                res.end(JSON.stringify(USERS))
            }
            break;
        }

        case 'healthCheck':{
            res.writeHead(200,"OK",{'content-type':"text/html"})
            res.end("OK")
            break;
        }

        default:{
            res.writeHead(200,"OK",{'content-type':"text/html"})
            res.end(`Requested endpoint ${req.url} not found`)
        }
    }
})

server.listen(PORT, ()=>console.log(`Server Listening Port ${PORT}`))