<template>
    <div class="profil">

        <myNavbarLog/>

        <div class="imagedefondlog">
            <img src="../assets/HatsuneProfil.jpg" alt="mikuprofil">

        </div>

        <form @submit.prevent="submit" class="formulairelog">
            <h1>PROFIL</h1>
            <p class="pseudo">Pseudo:</p>
            <input name="pseudo" type="text" id="pseudo" v-model.trim="$v.pseudo.$model">
            <p class="nom">Nom:</p>
            <input name="nom" type="text" id="nom" v-model.trim="$v.nom.$model">
            <p class="prenom">Prenom:</p>
            <input name="prenom" type="text" id="prenom" v-model.trim="$v.prenom.$model">
            <p class="naissance">Date De Naissance:</p>
            <input name="naissance" type="text" id="naissance" v-model.trim="$v.datedenaissance.$model">
            
            <div class="optionsup">
                <a href="/forgetpassword" class="forgetpass">Changer de Mot De Passe ?</a>
                <a href="/" class="register">Mettre à jour</a>
            </div>
            <button type="submit" class="start">Start !</button>

        </form>
        

        <myFooter/>

    </div>
</template>

<script>
import myNavbarLog from "../components/navbarlog.vue"
import myFooter from "../components/myfooter.vue"

import { required, minLength } from 'vuelidate/lib/validators';

export default {
name: "Profil",

data () {
    return {
        pseudo: '',
        nom: '',
        prenom: '',
        datedenaissance: ''
    }
},

validations: {
      pseudo: {
          required,
          minLength: minLength(4)
      },
},

methods: {

    validationStatus: function(validation){
      return typeof validation != "undefined" ? validation.$error : false

    },

    submit: function(){
        this.$v.$touch();
        if(this.$v.$pendding || this.$v.$error) return;
        this.login();


    },
},
components: {
    myNavbarLog,
    myFooter
}
}
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli);

.profil{
    margin: 0;
    padding: 0;
    position: relative;
}
.imagedefondlog img{
    width: 100%;
}

.formulairelog{
    
    position: absolute;
    width: 30%;
    height: 50%;
    background-color: rgba(0, 255, 252, 0.5);
    z-index: 1;
    left: 50%;
    top: 0%;
    transform: translate(-50%,50%);
    border-radius: 20px;
    border: 3px solid #00bff3;
}

.formulairelog h1{
    color: #fcff00;
    -webkit-text-stroke: 0.5px #00ff0c;
    text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);
    font-family: MV Boli !important;
    padding-top: 10%;
    font-size: 44px;
    font-weight: bolder;
}
.formulairelog p{
    color: #fcff00;
    font-size: 28px;
    text-align: left;
    padding-left: 15%;
    font-family: MV Boli;
}

.formulairelog input{
    width: 70%;
    border-radius: 10px;
    border: 1px solid #fcff00;
    height: 5%;
    outline-style: none;
}
.pseudo{
    margin-top: 25% !important;
}


/* Animation du bouton */
button {
    margin-top: 30% !important;
  z-index: 1;
  position: relative;
  font-size: 28px !important;
  font-family: MV Boli !important;
  color: #fcff00;
  -webkit-text-stroke: 1px #00ff0c;
  padding: 1px auto;
  width: 25%;
  outline: none;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px !important;
  border: 1px solid #fcff00;
}

button:hover {
  cursor: pointer;
  text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);

}

button::before {
  content: '';
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

.forgetpass{
    left: 15%;
    position: absolute;
    font-size: 12px;
    color: #fcff00;
}

.register{
    right: 15%;
    position: absolute;
    font-size: 12px;
    color: #fcff00;
}
</style>