import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'
import Cloudinary,{ CldImage, CldTransformation }  from "cloudinary-vue";
Vue.use(Cloudinary, {
  configuration: { cloudName: "ebrayce" },
  components: {
    CldImage,
    CldTransformation
  }
})
const options = {
  confirmButtonColor: '#10092e',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);
import {BASE_URL} from '../env'

window.axios = axios
axios.defaults.headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`}

// axios.defaults.headers = {'Content-Type': 'multipart/form-data' }
axios.defaults.baseURL = BASE_URL
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
