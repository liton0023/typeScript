// function kgToGram(param: string | number): string | number | undefined {
//   if (typeof param === "string") {
//     const value = parseFloat(param) * 1000;
//     console.log(value);
//     return value;
//   }
//   if (typeof param === "number") {
//     const value = param * 1000;
//     console.log(value);
//     return value;
//   }
// }

// const resultToBeNumber = kgToGram(1000) as number;
// const resultTobeString = kgToGram("100") as string;

function kgToGeam(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    console.log(value);
    return value;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    console.log(value);
    return value;
  }
}

kgToGeam(1000) as number;
<string>kgToGeam("100");
