import Vue from 'vue'
import VueRouter from 'vue-router'
import Login  from '../views/photographer/AgentLogin.vue'
import photoDashboard from '../views/photographer/Dashboard.vue'

import EventFolder from '../views/photographer/EventFolders.vue'
import allEventImages from  '../views/photographer/EventImages.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/photographerDashboard',
      name: 'photoDashboard',
      component: photoDashboard,
    },
    // {
    //   path: '/UploadEventImage',
    //   name: 'UploadEventImage',
    //   component: UploadEventImage,
    // },
    {
      path: '/eventFolders',
      name: 'Folders',
      component: EventFolder,
    },
    {
      path: '/eventImages/:eventName',
      name: 'AllEventImages',
      component: allEventImages,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router