// Lesson 04
console.log('Let\'s practice functions!')

// Warmup
// How do we write the following functions as arrow functions?

// function sayHappyCakeDay(name) {
//     return `Happy Cake Day, ${name}!`
// }

const sayHappyCakeDay = name => {
    return `Happy Cake Day, ${name}!`
}

// console.log(sayHappyCakeDay + ${name})

console.log(sayHappyCakeDay("LaShawn"))

// let LaShawn;
// console.log(sayHappyCakeDay(1)) // integer
// console.log(sayHappyCakeDay(LaShawn)) // variable
// console.log(sayHappyCakeDay(false)) // boolean
// console.log(sayHappyCakeDay(["LaShawn", "Jacob Anderson"])) // array

// sayHappyCakeDay("Do you see me?")


function sendMessage(from, to, message) {
    const heading = `Dear ${to},`
    const closing = `Sincerely, ${from}`
    const messageContent = heading + message + closing
    return messageContent
}

const deliverySystem = (from, to, message) => {
    const heading = `Dear ${to},\n`
    const closing = `\nSincerely, ${from}`
    const messageContent = heading + message + closing
    return messageContent
}

console.log(deliverySystem("Dan", "Stevey", "I forgot to close the window. Please close it! <3"))
console.log(deliverySystem("Steve", "Dan", "I WASN'T THE ONE WHO FORGOT IT!!"))
// console.log(sendMessage())

// Exercise

// 1. Dan and Steve are former lovers but now roommates. 
// Dan forgot to close the window before heading to work.
// Print a message from Dan asking Steve to close it for him.

// 2. How can we validate the inputs for the sayHappyCakeDay function?

// 3. How can we validate the inputs for the sendMessage function?



// const checkWeight = weight => `Baggage weight : ${weight} kilograms.`

// function checkWeightAgain(weight) {
//     return `Baggage weight : ${weight} kilograms.`
// }

// console.log(checkWeight(52))
// console.log(checkWeightAgain(33))

// const weightChecker = checkWeightAgain

// console.log(weightChecker(99))


