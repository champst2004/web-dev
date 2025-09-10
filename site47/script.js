let a = parseInt(prompt("Enter 1st no: "))
let b = parseInt(prompt("Enter 2nd no: "))

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("not allowed") // script stops here if erroe thrown
}

try {
    console.log("The sum is: ", a+b*c   )
} 
catch (error) {
    console.log(error)
}
finally{
    console.log("it is used to run even when the return statemtn is in try or catch")
}