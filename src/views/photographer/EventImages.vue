<template>
 <v-container fluid class="white test pa-0">
   <Bar/>
   
    <v-col cols="12" class="mt-15">
     <v-row cols-12 class="mt-5">
          <v-toolbar-title  class="ml-5 h-2 ">Event Name Here</v-toolbar-title>           
     </v-row>
          <v-divider></v-divider>
       <v-row class="ml-0 mr-5 mt-5">
         <v-col
           v-for="n in images"
           :key="n.id"
           class="d-flex child-flex"
           cols="12"
           sm="6"
           lg="3"
         >
         <v-card elevation="8" class="mx-auto" >
           <v-img
             :src="`${n.url}`"
             :lazy-src="`${n.url}`"
             max-height="300px"
             
             class="grey lighten-2"
           >
             <template v-slot:placeholder>
               <v-row
                 class="fill-height ma-0"
                 align="center"
                 justify="center"
               >
                 <v-progress-circular
                   indeterminate
                   color="grey lighten-5"
                 ></v-progress-circular>
               </v-row>
             </template>
           </v-img>
     
           <v-card-title >
             Price  GHC:   {{n.price}}
             <v-spacer></v-spacer>
             <v-menu
                  bottom
                     left
                     transition="slide-y-transition"
                   >
                     <template v-slot:activator="{ on, attrs }">
                       <v-btn
                         icon
                         v-bind="attrs"
                         v-on="on"
                       >
                         <v-icon color="red">mdi-dots-vertical</v-icon>
                       </v-btn>
                     </template>
                     <v-list>
                       <v-list-item @click="isUpdating = true">
                         <v-list-item-action @click="DeleteEvent(n.id, n.imageId)">
                           <v-icon>mdi-delete</v-icon>
                         </v-list-item-action>
                         <v-list-item-content>
                           <v-list-item-title @click="DeleteEvent(n.id, n.imageId)">Delete</v-list-item-title>
                         </v-list-item-content>
                       </v-list-item>
                     </v-list>
                   </v-menu> 
                    <v-dialog v-model="dialogDelete" max-width="600px">
                     <v-card>
                       <v-card-title class="text-h7">Confirm to Delete this Image?</v-card-title>
                       <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                         <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
                         <v-spacer></v-spacer>
                       </v-card-actions>
                     </v-card>
                   </v-dialog>
                                              
             </v-card-title>
         </v-card>
         </v-col>
       </v-row>
    </v-col>
 </v-container>
</template>
   
<script>
import { defineComponent } from '@vue/composition-api'
import Bar from '@/components/SideBar.vue'


export default defineComponent({
    components:{
        Bar
        
    },
     data(){
        return{
           images:[],
           eventName: this.$route.params.eventName,
           dialogDelete:false,
           id:'',
           imageId:''
            
        }
    },
    
    methods:{
       DeleteEvent(id, imageId){

         this.dialogDelete = true
         this.id =  id
         this.imageId = imageId
      },
      close () {
      this.dialogDelete = false
      },
      closeDelete () {
        this.dialogDelete = false
      },
      deleteItemConfirm(){
        let payload = {
          "id": this.id,
          "imageId": this.imageId,
          "userId": localStorage.getItem("userId")
        }
        
      window.axios.post(`/photographer/deleteImage/${this.id}`, payload)
        .then((result) => {
           console.log(result)
           location.reload(); 
        }).catch((error) => {
          console.log(error)
     
        });
      this.dialogDelete = false


      }

     
    },
   

    beforeMount(){
        let payload = {
            "userId": localStorage.getItem("userId"),
            "eventName": this.eventName
        }
        console.log("this load",payload)
        window.axios.post(`/photographer/images/${this.eventName}`, payload)
          .then((result) => {
              this.images =[...result.data]
          }).catch((error) => {
            console.log(error)
          });
     

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
    
      