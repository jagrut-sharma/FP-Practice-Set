const totalDepartmentSalary = (employees) =>
  employees.reduce((acc, { department, salary }) => {
    // console.log(acc);
    if (!acc[department]) {
      acc[department] = salary;
      return acc;
    }
    acc[department] += salary;
    return acc;
  }, {});

const employees = [
  { name: "Alice", department: "Sales", salary: 50000 },
  { name: "Bob", department: "Sales", salary: 60000 },
  { name: "Charlie", department: "Marketing", salary: 55000 },
  { name: "David", department: "Sales", salary: 70000 },
  { name: "Eve", department: "Marketing", salary: 65000 },
];

console.log(totalDepartmentSalary(employees));

/*
  How can you use the reduce method to count the number of occurrences of a specific element in an array of numbers?
  
  const countFreq = (arr) => arr.reduce((acc, curr) => {
    if(!acc.some(({number}) => number === curr)) return [...acc, {number: curr, frequency: 1}]
    return acc.map(ele => ele.number === curr ? {...ele, frequency: ele.frequency+1}: ele);
    // console.log(acc);
    // console.log(ele);
    // return ele;
  }, [])
  
  const arr = [5, 2, 7, 2, 5, 8, 5, 9, 2];
  
  console.log(countFreq(arr));
  
  
  /*
  // Write a program to find out the maximum and minimum number in an array by using only one reduce method
  // Input : [3,5,6,1,14]
  // Output: {min:1, max: 14}
  
  // sample-3:
  const minMax3 = (numArr) => numArr.reduce((acc, num) => {
    return {
      min: num < acc.min ? num : acc.min,
      max: acc.max < num ? num : acc.max,
    }
  }, {
    min: numArr[0],
    max: numArr[0]
  })
  
  // sample - 2 :
  // const minMax2 = (numArr) => numArr.reduce((acc, num) => {
  //   if (!acc.min) { acc.min = num };
  //   if (!acc.max) {
  //     acc.max = num;
  //     return acc;
  //   }
  //   if (num > acc.max) return { ...acc, max: num };
  //   if (num < acc.min) return { ...acc, min: num };
  //   return acc;
  // }, {})
  
  // Sample-1:WORKING
  const minMax = (numArr) => numArr.reduce((acc, num) => {
    // console.log(acc);
    if (num > acc.max) return { ...acc, max: num };
    if (num < acc.min) return { ...acc, min: num };
    return acc;
  }, {
    min: numArr[0],
    max: numArr[0]
  })
  
  const input = [3, 5, 6, 1, 14];
  console.log(minMax(input));
  // console.log(minMax2(input));
  console.log(minMax3(input));
  
  /*
  // Given an array of objects representing books, where each object has a title property, an author property, and a price property, write a function that returns the total price of all the books written by a given author.
  
  const getTotalOfAllbooks = (books, findAuthor) => books.reduce((acc, {author, price}) => author === findAuthor ? acc + price : acc, 0)
  
  const books = [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99 },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
      { title: '1984', author: 'George Orwell', price: 10.99 },
      { title: 'Animal Farm', author: 'George Orwell', price: 8.99 },
    ];
  
  console.log(getTotalOfAllbooks(books,"George Orwell"));
  
  /*
  // Given an array of numbers, use the reduce function to find the maximum number in the array.
  
  const maxNumber = (numArr) => numArr.reduce((max, curr) => max > curr ? max : curr)
  
  const numbers = [1, 5, 3, 8, 2];
  console.log(maxNumber(numbers));
  
  
  /*
  // Given an array of voters, objects count how many people voted using reduce 
  
  const voteCount = (votersArr) => votersArr.reduce((acc, curr) => curr.voted ? acc + 1 : acc, 0) 
  
  const voters = [
      {name:'Bob', age: 30, voted: true},
      {name:'Jake', age: 32, voted: true},
      {name:'Kate', age: 25, voted: false},
      {name:'Sam', age: 20, voted: false},
      {name:'Phil', age: 21, voted: true},
      {name:'Ed' , age:55, voted:true},
      {name:'Tami', age: 54, voted: true},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Joey', age: 41, voted: true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Zack', age: 19, voted: false}
  ];
  
  
  
  console.log(voteCount(voters));
  
  
  /*
  // 2. How can you use the reduce method to concatenate all the elements in an array of strings?
  // Array: ["Hello", "world", "!", "How", "are", "you", "?"]
  
  const concatenateStr = (arr) => arr.reduce((acc, curr) => acc + ' ' + curr);
  
  const arr = ["Hello", "world", "!", "How", "are", "you", "?"];
  console.log(concatenateStr(arr));
  
  /* // 1. Given an array of strings, use the reduce function to convert it to snake case string
  
  const snakeStr = (strArr) => strArr.reduce((acc, curr, index) => {
    if (index === strArr.length - 1) return acc + curr;
    return acc + curr + '_'
  }, '')
  
  
  // output: hello_world_how_are_you
  const strings = ['hello', 'world', 'how', 'are', 'you'];
  console.log(snakeStr(strings)); */
