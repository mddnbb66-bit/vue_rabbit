import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { textget } from "./apis/textApi";
//引入全局样式
import "@/styles/common.scss";
const app = createApp(App);
//测试

textget().then((value) => console.log(value));
app.use(createPinia());
app.use(router);

app.mount("#app");
