<template>
  <div>
     <v-app-bar
      color="primary"
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title v-if="this.$router.history.current.path === '/photographerDashboard'" >Dashboard</v-toolbar-title>
   
       <v-toolbar-title v-if="this.$router.history.current.path === '/eventFolders'" >Event Folders  </v-toolbar-title>
       <!-- <v-toolbar-title v-if="this.$router.history.current.path === '/admin/agents'" >Agents</v-toolbar-title>
       <v-toolbar-title v-if="this.$router.history.current.path === '/admin/payments'" >Payments</v-toolbar-title>
       <v-toolbar-title v-if="this.$router.history.current.path === '/admin/recievers'" >Recievers</v-toolbar-title> -->
      <v-spacer></v-spacer> 
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      class="primary1"
      app
    >
      <v-list
        nav
        dense
        class="primary1 mt-16"
      >
        <v-list-item-group
          v-model="group"
          active-class="primary1--text text--accent-4"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            class="li my-3"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon" color="white"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
   
  </div>
   
  
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    
     data(){
      return{
          drawer: false,
         group: null,
          items: [
                {title:"Dashboard", icon: 'mdi-view-dashboard', to: "/photographerDashboard"},
                {title: 'Events Folders', icon: 'mdi-people', to: "/eventFolders"},
              //  {title: 'Payments', icon: 'mdi-people', to: "/admin/payments"},
              //  {title: 'Recievers', icon: 'mdi-account', to: "/admin/recievers"},
          

            ],
      }
    }
})
</script>
