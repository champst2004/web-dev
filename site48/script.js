let animal = {
    eats: true
}
let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Animal created")
    }
    eats(){
        console.log(this.name, "eating")
    }
    jumps(){
        console.log(this.name, "jumping")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("this is a lion hhehhehh")
    }
    eats(){
        super.eats()
        console.log(this.name, "eating hahahahahahaha")
    }

}

let a = new Animal("hero")
console.log(a)

let l = new Lion("sheru")
console.log(l)

console.log(l instanceof Animal)
console.log(l instanceof Lion)