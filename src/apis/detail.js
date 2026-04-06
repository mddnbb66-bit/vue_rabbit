import { httpInstane } from "@/utils/http";
//详情
export function getDetailAPI(id) {
  return httpInstane({
    url: "/goods",
    params: {
      id,
    },
  });
}
//hot
export const getDetailHotAPI = ({ id, type, limit = 3 }) => {
  return httpInstane({
    url: "goods/hot",
    params: {
      id,
      type,
      limit,
    },
  });
};
