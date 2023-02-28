import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3029",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
const getData = async (url, options = {}) => {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem("token");
    const requestOption = {
      ...options,
      url,
    };
    if (token) {
      requestOption.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const fetchedData = await axiosInstance(requestOption);
      //   axios.delete(url);
      resolve(fetchedData.data);
    } catch (err) {
      resolve([]);
    }
  });
};
export default getData;
