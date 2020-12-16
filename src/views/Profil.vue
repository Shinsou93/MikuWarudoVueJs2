<template>
    <div class="profil">

        <myNavbarLog/>

        <div class="imagedefondprofil">
            <img src="../assets/hatsunemikufond.jpg" alt="mikuprofil">

        </div>
        

        <form @submit.prevent="submit" class="formulaireprofil">
            <div class="titre">
            <h1>PROFIL</h1>
            <p>Upgrade to</p>
            <a href="/premium">Premium</a>
            </div>
           
            <p class="pseudo">Pseudo:</p>
            <input name="pseudo" type="text" id="pseudo" v-model.trim="user.pseudo">
            <p class="nom">Nom:</p>
            <input name="nom" type="text" id="nom" v-model="profil.nom">
            <p class="prenom">Prenom:</p>
            <input name="prenom" type="text" id="prenom" v-model="profil.prenom">
            <p>Date De Naissance:</p>
            <div class="naissance">
                <b-form-select v-model="profil.jour" :options="optionsJ"></b-form-select>
                <b-form-select class="mois" v-model="profil.mois" :options="optionsM"></b-form-select>
                <b-form-select v-model="profil.annee" :options="optionsA"></b-form-select>
            </div>
            <p class="description">Description:</p>
            <input name="description" type="text" id="description" v-model="profil.description">
            
            
            <div class="optionsup">
                <a href="/forgetpassword" class="forgetpass">Changer de Mot De Passe ?</a>
                
            </div>
            <button type="submit" class="start">Mettre A Jour</button>

        </form>
        

        <myFooter/>

    </div>
</template>

<script>

import myNavbarLog from "../components/navbarlog.vue"
import myFooter from "../components/myfooter.vue"
import VueJwtDecode from 'vue-jwt-decode'

import { required, minLength } from 'vuelidate/lib/validators';

export default {
name: "Profil",

data () {
    return {
        user: {},
        profil: {},
        id: this.$route.params.id,
        pseudo: '',
        nom: '',
        prenom: '',
        jour: null,
        mois: null,
        annee: null,
        description: '',
        token: {},
        image: '',
        
        
        optionsJ: [
            { value: null, text: 'Jour' },
            { value: '1', text: '1' },
            { value: '2', text: '2' },
            { value: '3', text: '3' },
            { value: '4', text: '4' },
            { value: '5', text: '5' },
            { value: '6', text: '6' },
            { value: '7', text: '7' },
            { value: '9', text: '8' },
            { value: '10', text: '10' },
            { value: '11', text: '11' },
            { value: '12', text: '12' },
            { value: '13', text: '13' },
            { value: '14', text: '14' },
            { value: '15', text: '15' },
            { value: '16', text: '16' },
            { value: '17', text: '17' },
            { value: '18', text: '18' },
            { value: '19', text: '19' },
            { value: '20', text: '20' },
            { value: '21', text: '21' },
            { value: '22', text: '22' },
            { value: '23', text: '23' },
            { value: '24', text: '24' },
            { value: '25', text: '25' },
            { value: '26', text: '26' },
            { value: '27', text: '27' },
            { value: '28', text: '28' },
            { value: '29', text: '29' },
            { value: '30', text: '30' },
            { value: '31', text: '31' },

        ],
        optionsM: [
            { value: null, text: 'Mois' },
            { value: 'Janvier', text: 'Janvier' },
            { value: 'Février', text:'Février' },
            { value: 'Mars', text: 'Mars' },
            { value: 'Avril', text: 'Avril' },
            { value: 'Mai', text: 'Mai' },
            { value: 'Juin', text: 'Juin' },
            { value: 'Juillet', text: 'Juillet' },
            { value: 'Août', text: 'Août' },
            { value: 'Septembre', text: 'Septembre' },
            { value: 'Octobre', text: 'Octobre' },
            { value: 'Novembre', text: 'Novembre' },
            { value: 'Décembre', text: 'Décembre' },

        ],optionsA: [
            { value: null, text: 'Annee' },
            { value: '1' }

        ],
        
        
        
        
    }
},


created: function (){
    this.axios.get("http://localhost:3000/user/profil/" + this.id)
        .then(res =>{
            this.user = VueJwtDecode.decode(res.data.token)
            this.profil = this.user.profils[0]
        })
        .catch(err=>{
            alert(err)
        })
    

    

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
      // this.$v.$touch();
      //if(this.$v.$pendding || this.$v.$error) return;
        this.update();
    },

    update: function(){
        this.axios.put("http://localhost:3000/profil/update/" + this.id, { profil : this.profil
            /* pseudo: this.pseudo,
            nom: this.nom,
            prenom: this.prenom,
            jour: this.jour,
            mois: this.mois,
            annee: this.annee,
            description: this.description */

        })
        .then(res => {
            if(res.data.token){                
                localStorage.setItem("token",res.data.token)
                this.$router.push({ name: "Accueil" })
                
            }else{
                
                alert('Utilisateur introuvable ou Password incorrecte')
            }
        })
        .catch(err =>{
            console.log(err);
        })
    
    },
},
components: {
    myNavbarLog,
    myFooter
}
};



</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli);

.profil{
    margin: 0;
    padding: 0;
    position: relative;
}
.imagedefondprofil img{
    width: 100%;
    min-height: 100vh;
}

.formulaireprofil{
    
    position: absolute;
    width: 100%;
    max-width: 800px;
    height: 80%;
    max-height: 1000px;
    background-color: rgba(172,172,172, 0.5);
    z-index: 1;
    left: 50%;
    top: -30%;
    transform: translate(-50%,50%);
    border-radius: 20px;
    border: 3px solid #d557e7;
}


.formulaireprofil p{
    color: #fcff00;
    font-size: 28px;
    text-align: left;
    padding-left: 15%;
    font-family: MV Boli;
}

.formulaireprofil input{
    width: 50%;
    border-radius: 10px;
    border: 1px solid #fcff00;
    height: 5%;
    outline-style: none;
    margin-left: -20%;
    margin-top: -2%;
}
.pseudo{
    margin-top: 5% !important;
}


/* Animation du bouton */
button {
    margin-top: 10% !important;
    z-index: 1;
    position: relative;
    font-size: 28px !important;
    font-family: MV Boli !important;
    color: #00fffc;
    /* -webkit-text-stroke: 1px #00ff0c; */
    padding: 1px auto;
    width: 250px;
    outline: none;
    background-color: rgba(0,0,0);
    border-radius: 10px !important;
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
  border-radius: 10px;
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

.titre{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.titre h1{
    padding-top: 5%;
    margin-left: -10%;
    
}

.titre p{
    margin-top: 6%;
    padding-left: 1%;
    font-family: inherit;
    color: inherit;
    font-size: 18px;
    
}

.titre a{
    margin-top: 6%;
    outline-style: none;
    text-decoration: none;
    color: #fcff00;
    background-color: black;
    height: 10%;
    border-radius: 6px;
    padding: 1px;
    border: 1px solid #00fffc;
    
}

#description{
    width: 70%;
    height: 20%;
    margin-left: 0%;
}

.naissance {
    display: flex;
    width: 40%;
    margin-left: 15%;
}
.mois{
    width: 200%;
}
</style>