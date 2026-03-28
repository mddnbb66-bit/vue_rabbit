<script setup>
import { onMounted, ref } from "vue";
import HomePanel from "./HomePanel.vue";
import { getNewAPI } from "@/apis/banner";
const newList = ref([]);
const NewAPI = async () => {
  let res = await getNewAPI();
  // console.log('mdd',res.result[0].name)
  newList.value = res.result;
};
onMounted(() => NewAPI());
</script>

<template v-solt="New">
  <HomePanel title="新鲜好物" subTitle="好就是好">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">¥{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
  <!-- 下面是插槽主体内容模版 -->
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
