import axios from "axios";

const instance = axios.create({
  baseURL: "https://first-tinder-backend.herokuapp.com",
});

export default instance;
