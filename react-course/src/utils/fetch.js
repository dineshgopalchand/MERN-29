import axios from "axios";
// const getData = async (url, option = {}) => {
//   return new Promise(async (resolve, reject) => {
//     const fetchedData = await fetch(url, option);
//     if (fetchedData.ok) {
//       resolve(fetchedData.json());
//     } else {
//       resolve([]);
//     }
//   });
// };
const getData = async (url, options = {}) => {
  return new Promise(async (resolve, reject) => {
    const requestOption = { ...options, url };
    try {
      const fetchedData = await axios(requestOption);
      resolve(fetchedData.data);
    } catch (err) {
      resolve([]);
    }
  });
};
export default getData;
