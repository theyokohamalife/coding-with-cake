## The Mightiest of Libraries

You've been hired to build the software for a new library! The library hasn't opened yet,
but users want to be able to see what books will be available once it does.

## Exercises

Let's get started by creating an object that will hold our library's data. Our library has a whopping total of _5 books_!

1. Use the `./data/library.json` file in this repository to create a JSON object
   that stores the following data for the library:
   - The title
   - The genre
   - The author(s) (Req. at least 1 book must have multiple authors)
   - The year of publication
   - The number of pages

Think about what data type each of the above requirements should be. That will help you determine how you'll retrieve the data from it in later steps.

2. Import the JSON file into `./src/library.js`. Here's a hint for how to do it:

```js
import someName from './some/path/to/your/file.json' assert {type: 'json'}
```

3. Write the following functions to help users search for books in the library:

   - `searchByTitle` should return an array of books that match the given title.

   - `searchByGenre` should return an array of books that match the given genre.

   - `searchByAuthors` should return an array of books that match the given author(s).

   - `searchByPublicationYear` should return an array of books that match the given publication year.

### Bonus Exercise

1. `searchByKeyword` should return a list of books that match the given keyword in either their title, genre, or authors.

Please share your answers in the `#beginners-coding` channel on Slack once you've completed them.

If you get stuck anywhere, reach out for help. We're here for you!
