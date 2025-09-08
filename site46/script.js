const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let time = 1 + 3 * Math.random()
        setTimeout(() => {
            resolve()
        }, time * 1000);
    })
}

let text = [
    "Initializing",
    "Reading files",
    "Password files detected",
    "Sending to server",
    "Cleaning"
]
async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else last.innerHTML += '.'   
    }, 300);

    const addItem = async (item) => {
        await randomDelay();
        let div = document.createElement("div")
        div.innerHTML = item
        document.body.append(div)
    }
    
    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)
}

main()