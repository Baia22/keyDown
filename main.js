let container=document.querySelector(".container")
let background=document.querySelector(".background")
let press=document.createElement("div")
press.classList.add("press")
container.appendChild(press)
press.innerHTML="Press any key to get the keyCode"



window.addEventListener("keydown", function() {
    press.classList.add("none")
    

})


let div2=document.createElement("div")
div2.classList.add("div2")
let par2=document.createElement("p")
container.appendChild(div2)
div2.appendChild(par2)
par2.innerHTML="event.key"

let box1=document.createElement("div")
box1.classList.add("box1")
div2.appendChild(box1)


let div3=document.createElement("div")
div3.classList.add("div3")
let par3=document.createElement("p")
container.appendChild(div3)
div3.appendChild(par3)
par3.innerHTML="event.code"

let box2=document.createElement("div")
box2.classList.add("box2")
div3.appendChild(box2)



let div4=document.createElement("div")
div4.classList.add("div4")
let par4=document.createElement("p")
container.appendChild(div4)
div4.appendChild(par4)
par4.innerHTML="event.keyCode"


let box3=document.createElement("div")
box3.classList.add("box3")
div4.appendChild(box3)



let wholeDiv=document.createElement("div")
wholeDiv.classList.add("wholeDiv")
wholeDiv.appendChild(div2)
wholeDiv.appendChild(div3)
wholeDiv.appendChild(div4)
background.appendChild(wholeDiv)

window.addEventListener("keydown", function(e) {
    wholeDiv.classList.add("wholeDiv1")
    box1.innerHTML=(e.key)
    box2.innerHTML=(e.keyCode)
    box3.innerHTML=(e.code)
})