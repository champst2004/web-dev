let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if(rand < 0.5){
        console.log("sad alert");
    }
    else{
        setTimeout(() => {
            console.log("done");
            resolve("completed")
        }, 1000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if(rand < 0.5){
        console.log("sad alert2");
    }
    else{
        setTimeout(() => {
            console.log("done2");
            resolve("completed2")
        }, 2000);
    }
})

// let prom3 = Promise.all([prom1, prom2]) //if both resolved
let prom3 = Promise.allSettled([prom1, prom2]) //any result
// let prom3 = Promise.race([prom1, prom2]) //first
// let prom3 = Promise.any([prom1, prom2]) //waits for 1st promise to fulfil and error if no promise completed


prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})