import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { lazyimg } from "./directives/lazy";
//引入全局样式
import "@/styles/common.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyimg);

//全局指令

app.mount("#app");
