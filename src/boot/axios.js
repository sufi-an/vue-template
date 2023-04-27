import axios from "axios";

const api = axios.create({
  withCredentials: true,
  // baseURL: "http://20.62.5.81/",
  baseURL: "http://127.0.0.1:8000/",
  //baseURL:'http://59.152.103.142:8010/',
  headers: { "Content-Type": "application/json", Authorization: "" },
  credentials: "include",
});

let refresh = false;
console.log(api);
api.interceptors.request.use((config) => {
  console.log(config);
  // configure this condition based on your url pattern
  if (
    config.url === "/auth/login/" ||
    config.url === "/auth/logout/" ||
    config.url === "/auth/registration/"
  ) {
    return config;
  } else {
    const checkJWT = localStorage.getItem("jwt");
    if (!checkJWT) {
      return;
    }
    console.log(config, 26);
    const token = localStorage.getItem("jwt");

    const b_token = "Bearer " + token;
    //     // console.log(b_token,22)
    //     api.defaults.headers.common['Authorization'] = b_token;
    console.log(config);
    config.headers["Authorization"] = b_token;
    return config;
  }
});

export default api;
