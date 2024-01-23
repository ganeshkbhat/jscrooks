let a = "1";
let b = 1;

console.log("(a == b) is ", (a == b))

if (a == b) {
  console.log(`

  let a = "1";
  let b = 1;

  (a == b) is true;

  `)
}

a = "1";
b = 1;

if (a == b) {
  console.log(`

  let a = "1";
  let b = 1;

  (a === b) is false;

  `)
}

console.log("(a === b) is ", (a === b))
