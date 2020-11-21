import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import plugins from "./components/common/index"
import myAlert from "./utils/prototype"
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.prototype.$myAlert=myAlert;
Vue.prototype.$EventBus=new Vue()
Vue.use(ElementUI);
Vue.use(plugins)
let vue= new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
export default vue
