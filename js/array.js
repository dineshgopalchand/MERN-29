const markList = [34, 2, 3, 5, 99, 67, 55];
// const markListObj = new Array(34, 2, 3, 5, 99, 67, 55);

console.log(markList[0]);
// console.log(markListObj[0]);
console.log(typeof markList);
// console.log(typeof markListObj);
console.log(markList.length);

const newArray = [];
// for (let index = 0; index < markList.length; index++) {
//   newArray.push(markList[index] * 2);
// }
// markList.forEach((item) => {
//   newArray.push(item * 3);
// });
for (const mark of markList) {
  newArray.push(mark * 2);
}
console.log(newArray);

// const newMarkArray = markList.map((item, currentIndex, completeArray) => {
//   console.log(item, currentIndex, completeArray);
//   return {
//     value: item,
//     type: item % 2 == 0 ? "even" : "odd",
//   };
// });
const newMarkArray = markList.map((item) => item * 2);
console.log(newMarkArray);

const sumVal = [1, 2, 3, 4, 5].reduce((sum, item) => {
  return sum + item * 2;
}, 0);
console.log(sumVal);
const markMinVal = markList.reduce((minVal, item) => {
  return minVal > item ? item : minVal;
}, 100);
console.log(markMinVal);
// const newMarkList = markList.concat([45, 344]);
const newMarkList = markList.concat([45, 344]);
console.log(newMarkList);
const filteredVal = markList.filter((mark) => mark % 3 === 0);
console.log(filteredVal);
console.log(
  markList.sort((item1, item2) => {
    return item1 > item2 ? 1 : -1;
  })
);
