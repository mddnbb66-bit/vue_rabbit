// banner_hook
import { getBannerAPI } from "@/apis/banner";
import { ref, onMounted } from "vue";
export function usebanner() {
  const bannerList = ref([]);

  const getbanner = async () => {
    const res = await getBannerAPI({ distributionSite: "2" });
    console.log("dsdsdasd", res.result);
    bannerList.value = res.result;
  };
  onMounted(() => getbanner());

  return {
    bannerList,
  };
}
