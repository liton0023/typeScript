// 1 Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

// 2 Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

const intersect = (arr1: number[], arr2: number[]): number[] => {
  let output: number[] = [];

  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      output.push(element);
    }
  });
  return output;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 7];

console.log(intersect(array1, array2));

// 3 // You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

const filterProducts = <T extends object>(
  array: T[],
  criteria: keyof T,
  value: T[keyof T]
): T[] => {
  let output: T[] = [];
  array.forEach((element) => {
    if (element[criteria] === value) {
      output.push(element);
    }
  });

  return output;
};

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 10.99, category: "Category 1" },
  { id: 2, name: "Product 2", price: 20.99, category: "Category 2" },
  { id: 3, name: "Product 3", price: 30.99, category: "Category 1" },
  { id: 4, name: "Product 4", price: 40.99, category: "Category 2" },
  { id: 5, name: "Product 5", price: 50.99, category: "Category 1" },
  { id: 6, name: "Product 6", price: 60.99, category: "Category 2" },
  { id: 7, name: "Product 7", price: 70.99, category: "Category 1" },
  { id: 8, name: "Product 8", price: 80.99, category: "Category 2" },
  { id: 9, name: "Product 9", price: 90.99, category: "Category 1" },
  { id: 10, name: "Product 10", price: 100.99, category: "Category 2" },
];

console.log(filterProducts(products, "category", "Category 1"));

// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type Tuople = [string, number, number];
type ArrayOfTuople = Tuople[];

const calculateTotal = (arrayOfProducts: ArrayOfTuople): number => {
  return arrayOfProducts.reduce(
    (accumlator, current) => accumlator + current[2],
    0
  );
};

const toupels: ArrayOfTuople = [
  ["apple", 2, 0.5],
  ["banana", 1, 0.25],
  ["orange", 3, 0.75],
  ["grape", 4, 1.0],
  ["pineapple", 1, 1.5],
  ["watermelon", 2, 3.0],
  ["peach", 5, 0.4],
  ["pear", 2, 0.6],
  ["kiwi", 4, 0.8],
  ["mango", 1, 1.2],
];

console.log(calculateTotal(toupels));

// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
const numArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const calculateSumOfEven = (arr: number[]): number => {
  return arr.reduce((accumlator, current) => {
    if (current % 2 === 0) {
      return accumlator + current;
    } else {
      return accumlator;
    }
  }, 0);
};

console.log(calculateSumOfEven(numArray));

// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// interface Person{
//     name:string;
//     age:number;
//     email:string;
// }
interface Person {
  name: string;
  age: number;
  email: string;
}
const arrayOfPerson: Person[] = [
  {
    name: "Person 0",
    age: 59,
    email: "person0@example.com",
  },
  {
    name: "Person 1",
    age: 57,
    email: "person1@example.com",
  },
  {
    name: "Person 2",
    age: 37,
    email: "person2@example.com",
  },
  {
    name: "Person 3",
    age: 66,
    email: "person3@example.com",
  },
  {
    name: "Person 4",
    age: 24,
    email: "person4@example.com",
  },
  {
    name: "Person 5",
    age: 63,
    email: "person5@example.com",
  },
  {
    name: "Person 6",
    age: 67,
    email: "person6@example.com",
  },
  {
    name: "Person 7",
    age: 27,
    email: "person7@example.com",
  },
  {
    name: "Person 8",
    age: 31,
    email: "person8@example.com",
  },
  {
    name: "Person 9",
    age: 27,
    email: "person9@example.com",
  },
];

const arrOfEmail1 = ["person9@example.com", "person2@example.com"];
const arrOfEmail2 = ["labib@gmail.com"];

const findEmail = (
  arrOfPerson: Person[],
  arrOfEmail: string[]
): Person[] | null => {
  let output: Person[] = [];

  arrOfPerson.forEach((person) => {
    if (arrOfEmail.includes(person.email)) {
      output.push(person);
    }
  });
  if (output.length) {
    return output;
  } else {
    return null;
  }
};

console.log(findEmail(arrayOfPerson, arrOfEmail1));
console.log(findEmail(arrayOfPerson, arrOfEmail2));

// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findMinMax = (...args: number[]): void => {
  console.log("Max:", Math.max(...args));
  console.log("Min:", Math.min(...args));
};

findMinMax(...numArr);

// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

const rgb = (color: "red" | "green" | "blue", uppercase?: boolean): void => {
  console.log(uppercase ? color.toLocaleUpperCase() : color);
};

rgb("red", true);
rgb("red", false);
rgb("red");
