import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useIntersectionObserver } from "@vueuse/core";
import { shallowRef, useTemplateRef } from "vue";
//引入全局样式
import "@/styles/common.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);


//全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    const {stop } = useIntersectionObserver(el, ([entry]) => {
      if (entry.isIntersecting) {
        el.src = binding.value;
        stop()
      }
    });
  },
});

app.mount("#app");
