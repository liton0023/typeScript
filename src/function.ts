function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(10, 20);

const arr = [1, 2, 3, 4];

const nuwArr = arr.map((ele: number) => ele * ele);

const person: {
  name: string;
  balance: number;
  addBlance(money: number): void;
} = {
  name: "Ms",
  balance: 5,
  addBlance(money: number) {
    console.log(`My New Balance is ${this.balance + money}`);
  },
};

// spread operater

const myFriends = ["a", "b", "c", "d"];
const newFriends = ["e", "f", "g"];
myFriends.push(...newFriends);
console.log(myFriends);

// rest opprater

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("hasem", "kasam", "rohem", "jobber", "rofiq", "malpo");
