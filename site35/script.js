let random = Math.random();
console.log(random);

let a = prompt("Enter 1st no");
let b = prompt("Enter operation");
let c = prompt("Enter 2nd no");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
};

if(random > 0.1){
    console.log(`The result is ${a} ${b} ${c}`); 
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`); 
}
else{
    c = obj[c];
    console.log(`The result is ${a} ${b} ${c}`); 
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`); 
}