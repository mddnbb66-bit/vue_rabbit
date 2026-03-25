//axios的封装
import axios from "axios";

const httpInstane = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

//请求拦截器
httpInstane.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e),
);
//响应拦截器
httpInstane.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  },
);

export default httpInstane;
