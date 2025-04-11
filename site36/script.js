let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());         //stack
console.log(arr.push(55));

console.log(arr.shift())        //queue
console.log(arr.unshift(11))

arr.forEach((value, index, arr) =>  {
    console.log(value, index, arr);
})


let newArr = arr.map(e=>{
    return e ** 2;
})

console.log(newArr);

const compare = (e) =>{
    if (e > 7) return true;
    return false;
}

console.log(arr.filter(compare))

let arr2 = [1, 2, 3, 4, 5, 6]

const addn = (a, b) =>{
    return a + b;
}

console.log(arr2.reduce(addn))
console.log(Array.from("hehe"))