import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/index_login.vue";
import layout from "@/views/layout/index_layout.vue";
import home from "@/views/home/index_home.vue";
import categroy from "@/views/categroy/index_categroy.vue";
import subCategory from "@/views/subCategory/index_subCategory.vue";
import Detail from "@/views/Detail/index_Detail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "/",
          component: home,
        },
        {
          path: "/categroy/:id",
          component: categroy,
        },
        {
          path: "/categroy/sub/:id",
          component: subCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
    {
      // 匹配所有乱七八糟的、找不到的路径
      path: "/:pathMatch(.*)*",
      redirect: "/login", // 强制把他踢回首页
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
//前置路由守卫

export default router;
