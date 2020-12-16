<template>
<div class="forum">

    <mynavbaron v-if="myNavOn"/>
    <mynavbaroff v-else/>


<img src="../assets/HatsunePainter.jpg" alt="imageportail" id="imgportail">
<div class="welcome">
    <div class="textuel">
        <h1 id="titrehhs">PORTAIL<br>HATSUNE HIGH SCHOOL</h1>
        <p>Bienvenue sur le Forum dédié de Miku Warudo !<br>
            Un Forum communautaire basée sur le système 
            des écoles japonaises.<br>Venez partager vos 
            passions, aidez des étudiants, <br>rencontrer des 
            personnes qui ont les mêmes centre d'intérêts 
            que vous.<br>Et vous pouvez même créer votre propre CLUB !
        </p>
        <div class="boutons">
            <button>
                Franchir le portail !
            </button>
            <button>
                Revenir sur Miku Warudo
            </button>
        </div>
    </div>
    <div class="school">
        <img src="../assets/school1.jpg" alt="school">
    </div>
</div>

</div>
</template>

<script>
import mynavbaroff from "../components/navbaroff.vue"
import mynavbaron from "../components/navbaron.vue"

export default {
name: "Forum",
components: {
    mynavbaroff,
    mynavbaron,

},

data() {
return{
}
}
}
</script>

<style scoped>
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

#imgportail{
 width: 100%;
 z-index: -1;
} 
.welcome{
display: flex;
}
#titrehhs{
color: #fa9a9a;
padding-top: 50px;
}
.textuel{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-90%, -30%);
background-color: rgba(0, 255, 252, 0.3);
max-height: 500px;
min-height: 300px;
width: 50%;
font-family: MV Boli;
}

.boutons{
display: flex;
justify-content: space-evenly;
padding-bottom: 20px;
}
/* Animation du bouton */
button {
  margin-top: 5% !important;
  z-index: 1;
  position: relative;
  font-size: 18px !important;
  font-family: MV Boli !important;
  color: #fcff00;
  -webkit-text-stroke: 1px #00ff0c;
  padding: 1px auto;
  width: 200px;
  height: 60px;
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
/* Fin animation btn */

.school img{
width: 40%;
    position: absolute;
    top: 50%;
    transform: translate(15%, -30%);
    left: 50%;
}
</style>