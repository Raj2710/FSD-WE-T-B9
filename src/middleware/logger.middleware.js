const logger = (req,res,next)=>{

    console.log(`METHOD: ${req.method} PATH: ${req.url} IP: ${req.ip} TIME: ${new Date().toISOString()}`)
    
    res.on('finish',()=>{
        console.log(`STATUS: ${res.statusCode} MESSAGE: ${res.statusMessage}`)
    })
    
    next()
}

export default logger