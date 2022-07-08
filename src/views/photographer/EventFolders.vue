<template>
  <v-container fluid class="white test pa-0">
    <Bar />

    <v-col cols="12" class="mytopmargin">
      <v-row cols-12 class="mt-5">
        <v-toolbar-title class="ml-5 h-2">Events</v-toolbar-title>
        
        <v-spacer></v-spacer>
        <v-btn @click.stop="UploadDialog = true" class="red">New Event</v-btn>
          
           <v-dialog v-model="UploadDialog" max-width="600">
      <v-card width="800">
        <h2>Upload Event Images</h2>
        <label>
          <span>Event Name</span>
          <input type="text" placeholder="Enter the name of the event" v-model="eventName" required />
        </label>
        <label>
          <span>Price</span>
          <input type="number" placeholder="Enter the price of each image"  v-model="price"  value="" oninput="return passwordValidation(this.value)" required/>
        </label>
        
          <label>
            <span>Event Date</span>
            <input type="date" placeholder="The day of the event" v-model="date"  />
          </label>
          <label>
          <span>Upload files</span>
          <input class="myfile" type="file" id="image" ref="file" multiple @change="handleFileUpload" />
         </label>
         
                
          <v-card-actions>
            
          <v-spacer></v-spacer>
           <v-btn elevation="5" class="red"  @click="uploadImages" >Save</v-btn > 
          <v-btn  elevation="5" color="primary1 darken-1" text @click="UploadDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      </v-row>
      <v-divider></v-divider>
      <v-row class="ml-0 mr-5 mt-5">
        <v-col
          v-for="n in items"
          :key="n.eventName"
          class="d-flex child-flex"
          cols="12"
          md="3"
          lg="2"
          sm="6"
        >
          <v-card elevation="8" class="ml-3">
            <v-img
              @click="clicked(n.eventName)"
              :src= "n.url"
              height="300px"
            ></v-img>

            <v-card-title class="ml-5 mb-0" @click="clicked(n.eventName)">
              {{ n.eventName }}
            </v-card-title>
            <v-card-actions class="mt-0">
              <v-card-subtitle class="mt-1">
                1,000 miles of wonder
              </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-menu bottom left transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="red">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="isUpdating = true">
                    <v-list-item-action @click="DeleteEvent(n.eventName)">
                      <v-icon>mdi-delete</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title @click="DeleteEvent(n.eventName)"
                        >Delete</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-dialog v-model="dialogDelete" max-width="600px">
                <v-card>
                  <v-card-title class="text-h7"
                    >Are you sure Delete Every Image related to this
                    event?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="primary" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>

            
            <!-- <v-row>
                    <v-card
                      class="ml-4"
                      @click="clicked(n.eventName)"
                      elevation="0"
                      height="30"
                    >
                      <h3 class="ml- mt-1 text--primary1">{{ n.eventName }}</h3>
                    </v-card>

                    <v-spacer></v-spacer>
                    <v-menu bottom left transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="isUpdating = true">
                          <v-list-item-action @click="DeleteEvent(n.eventName)">
                            <v-icon>mdi-delete</v-icon>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title @click="DeleteEvent(n.eventName)"
                              >Delete</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-row>
                  <v-dialog v-model="dialogDelete" max-width="600px">
                    <v-card>
                      <v-card-title class="text-h7"
                        >Are you sure Delete Every Image related to this
                        event?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn color="primary" text @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog> -->
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Bar from "@/components/SideBar.vue";

export default defineComponent({
  components: {
    Bar,
  },
  data() {
    return {
      UploadDialog:false,
      items: [],
      eventName: "",
      price: null
    };
  },

  methods: {
    clicked(eventName) {
      this.$router.push({ path: `/eventImages/${eventName}` });
    },

    DeleteEvent(eventName) {
      this.dialogDelete = true;
      this.eventName = eventName;
    },
    close() {
      this.dialogDelete = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteItemConfirm() {
      let payload = {
        eventName: this.eventName,
        userId: localStorage.getItem("userId"),
      };

      window.axios
        .post(`/client/payForImages`, payload)
        .then((result) => {
          console.log(result);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });

      this.dialogDelete = false;
    },

        handleFileUpload( event){
         this.image = event.target.files;
        
      },
      
     async uploadImages(){
         let formData = new FormData()
      //    for (var i = 0; i < this.image.length; i++) {
      //        let file = this.image[i];
      //       await formData.append("files[" + i + "]", file);
      // } 
        //  formData.append("files", this.image)
         formData.append("eventName", this.eventName)
         formData.append("price", this.price)
        formData.append("files", this.image);
         console.log('formdata',formData)

       window.axios.post('/photographer/uploadImages', formData)
      }

  },

  beforeMount() {
    let payload = {
      userId: localStorage.getItem("userId"),
    };
    window.axios
      .post("/photographer/eventFolders", payload)
      .then((result) => {
        this.items = [...result.data];
        console.log("items", this.items)
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>


<style lang="scss" scoped>

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


.container, .container-row{
    height: 100%;
    width: 100%;
}
.avatar-id {
   border: 1px solid #DD5928; 
}
  .small {
    max-width: 650px;
  }
 
 h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 15px auto 0;
  text-align: left;

  span {
    font-size: 12px;
    color: #b1aeae;
    text-transform: uppercase;
  }
}

input {
  display: block;
  width: 100%;
  margin-top: 2px;
  padding-bottom: 20px;
  font-size: 16px;
  border-block-end: 1px solid rgba(231, 18, 18, 0.4);
  text-align: center;
  background-color: #f6f7fa;

}
.myfile{
  display: block;
  width: 100%;
  margin-top: 2px;
  padding-bottom: 20px;
  font-size: 16px;
  // border-top: 1px solid rgba(0, 0, 0, 0.4);
  border: none ;
  text-align: center;
}
.mytopmargin{
  margin-top: 80px !important;
}



</style>
