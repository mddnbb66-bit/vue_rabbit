import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/index_login.vue";
import layout from "@/views/layout/index_layout.vue";
import home from "@/views/home/index_home.vue";
import categroy from "@/views/categroy/index_categroy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "/home",
          component: home,
        },
        {
          path: "/categroy",
          component: categroy,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
