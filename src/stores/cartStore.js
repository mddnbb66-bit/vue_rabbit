//购物车模块

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    //定义state
    const cartList = ref([]);
    //1,添加购物车
    //如果有count就+1，没有就push一下
    const addCart = (goods) => {
      // / 思路: 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到, item是老的
      // goods 是你从外面传进来的固定目标（你点击添加购物车时），而 item 是 find 内部自己生成的轮询替身（购物车里原有的商品）
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        item.count += goods.count;
      } else {
        cartList.value.push(goods);
      }
    };
    //2，删除购物车
    const delCart = (skuId) => {
      //splice删除
      // const ind = cartList.value.findIndex((item) => (item.skuId === skuId));
      // cartList.value.splice(ind, 1);
      //fliter 留存
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
    };
    //统计计算
    //计算属性
    const allCount = computed(() => cartList.value.reduce((num, c) => num + c.count, 0));
    const priceCount = computed(() =>
      cartList.value.reduce((sum, c) => sum + c.count * c.price, 0),
    );

    return {
      allCount,
      priceCount,
      cartList,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  },
);
