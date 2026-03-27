<template>

  <div class="container">
  <HomeBanner/>
  <HomeCategory />
  </div>

  <HomeHot/>
  <HomeNew/>
  <HomeProduct/>
  <!-- //新鲜好物和人气推荐 -->
   <Homepanel title="人气推荐" subTitle="新鲜出炉">

   </Homepanel >
   <Homepanel title="新鲜好物" subTitle="好就是好">

   </Homepanel>

</template>

<script setup lang="ts">
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
import Homepanel from './components/Homepanel.vue';
</script>

<style></style>
