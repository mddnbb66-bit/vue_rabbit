import { httpInstane } from "@/utils/http";
export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return httpInstane({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

//新鲜好物API

export function getNewAPI() {
  return httpInstane({
    url: "/home/new",
  });
}
//人气推荐
export function getHotAPI() {
  return httpInstane({
    url: "/home/hot",
  });
}
//商品界面
export function getGoodsAPI() {
  return httpInstane({
    url: "home/goods",
  });
}
//面包屑导航
export function getNavAPI(id) {
  return httpInstane({
    url: "/category/",
    params: {
      id,
    },
  });
}
//2级路由
export const getCategoryFilterAPI = (id) => {
  return httpInstane({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
//2级路由的商品详情API
/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstane({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
