// var count = 0;
// var logInterval = setInterval(() => {
//   console.log("some log");
//   count++;
//   if (count >= 5) {
//     clearInterval(logInterval);
//   }
// }, 1000);
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("some data");
      //   reject("some error");
    }, 2000);
  });
}

// fetchData()
//   .then((result) => {
//     console.log(result);
//     return result + " new";
//   })
//   .then((res) => {
//     console.log(res);
//     return "1";
//   })
//   .then((res) => {
//     console.log(res);
//     throw { error: "some error" };
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("I am done");
//   });

// var result = fetchData();

// console.log(result);

const quickPromise = new Promise((resolve, reject) => {
  resolve("I am quick");
});
// Promise.all([fetchData(), quickPromise])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Promise.allSettled([fetchData(), quickPromise]).then((res) => {
//   console.log(res);
// });

async function getPromiseResFn() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
getPromiseResFn();
