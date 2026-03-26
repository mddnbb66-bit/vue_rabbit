import httpInstane from "@/utils/http";
export function getBannerAPI() {
  return httpInstane({
    url: "/home/banner",
  });
}
