// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const getCityNames = (cities) => cities.map(({ name }) => name);

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

/* 
// 4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getProductNamesInLowerCase = (products) =>
  products.map(({ name }) => name.toLowerCase());

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]
 */

/* 
// 3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const getAges = (people) => people.map(({ age }) => age);

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]
 */

/* 
// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeArray = (strArr) => strArr.map((str) => str.toUpperCase());

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]
 */

/* 
// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const incrementNumbers = (num) => num.map((n) => n + 3);

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]
 */
