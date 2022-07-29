import axios from "axios";

export default axios.create({
  baseURL: "https://book-store-deloy.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
