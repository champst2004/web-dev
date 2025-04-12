console.log(document.body.childNodes)           // new line = text node
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)

let a = document.body.childNodes[1];

console.log(a.firstChild)
console.log(a.firstElementChild)                // ignores text node
console.log(a.firstElementChild.parentElement)


console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[2].previousElementSibling)
console.log(document.body.firstElementChild.children[2].nextElementSibling)