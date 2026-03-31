import httpInstane from "@/utils/http";

export function getDetailAPI(id) {
  return httpInstane({
    url: "/goods",
    params: {
      id,
    },
  });
}
