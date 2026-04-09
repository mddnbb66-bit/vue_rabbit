import { httpInstane } from "@/utils/http"

export const getorderAPI = (id)=>{
  return httpInstane({
    url: `member/order/${id}`
  })
}
