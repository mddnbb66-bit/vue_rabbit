import httpInstane from "@/utils/http";
export function getBannerAPI() {
  return httpInstane({
    url: "/home/banner",
  });
}





//新鲜好物API

export function getNewAPI(){
  return httpInstane({
    url: '/home/new'
  }
  )
}
