import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// on peut inclurer un CSS au format SASS
require('./assets/sass/main.scss')

new Vue({
  render: h => h(App),
}).$mount('#app')
