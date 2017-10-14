// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from "element-ui";
import "../static/style.css";

import "element-ui/lib/index.js";
import "element-ui/lib/theme-default/index.css";
Vue.use(element)

import axios from "axios";
import vueAxios from "vue-axios";
Vue.use(vueAxios,axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
