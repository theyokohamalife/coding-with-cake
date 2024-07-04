# Introduction

## What are Maps?

A map is an `Object` that stores information using key-value pairs. 
Arrays are also objects that are used to store information. The key 
difference (that we'll focus on for now) is how information is stored
and retrieved from a map versus an array.

## How are Maps useful?

Maps are useful, because they allow us to assign "keys" that can be used to retrieve information. 
Here is an example:

```
const contactInformation = {}

contactInformation["prefecture"] = "Yamanashi"
contactInformation["phoneNumber"] = "000-0000-0000"

console.log(contactInformation.prefecture)
// Prints: "Yamanashi"

console.log(contactInformation.phoneNumber)
// Prints: "000-0000-0000"
```

Notice how we initialized `contactInformation` as an empty object.

In the example above, our map has two keys:
1. `prefecture`
2. `phoneNumber`

Keys are usually written in camelCase when using JavaScript. However, keys can 
actually be any data type.

For example, we could add an integer key to our map like so:
```
contactInformation[1] = "Street address 1"
```

Or even a boolean:
```
contactInformation[false] = "Signed up for newsletter"
```

But remember, we want to write our code in a way that is descriptive and easy for other developers (and ourselves) to understand.

What would you suggest we replace the keys `1` and `false` with to make our code more readable?


