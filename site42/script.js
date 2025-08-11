// for no b/w 2 nos -> num1 + random(0, 1) * (num2 - num1)

function getRandColor(){
    let a = Math.ceil( 0 + Math.random() * 255);
    let b = Math.ceil( 0 + Math.random() * 255);
    let c = Math.ceil( 0 + Math.random() * 255);
    return `rgb(${a}, ${b}, ${c})`
}

let boxes = document.querySelector(".container").children

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandColor();
    e.style.color = getRandColor();
})