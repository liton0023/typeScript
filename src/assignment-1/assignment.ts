// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

function repactedStr(str: string, num: number = 3): void {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}

repactedStr("hello", 6);
repactedStr("hi");

// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

interface Persons {
  name: string;
  age: number;
  email?: string;
}

const arrayOfPersons: Persons[] = [
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
    age: 15,
    email: "person2@example.com",
  },
  {
    name: "Person 3",
    age: 17,
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
    age: 10,
    email: "person8@example.com",
  },
  {
    name: "Person 9",
    age: 27,
    email: "person9@example.com",
  },
];

const findByAge = (persons: Persons[]): Persons[] | null => {
  return persons.filter((person) => person.age >= 18);
};

console.log(findByAge(arrayOfPersons));

// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function reverseArray<T>(...args: T[]): T[] {
  return args.reverse();
}

const reverseArr: string[] = reverseArray("Apple", "Banana", "Orange");
console.log(reverseArr);

// Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class Public {
  constructor(private name: string, private age: number) {}
  public getDetails(): string {
    return `Name: ${this.name} & Age: ${this.age}`;
  }
}

class Student extends Public {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  public getGrade(): string {
    return `GRADE: ${this.grade}`;
  }
}

const person1 = new Public("Alamun", 20);
console.log(person1.getDetails());

const student1 = new Student("Rub", 18, "A");
console.log(student1.getDetails());
console.log(student1.getGrade());

// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

function processUnknown(input: unknown): void {
  if (typeof input === "string") {
    console.log(input);
  } else {
    console.error("Error: Inpust is Not a string");
  }
}

processUnknown("Hellow how are you");
processUnknown(43);

// Create a TypeScript program that declares an array of strings and a tuple of a number and a string. Add elements to both data structures, and log them to the console.

const stringArray: string[] = ["apple", "banana", "orange"];
const numberStringTuple: [number, string] = [42, "hello"];

stringArray.push("grape");
stringArray.push("kiwi");
numberStringTuple.push(100);

console.log("String Array:", stringArray);
console.log("Number String Tuple:", numberStringTuple);

// Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.

// Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

// Finally, create an object that satisfies the Person interface and log it to the console.

type StringOrNumber<T> = T extends string ? string : number;

interface Person2 {
  name: string;
  age: StringOrNumber<any>;
}

const person: Person2 = {
  name: "Alibaab",
  age: 30,
};

console.log(person);
