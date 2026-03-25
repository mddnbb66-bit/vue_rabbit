import httpInstane from "@/utils/http";
export function getCreatAPI() {
  return httpInstane({
    url: "/home/category/head",
  });
}
