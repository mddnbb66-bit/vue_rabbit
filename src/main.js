import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";

import { lazyimg } from "./directives/lazy";
//引入全局样式
import "@/styles/common.scss";
const app = createApp(App);
//引入持久化数据
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(lazyimg);

//全局指令

app.mount("#app");
