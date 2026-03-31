<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/banner";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import GoodsItem from "../home/components/GoodsItem.vue";

//一级路由的面包屑
const categoryData = ref({});
const route = useRoute();
const getCategoryFilter = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  categoryData.value = res.result;
  console.log(res.result, "sdasdsddsdad");
};
onMounted(() => getCategoryFilter());
//获取基础列表数据渲染
const goodList = ref([]);
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});

const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqData.value);
  // console.log(`1145`,res.result)
  // console.log(`1145`,res)
  goodList.value = res.result.items;
};
//table切换
function tabchange() {
  console.log(`tab切换了`, reqData.value.sortField);
  reqData.value.page = 1;
  goodList.value = [];
  isFinally.value = false; // 重置断水锁
  isloading.value = false; // 重置防抖锁
  getSubCategory();
}
onMounted(() => getSubCategory());
//无限滚动
//加载锁和完成锁
const isFinally = ref(false); //已完成

const isloading = ref(false); //在加载
const load = async () => {
  if (isFinally.value || isloading.value) {
    return;
  }
  isloading.value = true; //上锁
  reqData.value.page++;
  console.log("🔥 触发了 end-reached！");
  try {
    const res = await getSubCategoryAPI(reqData.value);
    if (res.result.items.length === 0) {
      isFinally.value = true;
      return;
    } else goodList.value = [...goodList.value, ...res.result.items];
  } finally {
    isloading.value = false;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/categroy/${categoryData.parentId}` }">
          {{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <!-- //商品列表 -->
      <el-scrollbar height="1200px" @end-reached="load">
        <div class="body">
          <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    height: 300px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
