import { httpInstane } from "@/utils/http";
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
