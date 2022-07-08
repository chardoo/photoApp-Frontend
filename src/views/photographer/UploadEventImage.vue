<template>
 <v-container fluid class="primary test pa-0">
   <Bar/>
    <div>
    
      <div class="signupSection">
  <div class="info">
    
  </div>
  <form action="#" method="POST" enctype="multipart/form-data" class="signupForm" name="signupform">
    <h2>Upload Event Images</h2>
    <ul class="noBullet">
      <li>
        <label for="Eveent name"></label>
        <input type="text" class="inputFields" v-model="eventName"  placeholder="Event name" value="" oninput="return userNameValidation(this.value)" required/>
      </li>
      <li>
        <label for="Price"></label>
        <input type="number" class="inputFields" v-model="price" placeholder="Price of Image" value="" oninput="return passwordValidation(this.value)" required/>
      </li>
      <li>
        <label for="date"></label>
        <input type="date" class="inputFields" v-model="date"  placeholder="DATE" value="" required/>
      </li>
        <li>
        <label for="file"></label>
       

                 

                  <input type="file" id="image" ref="file" multiple @change="handleFileUpload"/>
               <!-- <v-file-input
                 label="Passport image"
                 id="passportfile"
                 ref="passportfile"
                 multiple
                 filled 
                 :rules="fileRules"
                 accept="image/png, image/jpeg, image/bmp"
                 placeholder="please  select images"
                 prepend-icon="mdi-camera"
                 @change="handleFileUpload"
               ></v-file-input>
                                                     -->
      </li>
      
      
             <li>
         <button type="button" @click="uploadImages" class="submit">Upload</button>
             </li>
    </ul>
  </form>
</div>


    </div>
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
        image:'',
        price:'',
        eventName:'',
        eventDate:""
        }
    },
  methods:{
      
         handleFileUpload( event){
         this.image = event.target.files;
      },
      
    async  uploadImages(){
         let formData = new FormData()
        //  formData.append('files', this.image)
        //  formData.append('eventName', this.eventName)
           for (var i = 0; i < this.image.length; i++) {
        let file = this.image[i];
        formData.append("files[" + i + "]", file);
      }
         console.log('formdata',formData)

          await window.axios.post('/photographer/uploadImages', formData,{
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
      }

  
  }

})
</script>
<style lang="scss" scoped>


@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
* {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgb(231, 226, 226);
  background-repeat: no-repeat;
}

.signupSection {
  background: url(https://source.unsplash.com/TV2gg2kZD1o/1600x800);
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
}

.info {
  width: 45%;
  background: rgba(20, 20, 20, .8);
  padding: 30px 0;
  border-right: 5px solid rgba(30, 30, 30, .8);
  h2 {
    padding-top: 30px;
    font-weight: 300;
  }
  p {
    font-size: 18px;
  }
  .icon {
    font-size: 8em;
    padding: 20px 0;
    color: rgb(28, 32, 32);
  }
}

.signupForm {
  width: 70%;
  padding: 30px 0;
  background: rgba(213, 219, 219, 0.8);
  transition: .2s;
  h2 {
    font-weight: 300;
  }
}

.inputFields {
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid rgba(10, 180, 180, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, .2);
  color: white;
  outline: none;
}

.noBullet {
  list-style-type: none;
  padding: 0;
}

#join-btn {
  border: 1px solid rgba(10, 180, 180, 1);
  background: rgba(20, 20, 20, .6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: rgba(20, 20, 20, .8);
    padding: 10px 80px;
  }
}




</style>

      