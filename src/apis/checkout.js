import { httpInstane } from "@/utils/http"

export const getCheckInfoAPI = ()=>{
  return httpInstane({
    url:'/member/order/pre'
  })
}
