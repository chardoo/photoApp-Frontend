<template>
  <v-container fluid class=" black">
    <v-app-bar height="80" dense color="black" dark>
      <template>
        <v-tabs  centered>
          <v-tab>Home</v-tab>
          <v-spacer></v-spacer>
          <v-tab  @click.stop="loginDialog = true">Login</v-tab>
          <v-tab @click.stop="registerDialog = true">signUp</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-dialog v-model="loginDialog" max-width="600">
      <v-card width="800">
         <h2>Picco </h2>
        <label>
          <span>Email</span>
          <input type="email" v-model="emailLogin" required />
        </label>
        <label>
          <span>Password</span>
          <input type=" password" required v-model="passwordLogin" />
        </label>
        <p class="forgot-pass">Forgot password?</p>
        <v-btn color=" orange" @click="login" class="submit">Sign In</v-btn>
         <label>
          <p>Need an Account?  <span><a class="forgettext" @click="registerform"> Create One </a></span></p> 
         </label>
        
        <!-- <button type="button" class="fb-btn">
          Connect with <span>facebook</span>
        </button> -->

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary1 darken-1" text @click="loginDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="registerDialog" max-width="600">
      <v-card width="800">
        <h2>Create Account with Us,</h2>
        <label>
          <span>Company Name</span>
          <input type="text" v-model="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" required v-model="email" />
        </label>
       
          <label>
            <span>Contact</span>
            <input type="text" v-model="contact" />
          </label>
           <label>
          <span>Password</span>
          <input type="password" v-model="password" required />
        </label>
        <button type="button" @click="register" class="submit">Sign Up</button>
         <label>
           <p class="">By signing up you are agreeing with our  </p>
         </label>
          <label>
             
          <a class="forgettext" @click="loginformdialog"> Terms and Condition </a>
          </label>
            
         
         <label>
          <p>Already have Account?  <span><a class="forgettext" @click="loginformdialog"> Login </a></span></p> 
         </label>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary1 darken-1" text @click="registerDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-col cols="12" class="white--text  mt-15" > 
      <!-- <div class="mygrid">
        <div> jhgjhjgghgh</div>
        <div>kjhhkjhkjhkjh<v-img src="https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_960_720.jpg"></v-img></div>
      </div> -->
      <v-row>
        <v-col cols="12" md="6">hjgghg</v-col>
        <v-col cols="12" md="6">
          
          <v-img src="https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_960_720.jpg"> 
            <h1 class="mx-auto">hehrhejejrh</h1>
          </v-img>
        </v-col>
      </v-row>
         
    </v-col>
    <Footer/>
    
  </v-container>
  <!-- <div class="cont">
  <div class="form sign-in">
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input type="email" v-model="emailLogin" required />
    </label>
    <label>
      <span>Password</span>
      <input type=" password"  required v-model="passwordLogin" />
    </label>
    <p class="forgot-pass">Forgot password?</p>
    <button type="button" @click="login" class="submit">Sign In</button>
    <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
  </div>
  <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>SignUp here?</h2>
        <p>Sign up if you don't have an account</p>
      </div>
      <div class="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. it's been a while</p>
      </div>
      <div @click="michealfunction" class="img__btn">
        <span class="m--up">Sign Up</span>
        <span class="m--in">Sign In</span>
      </div>
    </div>
    <div class="form sign-up">
      <h2>Create Account with Us,</h2>
      <label>
        <span>Name</span>
        <input type="text" v-model="name" required/>
      </label>
      <label>
        <span>Email</span>
        <input type="email" required v-model="email"/>
      </label>
      <label>
        <label>
        <span>Contact</span>
        <input type="text" v-model="contact" />
      </label>
        <span>Password</span>
        <input type="password" v-model="password" required />
      </label>
      <button type="button" @click="register" class="submit">Sign Up</button>
      <button type="button" class="fb-btn">Join with <span>facebook</span></button>
    </div>
  </div>
