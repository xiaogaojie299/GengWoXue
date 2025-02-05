import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import plugins from "./components/common/index";
import { myAlert, myMessage } from "./utils/prototype";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.prototype.$myAlert = myAlert;
Vue.prototype.$myMessage = myMessage;
Vue.prototype.$EventBus = new Vue();
Vue.prototype.$preview = function(url) {
  window.open("http://view.officeapps.live.com/op/view.aspx?src=" + url);
};
Vue.use(ElementUI);
Vue.use(plugins);
let vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
export default vue;
