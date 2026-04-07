// 管理用户相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore(
  "user",
  () => {
    // 定义用户数据
    const userInfo = ref({});

    // 定义获取接口的数据action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      console.log("dsd", res);
      userInfo.value = res.result;
    };
    //清除数据方法
    const clearUserInfo = async () => {
      userInfo.value = {};
    };
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    // ✅ 修复 2：去掉单引号，使用严格的布尔值
    persist: true,
  },
);
