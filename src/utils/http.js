//axios的封装
import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
const request = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});
const httpInstane = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});

function fengzhuang(http) {
  //请求拦截器
  http.interceptors.request.use(
    (config) => {
      return config;
    },
    (e) => Promise.reject(e),
  );
  //响应拦截器
  http.interceptors.response.use(
    (res) => res.data,
    (e) => {
      // 统一错误提示
      ElMessage({
        type: "warning",
        message: e.response.data.message,
      });
      return Promise.reject(e);
    },
  );
  return http;
}
fengzhuang(httpInstane);
fengzhuang(request);
export { httpInstane, request };
