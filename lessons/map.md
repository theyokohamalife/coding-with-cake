Below is some data for a very small company in Japan. It is in a format known as [JSON](https://www.json.org/).

Let's use `.forEach()` or `.map()` with the data to complete the exercises below.

# Data

```json
[
  {
    "id": 1,
    "name": "Taku",
    "age": 42,
    "hometown": "Higashiyodagawa, Osaka",
    "residence": "Umeda, Osaka"
  },
  {
    "id": 2,
    "name": "Miku",
    "age": 23,
    "hometown": "Shibuya, Tokyo",
    "residence": "Otsuka, Tokyo"
  }
  {
    "id": 3,
    "name": "Ken",
    "age": 39,
    "hometown": "Hakone, Kanagawa",
    "residence": "Minatomirai, Yokohama"
  }
  {
    "id": 4,
    "name": "Shota",
    "age": 56,
    "hometown": "Ueno, Tokyo",
    "residence": "Duisburg, Germany"
  }
]
```

# Exercise

1. `findNames` should return an array of employee names.

```js
findNames: () => {
  // Your code here
};
```

2. `findHometown` should return an array of employee hometowns.

```js
findHometowns: () => {
  // Your code here
};
```

3. `findTokyoResidents` should return an array of employees living in Tokyo.

```js
findTokyoResidents: () => {
  // Your code here
};
```

4. `findSenpai` should return only the name of the oldest employee.

```js
findSenpai: () => {
  // Your code here
};
```
