<template>
  <div class="accueil">
    <!-- La Navbar change en fonction du status de l'utilisateur -->
      
      <mynavbaron v-if="myNavOn"/>
      <mynavbaroff v-else/>
      <myaccueilheader/>
      <myAnimePrev/>
      <myDramaPrev/>
      <myLiveEmissionPrev/>
      <myFooter/>
      
  </div>
</template>

<script>
//import VueJwtDecode from 'vue-jwt-decode'
import mynavbaroff from "../components/navbaroff.vue"
import mynavbaron from "../components/navbaron.vue"
import myaccueilheader from "../components/accueilheader.vue"
import myAnimePrev from "../components/accueilsection/animePrev.vue"
import myDramaPrev from "../components/accueilsection/dramaPrev.vue"
import myLiveEmissionPrev from "../components/accueilsection/liveemissionPrev.vue"
import myFooter from "../components/myfooter.vue"
export default {
name: "Accueil",
components: {
    mynavbaroff,
    mynavbaron,
    myaccueilheader,
    myAnimePrev,
    myDramaPrev,
    myLiveEmissionPrev,
    myFooter
},
data () {
  return {
    myNavOn: '',
    //Auth: null,
  }

},
created: function(){    
if( localStorage.getItem("token")){
          this.myNavOn = true;
        } else  {
         this.myNavOn = false;

        }
}
/* var auth = localStorage.getItem('token')
    
  if(auth){
    localStorage.setItem('Auth', true)
console.log(auth)
    auth=this.Auth
    }else{
localStorage.removeItem('Auth')} 
  } */
}

</script>

<style>
.accueil{
  margin: 0;
  padding: 0;
}
</style>