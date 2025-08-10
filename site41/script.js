console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").tagName)       // only applicale for emelents
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".container").hidden)
// document.querySelector(".container").hidden = true

document.querySelector(".box").innerHTML = "Hello box"          // selects first elemebt of class box

console.log(document.querySelector(".box").getAttribute("style"))

document.querySelector(".box").setAttribute("style", "display: inline")
document.querySelector(".box").removeAttribute("style")
//document.querySelector(".box").remove

console.log(document.querySelector(".box").attributes)

// document.designMode = "on"

console.log(document.querySelector(".box").dataset)

let div = document.createElement("div");
div.innerHTML = "inserted";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "hello nnn")

document.querySelector(".container").classList.add("st")
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
document.querySelector(".container").classList.remove("st")

document.querySelector(".container").classList.toggle("red")
document.querySelector(".container").classList.toggle("red")