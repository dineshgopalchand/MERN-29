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
((main) => {
  const initTime = Date.now();
  function showPageLoadTime() {
    const ct = Date.now();
    console.log("page load time: ", ct - initTime);
  }
  main.addEventListener("load", showPageLoadTime);
  console.log("Current Time is : " + new Date());
})(window);
