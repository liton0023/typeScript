type GenericArry<T> = Array<T>;

type NameRoll = { name: string; roll: number };

const rollNumbers: GenericArry<number> = [1, 2, 3, 4, 5];
const rollNumbers2: GenericArry<string> = ["22", "11", "22"];
const userNameRoll: GenericArry<NameRoll> = [
  {
    name: "Mr.x",
    roll: 1,
  },
  {
    name: "Mr.y",
    roll: 2,
  },
];
