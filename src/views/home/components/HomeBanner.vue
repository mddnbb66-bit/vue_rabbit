
<script setup>
import { getBannerAPI } from '@/apis/banner';
import { onMounted,ref } from 'vue';

const bannerList = ref([])

const getbanner = async ()=>{
  const res = await getBannerAPI()
  // console.log('dsdsdasd',res.result)
  bannerList.value = res.result
}

onMounted(()=> getbanner() )
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
```

这个代码可以**直接保存为.vue文件运行**，没有任何转义字符，结构干净完整。
