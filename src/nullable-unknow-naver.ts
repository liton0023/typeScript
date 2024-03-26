const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching...", value);
  }
};

searchName("Moznu Mia");

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My Speed Is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My Speed Is ${convertedSpeed}`);
  } else {
    console.log("There is worng type");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("100 kmh^-1");
getMyCarSpeed(true);

function throeError(message: string): never {
  throw new Error(message);
}

throeError("Errow hoica nbhai");
