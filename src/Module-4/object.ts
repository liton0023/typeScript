class Animal {
  //   public name: string;
  //   public species: string;
  //   public sound: string;
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} say ${this.sound}`);
  }
}

const dog = new Animal("German Sheprad", "dog", "Ghew Ghew");
const cat = new Animal("German Sheprad", "cat", "mew mew");

dog.makeSound();
cat.makeSound();
cat.name = "Special Cat";
