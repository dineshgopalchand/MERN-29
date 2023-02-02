// function getSum(maxNumber) {
//   let sum = 0;
//   for (var a = 1; a <= maxNumber; a = a + 1) {
//     var name = "dinesh";
//     sum = sum + a;
//   }
//   console.log(name);
//   return sum;
// }
// const getSum = function (maxNumber) {
//   let sum = 0;
//   for (var a = 1; a <= maxNumber; a = a + 1) {
//     var name = "dinesh";
//     sum = sum + a;
//   }
//   console.log(name);
//   return sum;
// };
const getSum = (maxNumber) => {
  let sum = 0;
  for (var a = 1; a <= maxNumber; a = a + 1) {
    var name = "dinesh";
    sum = sum + a;
  }
  console.log(name);
  return sum;
};
console.log(getSum(150));

// function getRandomNumber() {
//   return Math.floor(Math.random() * 10);
// }
// const getRandomNumber = function () {
//   return Math.floor(Math.random() * 10);
// };
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

console.log(getRandomNumber());

// function add(num1, num2) {
//   return num1 + num2;
// }
// const add = function (num1, num2) {
//   return num1 + num2;
// };
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(45, 78));

// const sqrtVal = (num1) => {
//   return num1 * num1;
// };
const sqrtVal = (num1) => num1 * num1;

console.log(sqrtVal(45));

(function () {
  console.log("Current Time is : " + new Date());
})();
// ((main) => {
//   const initTime = Date.now();
//   function showPageLoadTime() {
//     const ct = Date.now();
//     console.log("page load time: ", ct - initTime);
//   }
//   main.addEventListener("load", showPageLoadTime);
//   console.log("Current Time is : " + new Date());
// })(globalThis);

const studentDetails = {
  fname: "x",
  lname: "y",
  getFullname: function () {
    return this.fname + " " + this.lname;
  },
  getFullname1: function () {
    return this.fname + " " + this.mname + " " + this.lname;
  },
};
const newDetails = {
  fname: "xx",
  lname: "yz",
};
console.log(studentDetails.fname);
console.log(studentDetails.getFullname());

console.log(studentDetails.getFullname.bind(newDetails)());
console.log(studentDetails.getFullname1());
console.log(studentDetails.getFullname1.bind({ mname: "vv" })());

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(2, 3));

function addNum(...arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}
console.log(addNum(2, 3, 5, 7));

const details = {
  name: "dinesh",
  course: "React",
  addr: {
    location: "Mum",
  },
};
const nDetails = {
  ...details,
  addr: {
    ...details.addr,
  },
};
nDetails.name = "Manish";
nDetails.addr.location = "AJMR";
console.log(details);
console.log(nDetails);