</div>



 <div>


   
 </div>

  




   </div> -->
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import router from "../../router/index";
import Footer from "../../components/Footer.vue"
// import { setAuthToken } from '../services/auth'
//import $ from "jquery";
export default defineComponent({
  components: {
    Footer
    // $
  },
  data() {
    return {
      registerDialog: false,
      loginDialog: false,
      email: "",
      emailLogin: "",
      passwordLogin: "",
      emailRules: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
      password: "",
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },

      name: "",
      contact: "",

      agentId: "",
      isLoggedIn: false,
      errorMsg: "Invalid credentials",
      loadingBtn: false,
      loading: false,
      isError: false,
    };
  },
  methods: {
    registerform(){
      this.loginDialog = false
     this.registerDialog =true
      
    },
    loginformdialog(){
         this.loginDialog = true
     this.registerDialog =false

    },
    michealfunction() {
      document.querySelector(".cont").classList.toggle("s--signup");
    },
    login() {
      let payload = {
        email: this.emailLogin,
        password: this.passwordLogin,
      };
      this.loadingBtn = true;
      window.axios
        .post("/photographer/login", payload)
        .then((result) => {
          console.log("hererrhjer", result);
          if (result.statusText == "OK") {
            //  setAuthToken(result.data.token)
            this.$store.dispatch(
              "authentication/setCurrentUserInState",
              result.data
            );
            this.$store.dispatch("authentication/setIsLoggedIn", result.data);
            this.$store.commit(
              "authentication/SET_USER_ROLE_IN_STATE",
              result.data
            );
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("email", result.data.email);
            localStorage.setItem("role", result.data.role);
            localStorage.setItem("userId", result.data.id);
            this.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", this.isLoggedIn);
            if (result.data.role === "photographer") {
              router.push(`/photographerDashboard`);
              location.reload();
            }
          }
        })
        .catch((error) => {
          this.loadingBtn = false;
          this.isError = true;
          this.errorMsg = error.response.data.data[0].message
            ? (this.errorMsg = error.response.data.data[0].message)
            : "Invalid credentials";
        });
    },
    register() {
      let payload = {
        name: this.name,
        contact: this.contact,
        email: this.email,
        password: this.password,
      };

      console.log(payload);
      this.loadingBtn = true;
      window.axios
        .post("/photographer/createphtographer", payload)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          this.loadingBtn = false;
          this.isError = true;
          this.errorMsg = error.response.data.data[0].message
            ? (this.errorMsg = error.response.data.data[0].message)
            : "Invalid credentials";
        });
    },
  },
  computed: {
    valid: function () {
      if (this.password && this.email) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted: function () {
    this.token = localStorage.getItem("token");
    if (this.token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
});
</script>

<style lang="scss" scoped>

.mygrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
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




body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  background: #ededed;
}

input,
button {
  border: none;
  outline: none;
  background: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: ($contW - $imgW) / $contW;

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  position: relative;
  width: $contW;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: $formW;
  height: 100%;
  transition: transform $switchAT ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1, 0, 0);
  }
}

button {
  display: block;
  margin: 0 auto;
  width: $inputW;
  height: $btnH;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.forgettext{
  color: #bb3748;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url("../../assets/landing.jpg");
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW, 0, 0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {
      @include signUpActive {
        transform: translateX($imgW * 2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;

    &:after {
      content: "";
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;

      &.m--in {
        transform: translateY($btnH * -2);

        @include signUpActive {
          transform: translateY(0);
        }
      }

      &.m--up {
        @include signUpActive {
          transform: translateY($btnH * 2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: $inputW;
  margin: 15px auto 0;
  text-align: left;

  span {
    font-size: 12px;
    color: #cfcfcf;
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

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #db0d0d;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #bb3748;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: darken(#d3dae9, 20%);

  span {
    font-weight: bold;
    color: darken(#768cb6, 20%);
  }
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW, 0, 0);
  }
}

.sign-up {
  transform: translate3d($contW * -1, 0, 0);

  @include signUpActive {
    transform: translate3d(0, 0, 0);
  }
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;

  img {
    width: 100%;
    vertical-align: top;
  }

  &--twitter {
    left: auto;
    right: 5px;
  }
}
</style>
