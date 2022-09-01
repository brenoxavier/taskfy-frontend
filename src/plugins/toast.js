import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
  position: 'top-center',
  timeout: 3000,
  closeOnClick: false,
  draggablePercent: 0.35
})
