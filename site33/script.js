alert("hello")
console.log("hello")

var a = prompt("enter age")
console.log(a)

var b = confirm("yes no")

if(b){
    console.log("ty")
}
else{
    console.log("bye")
}

console.log(typeof a, typeof b)


// use let instead of var because var is globally scoped

// typeof null = object

// ===, !== compares both value and type

// loops in js - for, forin, forof, while, dowhile

function sum(a, b){
    console.log(a + b);
}

sum(3,4);


const func = (x) =>{
    console.log("im arrow fn " + x);
}

func(3);