// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];

const countStrings = (fruitsArr) =>
  fruitsArr.reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : ++acc[curr];
    return acc;
  }, {});

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

/*
// 9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];

const findMostExpensiveProduct = (products) =>
  products.reduce((acc, curr) =>
    acc.price * acc.quantity > curr.price * curr.quantity ? acc : curr
  );

console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }

/*
// 8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const getAverageAge = (poeple) =>
  people.reduce(
    (acc, { age }) => ({ averageAge: acc.averageAge + age / people.length }),
    {
      averageAge: 0,
    }
  );

console.log(getAverageAge(people));
// Output: { averageAge: 32.5 }

/*
// 7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];

const oldestPersonName = (people) =>
  people.reduce((acc, curr) => (curr.age > acc.age ? curr : acc)).name;

console.log(oldestPersonName(people));
// Output: 'Naina'
/*
// 6. Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (strings) =>
  strings.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));

console.log(longestString(strings));
// Output: 'Haule Haule'

/*
// 5. Write an ES6 function to multiply and return all the elements of a given array.

const numbers = [1, 2, 3, 4, 5];

const product = (numbers) => numbers.reduce((acc, num) => acc * num);

console.log(product(numbers));
// Output: 120

/*
// 4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const concatStrings = (stringArr) =>
  stringArr.reduce((acc, curr) => (acc += curr), "");

console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

/* 
// 3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

const totalValue = (items) =>
  items.reduce((acc, { price }) => (acc += price), 0);

console.log(totalValue(items));
// Output: 60
*/

/* 
// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];

const sumSquares = (numArr) =>
  numArr.reduce((acc, num) => (acc += num ** 2), 0);

console.log(sumSquares(numbers));
// Output: 55
*/

/* 
// 1. Given an array, write an ES6 function that returns the total length of all the strings in an array.
const totalLength = (stringsArr) => stringsArr.reduce(calcLength, 0);

const calcLength = function (acc, curr) {
  return (acc += curr.length);
};

const strings = ["apple", "banana", "cherry", "date", "blueberry"];

console.log(totalLength(strings));
// Output: 30
*/
