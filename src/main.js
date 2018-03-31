// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Qform from './Qform'
import Cform from './Cform'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#Q-form',
  components: { Qform },
  template: '<Qform/>'
})

new Vue({
  el: '#C-form',
  components: { Cform },
  template: '<Cform/>'
})

document.querySelectorAll('.code')[0].appendChild(document.createTextNode('</>'))
document.querySelectorAll('.code')[1].appendChild(document.createTextNode('</>'))
