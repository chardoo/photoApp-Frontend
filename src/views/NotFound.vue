<template>
  <v-app>
    <div>
      <p class="text-center header" color="primary">Sorry!!!</p>
    </div>
    <v-card class="not-found" flat></v-card>
    <div>
      <p class=" text-center" color="text-primary">That page cannot be found</p>
    </div>
    <div class="text-center">
        <v-btn color="primary1 white--text" small @click="returnHome">
          Return Back Home
        </v-btn>
    </div>
  </v-app>
</template>

<script>
import router from '../router/index';

export default {
    data(){
        return {

        }
    },
    methods:{
      returnHome(){
        router.push("/");  
        location.reload(); 
      }
    }
}
</script>

<style scoped>
.not-found {
  background: #cf4f1f;
  background-position: center;
  background-size: cover;
  min-height: 70%;
}

.header {
  font-size: 2.2rem;
  font-weight: 600;
}
p {
  color: #cf4f1f;
  font-size: 1.8rem;
}
</style>
