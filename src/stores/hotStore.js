import {  ref } from "vue";

import { getNewAPI } from "@/apis/banner";
export const useHotStore = ()=>{
  const newList = ref([]);
const NewAPI = async () => {
  let res = await getNewAPI();
  // console.log('mdd',res.result[0].name)
  newList.value = res.result;
  console.log(`new`,newList.value)
};
  return {
   newList,
    NewAPI
  }
}
