// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
import Person from 'scorneye'
import App from './App'
import router from './router'
import Util from './api/Util.js'
Vue.config.productionTip = false
console.log(new Person(123).sayHello())
Vue.prototype.Util = Util
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

