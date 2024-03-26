const age: number = 22;

// if (age >= 18) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// turnially opprater

const isAdult = age >= 18 ? "yes" : "No";

console.log(isAdult);

// Nullish Coalesnace Opprater
// Null and Undefined

const isAuthenticatedUser = "";

const UserName = isAuthenticatedUser ?? "Guest";

const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "guest";

console.log({ UserName }, { userName2 });
