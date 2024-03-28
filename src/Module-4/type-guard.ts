// keyOf Guard

type AlphaNumarice = string | number;

function add(param1: AlphaNumarice, param2: AlphaNumarice): AlphaNumarice {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add(1, 2);
add("1", "2");

// in gurad

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  roll: "Admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("roll" in user) {
    return `I am an Admin And My roll is ${user.roll}`;
  } else {
    return `I am a Normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mr.Dark" };
const adminUser1: AdminUserType = { name: "Mr.Foker", roll: "Admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instaceof gurad

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am makeing a sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("i am barking");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMaw() {
    console.log("I am Meawing");
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMaw();
  } else {
    animal.makeSound();
  }
}
// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMaw();
//   } else {
//     animal.makeSound();
//   }
// }

const animal1 = new Dog("German bgai", "Dog"); //  Inatance -> dog
const animal2 = new Cat("pharcian Bhai", "cat");

getAnimal(animal2);
