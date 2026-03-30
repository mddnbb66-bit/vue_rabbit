// category_hook
import { getNavAPI } from "@/apis/banner";
import { onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export function usecategory() {
  const router = useRoute();
  const categoryData = ref({});
  const NavAPI = async (id = router.params.id) => {
    const res = await getNavAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => NavAPI());
  //更新响应式
  onBeforeRouteUpdate((to) => {
    // console.log(` 路由变了`)
    NavAPI(to.params.id);
  });

  return {
    categoryData,
  };
}
