let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "You were clicked"
})


document.addEventListener("keydown", (e)=>{
    console.log(e)
})