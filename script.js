// PRACTICE SET-2:

// 12. Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)

const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];

const getBestOldBollywoodMovies = (movies) =>
  movies.reduce(
    (acc, { title, year, rating }) =>
      year < 1990 && rating > 8 ? [...acc, title] : acc,
    []
  );

// movies
//     .filter(({ year, rating }) => year < 1990 && rating > 8)
//     .map(({ title }) => title);

const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

/*
// 11. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

const findStudent = (studentsDetails) =>
  studentsDetails.find(
    ({ grade, scholarship }) =>
      grade.toUpperCase() === "B" && scholarship === true
  );

const student = findStudent(students);
console.log(student);
// Output: { name: "Sarah", grade: "B", scholarship: true }

/*
// 10. Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];

const findStudent = (students) =>
  students.find(
    ({ grade, scholarship }) =>
      grade.toUpperCase() === "A" || scholarship === true
  );

const student = findStudent(students);
console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }

/*
// 9. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = (students) =>
  students.find(({ grade }) => grade.toUpperCase() === "A");

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

/*
// 8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const names = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
  "shayam",
];

const isNamesGreaterThan8 = (names) => names.find((name) => name.length > 8);

console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"

/*
// 7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = (numbers) => numbers.find((num) => !(num % 7));

console.log(isDivisibleBy7(numbers));
// Output: 21

/*
// 6. Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];

const getProducts = (products, thresholdPrice) =>
  products.filter(({ price }) => price > thresholdPrice);

console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

/*
// 5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];

const studentNamesFromA = (studentsName) =>
  studentsName.filter((name) => name[0].toLowerCase() === "a");

console.log(studentNamesFromA(studentName));
// Output: ["Anjali", "Arpit", "Ankit"]

/*
// 4. Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBookTitles = (books) => books.map(({ title }) => title);

const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

/*
// 3. Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];

const greetEmployeeMessages = (employeeData) =>
  employeeData.map(
    ({ name, dept }) => `Hi ${name}, We are glad to have you as a ${dept}.`
  );

console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

/*
// 2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];

const multiplyByFive = (numArr) => numArr.map((num) => num * 5);

console.log(multiplyByFive(numbers)); // Output: [5, 10, 15, 20]

/* 
// 1. Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

const names = (people) => people.map(({ name }) => name);

console.log(names(people)); // Output: ['Raj', 'Swapnil', 'Anushka']
*/

// PRACTICE SET - 3:

/*
// 15. Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6];

const getMinimumNumber = (numbers) =>
  numbers.reduce((acc, num) => (num < acc ? num : acc));

console.log(getMinimumNumber(numbers));
// Output: 3

/*
// 14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ["Hello", " ", "world", "!"];

const concatenateStrings = (stringsArr) =>
  stringsArr.reduce((acc, str) => acc + str, "");

console.log(concatenateStrings(strings));
// Output: "Hello world!"

/*
// 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const products = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

const getTotalCost = (products) =>
  products.reduce((acc, { price }) => acc + price, 0);

console.log(getTotalCost(products));
// Output: 110

/*
// 12. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

const getAverageScore = (students) =>
  students.reduce((acc, { score }) => acc + score / students.length, 0);

console.log(getAverageScore(students));
// Output: 82.5

/*
// 11. Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21];

const sumOfEvenNumbers = (numbers) =>
  numbers.reduce((acc, curr) => (curr % 2 ? acc : acc + curr), 0);

console.log(sumOfEvenNumbers(numbers));
// Output: 18

/*
// 10. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const getTitlesWithMoreThan500Pages = (books) =>
  books.reduce(
    (acc, { title, pageCount }) => (pageCount > 700 ? [...acc, title] : acc),
    []
  );

const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books);
console.log(booksWithMoreThan500Pages);
// Output: ["The Lord of the Rings"]

/*
// 9. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (cars) =>
  cars.reduce(
    (acc, { model, year }) => (year > 2012 ? [...acc, model] : acc),
    []
  );

const carModels = getCarModel(cars);
console.log(carModels);
// Output: ["Camry", "Mustang"]

/*
// 8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];

const filterByGenre = (games, targetGenre) =>
  games.filter(({ genre }) => targetGenre === genre);

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

/*
// 7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];

const getMaleCustomers = (customers) =>
  customers.filter(({ gender }) => gender === "Male");

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

/* 
// 6. Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const findBookWithMoreThan500Pages = (books) =>
  books.find(({ pageCount }) => pageCount > 500);

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }
*/

/*
// 5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];

const filterStudentsByGrade = (students, thresholdGrade) =>
  students.filter(({ grade }) => grade > thresholdGrade);

const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

/*
// 4. Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const getAllElectronicProducts = (products) =>
  products.filter(({ category }) => category === "electronics");

const electronicProducts = getAllElectronicProducts(products);
console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]
/* 
// 3. Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const findElectronicsProduct = (products) =>
  products.find(({ category }) => category === "electronics");

const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }
 */

/* 
// 2. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarDetails = (cars) => cars.filter(({ year }) => year > 2012);

const getCars = getCarDetails(cars);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]
 */

/* 
// 1. Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const findToyotaCar = (cars) => cars.find(({ make }) => make === "Toyota");

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }
 */

/* 
// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// const filterBySalary = (employees, salary, age) =>
//   employees.filter(
//     (employee) => employee.salary > salary && employee.age > age && employee
//   );

const filterBySalary = (employees, salary, age) =>
  employees.filter((employee) => checkMetrics(employee, salary, age));

const checkMetrics = (employee, salary, age) =>
  employee.salary > salary && employee.age > age && employee;

const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
*/
/* 
// 11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// const filterByGenre = (books, genre) =>
//   books.filter((book) => book.genre === genre);

// Trying using bind
const filterByGenre = (books, genre) =>
  books.filter(findBookByGenre.bind(genre));

const findBookByGenre = function (book) {
  // console.log(this);
  return String(this) === book.genre;
};

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]
 */

/* 
// 10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const filterByCityAndAge = (people) =>
  people.filter(
    (person) =>
      person.city.toUpperCase() === "INDORE" && person.age > 70 && person
  );

const people = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(people);
console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]
*/

/* 
// 9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const filterByScore = (students) =>
  students.filter((student) => student.score > 80 && student);

const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]
*/

/* 
// 8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const filterByAge = (people) =>
  people.filter((person) => person.age > 30 && person);

const people = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

console.log(filterByAge(people));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]
*/

/* 
// 7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const isDivisibleBy3and5 = (numsArr) =>
  numsArr.filter((num) => num % 3 === 0 && num % 5 === 0);

const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]
*/

/* 
// 6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

const filterLongStrings = (fruits) =>
  fruits.filter((fruit) => fruit.length > 5);

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]
 */

/* 
// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const getCityNames = (cities) => cities.map(({ name }) => name);

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]
*/

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
