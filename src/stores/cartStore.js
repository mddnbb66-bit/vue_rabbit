//购物车模块

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { findNewCartAPI,insertCartAPI } from "@/apis/cart";
export const useCartStore = defineStore(
  "cart",
  () => {
    //定义state
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    const cartList = ref([]);
    //1,添加购物车
    //如果有count就+1，没有就push一下
    const addCart = async (goods) => {
      goods.count = Number(goods.count);
      if(isLogin.value){{
        const {skuId,count} = goods
        //接口购物车逻辑
        //1，给后端传种类和数量，然后后端自己加，看那1不到，反正返回和并之后的值
        await insertCartAPI({skuId,count})
        //2.拉下来最新的列表
        const res = await findNewCartAPI()
        //3.用新的覆盖旧的
        cartList.value = res.result
      }}
      else{
          // / 思路: 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到, item是老的
      // goods 是你从外面传进来的固定目标（你点击添加购物车时），而 item 是 find 内部自己生成的轮询替身（购物车里原有的商品）
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        item.count += goods.count;
      } else {
        goods.count = goods.count;
        cartList.value.push(goods);
      }
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
    // 小购物车图标里面的数据  需要单独显示
    const allCount = computed(() => cartList.value.reduce((num, c) => num + c.count, 0));
    const priceCount = computed(() =>
      cartList.value.reduce((sum, c) => sum + c.count * c.price, 0),
    );
    //结算界面里面的数据  需要单独显示
    const selectCount = computed(() =>
      cartList.value.filter((item) => item.selected === true)?.reduce((num, c) => num + c.count, 0),
    );
    const selectPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected === true)
        ?.reduce((sum, c) => sum + c.count * c.price, 0),
    );
    const isAll = computed(() => cartList.value.every((item) => item.selected === true));
    //单选逻辑
    const single = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      if (item) {
        item.selected = selected;
      }
    };
    //全选逻辑
    const selectAll = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };
    return {
      selectAll,
      isAll,
      single,
      allCount,
      priceCount,
      selectCount,
      selectPrice,
      cartList,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  },
);
