<template>
  <div class="container">
    <HomeBanner />
    <HomeCategory />
  </div>
   <HomeNew />
  <HomeHot />

  <HomeProduct />
  <!-- //新鲜好物和人气推荐 -->

</template>

<script setup lang="ts">
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
import Homepanel from "./components/Homepanel.vue";
</script>

<style></style>
