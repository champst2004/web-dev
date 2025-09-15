async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 1000);
    })
}

function sum(a, b, c){
    return a + b + c
}

//iife
(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

    let [x, y, ...rest] = [1, 2, 3, 4, 5, 6]
    console.log(x, y, rest)

    let obj = {
        l: 1,
        m: 2,
        c: 3,
        d: 4
    }
    let {l, m} = obj
    console.log(l, m)

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(sum(...arr)) // first 3 

    let obj2 = {...arr}
    console.log(obj2)
})()