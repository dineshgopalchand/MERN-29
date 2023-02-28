const getData = async (url, option = {}) => {
  return new Promise(async (resolve, reject) => {
    const fetchedData = await fetch(url, option);
    if (fetchedData.ok) {
      resolve(fetchedData.json());
    } else {
      resolve([]);
    }
  });
};
export default getData;
