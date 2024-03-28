// interface

// interface IVechile {
//   name: string;
//   model: number;
// }

// const vehicel: IVechile = {
//   name: "car",
//   model: 2000,
// };

// interface Vehicle {
//   startEngin(): void;
//   stopEngin(): void;
//   move?(): void;
// }

// class Car implements Vehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngin(): void {
//     console.log("I am Starting");
//   }

//   stopEngin(): void {
//     console.log("I am stoping");
//   }

//   move(): void {
//     "I am moving";
//   }
// }

// const vehical1 = new Car("Car", "toytoa", 2000);

// abstract class

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngin(): void;
  //   {
  //     console.log("I am Starting");
  //   }

  abstract stopEngin(): void;
  //   {
  //     console.log("I am stoping");
  //   }

  move?(): void {
    "I am moving";
  }
}

class Cars extends Vehicle {
  startEngin(): void {
    console.log("I am Starting");
  }
  stopEngin(): void {
    console.log("I am stoping");
  }
}

// const car = new Vehicle("Car","honda",2015)
