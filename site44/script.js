console.log("callbacks");
console.log("promises");

setTimeout(()=>{
    console.log("hehe");
}, 0)

setTimeout(()=>{
    console.log("hehe2");
}, 0)

console.log("hello");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("st");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)