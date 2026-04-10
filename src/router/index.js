import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/index_login.vue";
import layout from "@/views/layout/index_layout.vue";
import home from "@/views/home/index_home.vue";
import categroy from "@/views/categroy/index_categroy.vue";
import subCategory from "@/views/subCategory/index_subCategory.vue";
import Detail from "@/views/Detail/index_Detail.vue";
import cartList from "@/views/cartList/index_cartList.vue";
import Checkout from "@/views/Checkout/index_Checkout.vue";
import pay from "@/views/pay/index_pay.vue";
import Member from "@/views/Member/index_Member.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";
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
          path: "categroy/:id",
          component: categroy,
        },
        {
          path: "categroy/sub/:id",
          component: subCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: cartList,
        },
        {
          path:'Checkout',
          component:Checkout
        },
        {
          path:'pay',
          component:pay
        },
        {
          path:'member',
          component:Member,
          children:[
            {
              path:'user',
              component:UserInfo
            },
            {
              path:'order',
              component:UserOrder
            },
          ]
        }
      ],
    },
    {
      path: "/login",
      component: Login,
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
