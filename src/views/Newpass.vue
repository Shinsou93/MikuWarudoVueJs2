<template>
  <div class="register">
    <myNavbarLog />

    <div class="imagedefondlog">
      <img src="../assets/Hatsunefond5.jpg" alt="mikuwelcome" />
    </div>

    <form  @submit.prevent="submit" class="formulairereg">
      <h1>NOUVEAU MOT DE PASSE</h1>
      
      <p>Password:</p>
      <input
        name="password"
        type="password"
        id="password"
        v-model.trim="$v.password.$model" :class="{'is-invalid': validationStatus($v.password)}" />
        <div v-if="!$v.password.required"  class="invalid-feedback">Veuillez entrer un Mot De Passe.</div>
        <div v-if="!$v.password.minLength"  class="invalid-feedback">Le Mot de Passe doit comporter 4 caractères minimum.</div>
        <div v-if="!$v.password.maxLength"  class="invalid-feedback">Le Mot de Passe doit comporter 20 caractères maximum.</div>
        
     
      <br />

      <div class="optionsup">
        <a href="/register" class="login">Pas de Compte ? S'inscrire</a>
      </div>
      
      <button  type="submit" class="start">
        Envoyer
      </button>
      
      

      <h2 class="sendmailnotif">
        Un mail vous sera envoyé<br/>pour réinitialiser<br/>votre mot de passe !
      </h2>
    </form>

    <myFooter />
  </div>
</template>

<script>
import myNavbarLog from "../components/navbarlog.vue";
import myFooter from "../components/myfooter.vue";

import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  name: "Newpass",

  data() {
    return {
        password: '',
        forget: this.$route.params.forget,
    };
  },
  validations: {
      
      password: {
          required,
          minLength: minLength(4), maxLength: maxLength(20)
      },
      
  },

  methods: {

    validationStatus: function(validation){
      return typeof validation != "undefined" ? validation.$error : false

    },

    submit: function(){
        this.$v.$touch();
        if(this.$v.$pendding || this.$v.$error) return;
        this.newpassword();


    },
    newpassword: function () {
      this.axios
        .post("http://localhost:3000/user/updatepassword", {
          password: this.password,
          forget: this.forget
        })
        .then(() => {
            this.$router.push({ name: 'Login' })
         
        })
        .catch((err) => {
          alert(err);
        });
    },
    
    
  },

  components: {
    myNavbarLog,
    myFooter,
  },
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli);

.register {
  margin: 0;
  padding: 0;
  position: relative;
}
.imagedefondlog img {
  width: 100%;
}

.formulairereg {
  position: absolute;
  width: 30%;
  height: 50%;
  background-color: rgba(0, 255, 252, 0.5);
  z-index: 1;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 50%);
  border-radius: 20px;
  border: 3px solid #00bff3;
}

.formulairereg h1 {
  color: #fcff00;
  -webkit-text-stroke: 0.5px #00ff0c;
  text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em rgb(0, 255, 12);
  font-family: MV Boli !important;
  padding-top: 10%;
  font-size: 44px;
  font-weight: bolder;
}
.formulairereg p {
  color: #fcff00;
  font-size: 28px;
  text-align: left;
  padding-left: 15%;
  font-family: MV Boli;
  padding-top: 10%;
}

.formulairereg input {
  width: 70%;
  border-radius: 10px;
  border: 1px solid #fcff00;
  height: 5%;
  outline-style: none;
}
.pseudo {
  margin-top: 10% !important;
}

/* Animation du bouton */
button {
  margin-top: 10% !important;
  z-index: 1;
  position: relative;
  font-size: 28px !important;
  font-family: MV Boli !important;
  color: #fcff00;
  -webkit-text-stroke: 1px #00ff0c;
  padding: 1px auto;
  width: 30%;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px !important;
  border: 1px solid #fcff00;
}

button:hover {
  cursor: pointer;
  text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em rgb(0, 255, 12);
}

button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #fcff00;
  border-radius: 20px;
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}

.login {
  left: 15%;
  position: absolute;
  font-size: 12px;
  color: #fcff00;
}

.sendmailnotif {
  padding-top: 10%;
  font-family: MV Boli;
  color: #fcff00;
}

.invalid-feedback{
    position: absolute;
    text-align: right;
    right: 15%;
}
</style>
