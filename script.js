let clickitems=Array.from(document.getElementsByClassName("click"))
let input=document.getElementById("input")
let value
let decimal=true
let answer= document.getElementById("answer")
clickitems.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        value=ele.innerHTML
        calc(value)
    })
})
document.body.addEventListener("keypress",(e)=>{
    value=e.key
    calc(value)
})

//only for Enter,Escape, Delete and Backspace
document.body.addEventListener("keydown",(e)=>{
    value=e.key
    if(value==="Escape"||value==="Delete"){
        input.innerText=""
        setAnswer()
    }
    else if(value==="Backspace"){
        input.innerText=(input.innerText).slice(0,-1)
        setAnswer()
    }
    else if(value==="Enter"){
        setAnswer()
    }
})
function calc(value){
    if((value===".")&&(decimal===true)){
        input.append(value)
        decimal=false
        setAnswer()
    }
    else if(value==="CE"){
        input.innerText=(input.innerText).slice(0,-1)
        setAnswer()
    }
    else if(value==="C"){
        input.innerText=""
        setAnswer()
    }
    else if((input.innerText!=="")&&((value==="+")||(value==="-")||(value==="*")||(value==="/")||(value==="**"))&&
    (((input.innerText).slice(-1)!=="+")&&((input.innerText).slice(-1)!=="-")&&((input.innerText).slice(-1)!=="*")&&((input.innerText).slice(-1)!=="/")&&((input.innerText).slice(-2)!=="**"))){
        input.append(value)
        decimal=true
        setAnswer()
    }
    else if((input.innerText==="")&&((value==="-"))){
        input.append(value)
        setAnswer()
    }
    else if((value==="0")||(value==="1")||(value==="2")||(value==="3")||(value==="4")||(value==="5")||(value==="6")||(value==="7")||(value==="8")||(value==="9")){
        input.append(value)
        setAnswer()
    }
}
function setAnswer(){
    let ans=document.getElementById("input").innerHTML
    if(ans==""){
        answer.innerHTML=""    
    }
    else{
        answer.innerHTML=eval(ans)
    }
}