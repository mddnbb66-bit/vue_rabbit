import httpInstane from "@/utils/http";
export function getBannerAPI() {
  return httpInstane({
    url: "/home/banner",
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
