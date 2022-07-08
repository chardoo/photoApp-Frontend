<template>
 <v-container fluid class="white test pa-0">
   <Bar/>
   <v-col cols="12" class=" white ml-25 mt-15">
            
                <v-row dense class="v-card--material-stats mr-2 ml-2 mb-5 primary--text">
                 <v-col cols="6"
                           sm="6"
                           lg="2"
                           md="2">
                   <v-card elevation="10"  height="60" >
                       <h3 class=" ml-3 text--primary1"> Amt. Disbursed </h3>  
                          <h2 class="ml-3" style="color:purple, ">{{amountSpent}}</h2>
                  </v-card> 
                </v-col>
               
                
                </v-row>
   </v-col>
   <div style="height:100%">
     
   </div>
     <Footer/>
 </v-container>
</template>
   
<script>
import { defineComponent } from '@vue/composition-api'
import Bar from '@/components/SideBar.vue'
import Footer from "../../components/Footer.vue"

export default defineComponent({
    components:{
        Bar,
        Footer
        
    },
  


})
</script>
<style scoped>
.container,
.container-row {
  height: 100%;
  width: 100%;
}
.avatar-id {
  border: 1px solid #dd5928;
}
.small {
  max-width: 650px;
}
</style>
    

      