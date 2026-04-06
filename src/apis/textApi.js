import { httpInstane } from "@/utils/http";

export function textget() {
  return httpInstane({
    url: "home/category/head",
  });
}
