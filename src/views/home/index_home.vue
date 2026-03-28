<template>
  <div class="container">
    <HomeBanner />
    <HomeCategory />
  </div>

  <HomeHot />
  <HomeNew />
  <HomeProduct />
  <!-- //新鲜好物和人气推荐 -->
  <!-- <Homepanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱" name="New"> </Homepanel>
  <Homepanel title="人气推荐" sub-title="人气爆款 不容错过" name="Hot"> </Homepanel> -->
</template>

<script setup lang="ts">
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
// import Homepanel from "./components/HomePanel.vue";
</script>

<style></style>
