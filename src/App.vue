<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- <el-button type="primary">Primargiy</el-button> -->
  <!-- //一级路由出口 -->
  <RouterView />
  <div class="test">sdads</div>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
