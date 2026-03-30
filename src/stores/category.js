import { ref } from "vue";
import { defineStore } from "pinia";
// import  useCategoryStore  from "@/views/categroy/composables/usecategory";
import { getCreatAPI } from "@/apis/layout";
// import { onMounted } from "vue";
//数据导航管理
export const useCategoryStore = defineStore("Category", () => {
  let getList = ref([]);
  const CreatAPI = async () => {
    const res = await getCreatAPI();
    // console.log(res);
    getList.value = res.result;
    console.log(res.result);
  };

  return { CreatAPI, getList};
});
