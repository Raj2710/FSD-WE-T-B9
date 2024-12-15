//utility Functions - Begin

function enableButton(...buttons){
    buttons.forEach(button=>{
        button.setAttribute("style","margin: 10px; font-size: 20px;display:inline")
    })
}

function disableButton(...buttons){
    console.log(buttons)
    buttons.forEach(button=>{
        button.setAttribute("style","display:none")
    })
}

function lpad(value){
    return value.toString().padStart(2,'0')
}

//utility Funtions - End

//Variables Initialisation - Begin

let h = document.getElementById("h")
let m = document.getElementById("m")
let s = document.getElementById("s")
let ms = document.getElementById("ms")
let bStart = document.getElementById("start")
let bStop = document.getElementById("stop")
let bReset = document.getElementById("reset")
let bSplit = document.getElementById("split")
let result = document.getElementById("result")

let hh,mm,ss,mss,myInterval;

function initializeValues(){
    h.innerText = m.innerText = s.innerText = ms.innerText = "00"
    hh=mm=ss=mss=0
}

// Variable initialization - End

//Primary Functions - Begin

initializeValues()
disableButton(bStop,bReset,bSplit)

function start(){
    disableButton(bStart,bReset)
    enableButton(bStop,bSplit)
    myInterval = setInterval(()=>{
        
        mss++
        if(mss === 100)
        {
            mss = 0
            ss++
        }
        else if(ss === 60)
        {
            ss = 0
            mm++
        }
        else if(mm === 60)
        {
            mm = 0
            hh++
        } 

        ms.innerText = lpad(mss)
        s.innerText = lpad(ss)
        m.innerText = lpad(mm)
        h.innerText = lpad(hh)

    },10)
}

function stop(){
    clearInterval(myInterval)
    disableButton(bStop,bSplit)
    enableButton(bStart,bReset)
}

function reset(){
    initializeValues()
    result.innerHTML = ""
}

function split(){
    let div = document.createElement("div")
    div.innerHTML = `${lpad(hh)}:${lpad(mm)}:${lpad(ss)}:${lpad(mss)}`
    result.appendChild(div)
}

// Primary Functions - End