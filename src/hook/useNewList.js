import { findNewCartAPI,insertCartAPI,deleteCartAPI } from "@/apis/cart";

export const useNewList =()=>{
  const upDateList = async(cartList)=>{
        //2.拉下来最新的列表
        const res = await findNewCartAPI()
        //3.用新的覆盖旧的
        cartList.value = res.result

  }

  return {
    upDateList
  }
}
