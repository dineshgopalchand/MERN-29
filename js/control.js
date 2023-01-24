let num = 101;
const numStatus = num % 2 === 0 ? "even" : "odd";
console.log(numStatus);

// odd even
let result = "";
if (num % 2 === 0) {
  result = "even";
} else {
  result = "odd";
}

console.log(`${num} is an ${result} number`);

let gender = "M"; // M/F/O
let age = 5;
let shouldGetGift = false;
// if (
//   (gender === "M" && age >= 21) ||
//   (gender === "F" && age >= 18) ||
//   gender === "O"
// ) {
//   shouldGetGift = true;
// }

function checkGIft(gender, age = 20) {
  if (gender === "M" && age >= 21) {
    shouldGetGift = true;
  } else if (gender === "F" && age >= 18) {
    shouldGetGift = true;
  } else if (gender === "O") {
    shouldGetGift = true;
  }
  return shouldGetGift;
}
console.log(checkGIft("F", 9));

let genderVal = "M";
switch (genderVal) {
  case "M":
    console.log("gift A");
    break;
  case "F":
    console.log("gift B");
    break;

  default:
    console.log("gift C");
    break;
}

//// Loop
// while
// do while
// for
// forEach
// for of
// for in

let start = 100000;
let end = 1000;
let sum = 0;
// while (start <= end) {
//   sum = sum + start;
//   // sum+=start;
//   console.log(start);
//   //   start++;
// }
// while (true) {
//   if (start > end) {
//     break;
//   }
//   sum = sum + start;
//   // sum+=start;
//   console.log(start);
//   start++;
// }
do {
  sum = sum + start;
  console.log(start);
  start++;
} while (start <= end);
console.log(sum);
let sumVal = 0;
for (let num = 0; num <= 1000; num++) {
  sumVal += num;
}
console.log(sumVal);
let arr = [1, 2, 3, 4, 4, 3, 2, 2];

// checkPrime = 27;
// counter = 0;
// for (let start = 2; start <= checkPrime; start++) {
//   if (checkPrime % start == 0) {
//     counter++;
//   }
// }
// console.log(counter == 1 ? "prime number" : "not prime");
// checkPrime = 100;
const primeVal = [];
for (let checkPrime = 1; checkPrime <= 100; checkPrime++) {
  counter = 0;
  for (let start = 2; start <= checkPrime; start++) {
    if (checkPrime % start == 0) {
      counter++;
    }
  }
  if (counter == 1) {
    primeVal.push(checkPrime);
  }
  //   console.log(
  //     counter == 1 ? checkPrime + " prime number" : checkPrime + " not prime"
  //   );
}

console.log("prime number list ", primeVal);
