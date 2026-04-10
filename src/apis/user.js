import { httpInstane } from "@/utils/http";
//登录API
export const loginAPI = ({ account, password }) => {
  return httpInstane({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
//猜你喜欢API4
export const getLikeListAPI = ({limit= 4})=>{
  return httpInstane({
    url:'/goods/relevant',
    params:{
      limit
    }
  })
}
