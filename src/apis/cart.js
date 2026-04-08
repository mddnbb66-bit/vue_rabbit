//封装接口购物车

import { httpInstane } from "@/utils/http";
//添加购物车
export const insertCartAPI = ({skuId,count})=>{
  return httpInstane({
    url:'/member/cart',
    method:'POST',
    data:{
      skuId,
      count,
    }
  })
}
//获取最新购物车
export const findNewCartAPI = ()=>{
  return httpInstane({
    url:'/member/cart'
  })
}
