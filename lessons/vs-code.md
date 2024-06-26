# Working with VSCode

## Navigation

- Explorer
- Search
- Source Control
- Run and Debug
- Extensions

## View

- Split pane
- Preview
- Terminal

## Helpful Shortcuts

**Windows**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

**Mac**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

# Exercise #1

Let's update the HTML to make it a bit more personal!

1. Change the heading in `index.html` from "Coding with Cake" to your own unique phrase.

2. Drag a (family appropriate) picture to the `assets` directory. Find the `img` tag in `index.html` and change the path to match the name of the picture you just copied.

3. Replace the text in the `span` tag that says "What is this all about?" with a short description about your picture.

# Exercise #2

Let's practice running code in our HTML file!

1. Create a button that says "Click me!"

2. Set the button type to "button"

   - You can read more about button types [here](https://www.w3schools.com/tags/att_button_type.asp).

3. Add an `on-click` attribute to the button to console.log a message.

# Exercise #3

Let's try manipulating the DOM!

1. Change the `on-click` attribute on the button to a queryselector for the `h1` tag.

   - Learn about query selectors [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

2. Set the value of the `innerHTML` of the `h1` tag to the name of your favorite kind of cake.

3. Press the button and see what happens!

# Exercise #4

Lastly, let's load JavaScript from another file into `index.html`

# Homework

Below are three different levels of difficulty for the homework assignment. Please choose one of them to take on as a challenge. You are not expected to complete all of them, just one.

Use the following array for all exercises:

`['Chocolate', 'Vanilla', 'Strawberry', 'Red Velvet']`

## Resources

- You can learn more about arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

- You can learn more about iterating through arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

## Easy

Write a function that console logs the array of strings. Try to make this callable using the on-click attribute of a button.

## Medium

Take the array from above and use a for...loop to console log the elements one by one. See the resource about iterating through arrays if you are not sure what a for...loop is.

## Hard

Iterate through the array above and use the DOM to create an HTML element to render each item in the array.

For example, you could render inside each one inside of a `div`, `span`, etc.
