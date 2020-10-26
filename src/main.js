import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import plugins from "./components/common/index"
import "element-ui/lib/theme-chalk/index.css";
import "lib-flexible/flexible.js";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(plugins)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
