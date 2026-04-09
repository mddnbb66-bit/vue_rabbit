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
//删除购物车
export const deleteCartAPI = (ids)=>{
  return httpInstane(
    {
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
    }
  )
}
//合并购物车
export const hebingCartAPI = (data)=>{
  return httpInstane({
    url:"/member/cart/merge",
    method:"POST",
    data
  })
}
// 修改购物车商品状态 (单选/修改数量)
export const updateCartAPI = (skuId, data) => {
  return httpInstane({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data
  })
}

// 全选/取消全选购物车商品
export const checkAllCartAPI = (data) => {
  return httpInstane({
    url: '/member/cart/selected',
    method: 'PUT',
    data
  })
}
