<script setup>
import { getDetailHotAPI } from "@/apis/detail";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const hotList = ref([]);
//传参分化
const props = defineProps({
  hotGoods: {
    type: Number,
  },
});
const banduan = {
  1: "24h榜",
  2: "周榜",
};
const title = computed(() => banduan[props.hotGoods]);
//详情hot调用
const getDetailHot = async () => {
  const res = await getDetailHotAPI({
    id: route.params.id,
    type: props.hotGoods,
  });
  hotList.value = res.result;
};
onMounted(() => getDetailHot());
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img alt="" v-img-lazy="item.picture" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
