//axios的封装
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import router from "@/router";

const request = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});
const httpInstane = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 100000,
});

function fengzhuang(http) {
  //请求拦截器
  http.interceptors.request.use(
    (config) => {
      const userStore = useUserStore();
      const token = userStore.userInfo.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (e) => Promise.reject(e),
  );
  //响应拦截器
  http.interceptors.response.use(
    (res) => res.data,
    (e) => {
      // 统一错误提示
 ElMessage.warning(e.response?.data?.message || '网络请求失败，请稍后再试')
      // token 失效处理
      const userStore = useUserStore();
      if (e.response?.status === 401) {
        //清除用户数据
        userStore.clearUserInfo();
        // 跳转登录
        router.push("/login");
      }
      return Promise.reject(e);
    },
  );
  return http;
}
fengzhuang(httpInstane);
fengzhuang(request);
export { httpInstane, request };
