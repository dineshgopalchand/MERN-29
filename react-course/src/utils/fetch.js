const getData = async (url, option = {}) => {
  return new Promise(async (resolve, reject) => {
    const fetchedData = await fetch(url, option);
    console.log(fetchedData);
    if (fetchedData.ok) {
      resolve(fetchedData.json());
    } else {
      resolve([]);
    }
  });
};
export default getData;
