// class Person {
//   takeNap(): void {
//     console.log("I am sleeping 8 hour per day");
//   }
// }

// class Student extends Person {
//   takeNap(): void {
//     console.log("I am sleeping 10 hour per day");
//   }
// }

// class Developer extends Person {
//   takeNap(): void {
//     console.log("I am sleeping 5 hour per day");
//   }
// }

// function getNap(param: Person) {
//   param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Person();
// const person3 = new Person();
// getNap(person1);
// getNap(person2);
// getNap(person3);

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   redius: number;
//   constructor(redius: number) {
//     super();
//     this.redius = redius;
//   }
//   getArea(): number {
//     return Math.PI * this.redius * this.redius;
//   }
// }

// class Reactangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// function getAreaOfShape(param: Shape) {
//   console.log(param.getArea());
// }

// getAreaOfShape(new Circle(10));
// getAreaOfShape(new Reactangle(10, 12));
