//EXO 1

function clickFunction(event){
    let button = document.getElementById("button1");
    button.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}
let button = document.getElementById("button1");
button.addEventListener("click", clickFunction);


//EXO 2

function hoverFunction(e){
    console.log("Position : "+e.clientX+" / "+e.clientY);
    let button = document.getElementById("button2");
    button.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";

}

let button2 = document.getElementById("button2");
button2.addEventListener("mouseover", hoverFunction);