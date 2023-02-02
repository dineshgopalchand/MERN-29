const currentDate = new Date();
console.log(currentDate);
new Date("01/30/2022");
Date.now();
const dateVal = new Date();
dateVal.getDate();
dateVal.setDate(dateVal.getDay() + 30);
console.log(
  `${dateVal.getFullYear()}/${dateVal.getDate()}/${dateVal.getMonth() + 1}`
);
console.log(
  `${dateVal.getFullYear()}/${dateVal.getMonth() + 1}/${dateVal
    .getDate()
    .toString()
    .padStart(2, 0)}`
);
