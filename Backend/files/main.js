const fs = require("fs")

console.log("starting")
// fs.writeFileSync("st.txt", "hehe1");
fs.writeFile("st.txt", "hehe1", ()=>{
    console.log("done")
    fs.readFile("st.txt", (err, data)=>{
        console.log(err, data.toString())
    })
});
console.log("ending")

fs.appendFile("st.txt", "hehe2", (e, d)=>{
    console.log(e, d.toString())
})