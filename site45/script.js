// async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }
async function getdata(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() { 
    console.log("Lodaing 1")
    console.log("Lodaing 2")
    console.log("Lodaing 3")
    let data = await getdata();
    console.log(data)
    console.log("Process data")
}

// data.then((v) => {
//     console.log(data)
//     console.log("Bye")
// })

main()