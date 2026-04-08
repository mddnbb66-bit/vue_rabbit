import { httpInstane } from "@/utils/http"

//詳情界面的接口
export const getCheckInfoAPI = ()=>{
  return httpInstane({
    url:'/member/order/pre'
  })
}
//創建訂單
export const createOrderAPI = (data)=>{
  return httpInstane({
    url:'/member/order',
    method:"POST",
    data:data
  })
}
