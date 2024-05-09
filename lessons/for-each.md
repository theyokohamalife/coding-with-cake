# Iterating through arrays with .forEach()

In this lesson we'll take a look at how we can iterate through arrays using the `.forEach()` method.

## What does forEach do?

The `.forEach()` method executes a callback function on each element in an array, and returns `undefined`.

### Examples

1. In this example each element is assigned the name `cat`. The element name and callback function are both defined inside the parameters.

```js
const cats = ['Mei', 'Jun'];

cats.forEach((cat) => console.log(`${cat} says meow!`));
```

2. In this example each element is assigned the name `dog`. What differences do you notice between this example and the one above—other than them being cats and dogs? 😉

```js
const dogs = ['Peko', 'Lassie'];

function sayWoof(dog) {
  console.log(`${dog} says woof!`);
}

dogs.forEach(sayWoof);
```

### Exercises

1. Use `.forEach()` to console log and subtract 1 from each element in the following array:

```js
const arrayOfNum = [7, 1, 6, 8];
```

2. Refactor the following code to replace the `for...loop` with `forEach`.

```js
const ingredients = ['flour', 'sugar', 'baking powder'];

function addToBowl(ingredient) {
  console.log(`${ingredient} has been added to the bowl!`);
}

for (let i = 0; i < ingredients.length; i++) {
  addToBowl(ingredients[i]);
}
```
