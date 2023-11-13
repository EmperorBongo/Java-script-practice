let darVaderHealth = 100
let lukeSkywalkerHealth = 100

console.log(Boolean(darVaderHealth)) //true
let status = "Darth Vader is dead"

let newStatus = status.replace('dead', 'alive')
if(newStatus.includes('alive')) {
    console.log("Oh no, we need to find him and end him.")
    let panicStatus = newStatus.toUpperCase()
    console.log(panicStatus)
    let words = panicStatus.split(" ")
    let kebabCase = words.join("-")

    console.log(words)
    console.log(kebabCase)

    function supriseAttack(attack){
        darVaderHealth -= attack  //what is -=
    }

    supriseAttack(35)  // function decloration syntax
    console.log(darVaderHealth)

    const isDarthAlive = function(){ //function expression
        if (darVaderHealth <= 0){
            console.log("vader is dead")
            return false
        } else { 
            console.log("vader is still Alive")
            return true
        }
    }
    let aliveStaus = isDarthAlive()
    console.log(aliveStaus)

    const greeting = (char1, char2) =>{//arrowfunction
        console.log(`Hello, ${char1}, I am ${char2} and i will deafeat you!`)
    }

    //let attackDarth = () => darVaderHealth -= 10
    let attack = (charHealth) => charHealth - 10
    /* 
        This attack function is going to receice any charecters current health
        as a parameter. it will then subtract 10 from their health and return the 
        new total health. It is used to reassign.

        in the example above, if darVaderHealth starts at 100,
    */
    greeting("luke", "darth vader")
    darVaderHealth = attack(darVaderHealth)
    console.log(darVaderHealth)
    lukeSkywalkerHealth = attack(lukeSkywalkerHealth)
    console.log(lukeSkywalkerHealth)

    while(darVaderHealth > 0 && lukeSkywalkerHealth > 0){
        darVaderHealth = attack(darVaderHealth) // luke attack
        if(darVaderHealth > 0) {
            lukeSkywalkerHealth = attack(lukeSkywalkerHealth)
        }
    }

    if(darVaderHealth > 0){
        console.log("I darth vader have won")
    } else {
        console.log("I luke Skywalker have killed DV")
    }
} 

//console.log(panicStatus) the scope is incorrect 



function rollDice(){
    let possibleNums = [1,2,3, 4, 5, 6]
    let randomNumber = possibleNums[Math.floor(Math.random() * possibleNums.length)]
    return randomNumber
}

console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())


