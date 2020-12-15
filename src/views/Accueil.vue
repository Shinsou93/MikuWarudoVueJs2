<template>
  <div class="accueil">
    <!-- La Navbar change en fonction du status de l'utilisateur -->
      <mynavbaroff v-if="Auth=true" />
      <mynavbaron v-if="Auth=false" />
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
//import mynavbaron from "../components/navbaron.vue"
import myaccueilheader from "../components/accueilheader.vue"
import myAnimePrev from "../components/accueilsection/animePrev.vue"
import myDramaPrev from "../components/accueilsection/dramaPrev.vue"
import myLiveEmissionPrev from "../components/accueilsection/liveemissionPrev.vue"
import myFooter from "../components/myfooter.vue"
export default {
name: "Accueil",
components: {
    mynavbaroff,
    //mynavbaron,
    myaccueilheader,
    myAnimePrev,
    myDramaPrev,
    myLiveEmissionPrev,
    myFooter
},
data () {
  return {
    user: {},
    Auth: '',
    login: '',
  }

},
created: {
  login: function(res){    
    localStorage.getItem('res.data.token')
    if(res.data.token){
    localStorage.setItem('Auth', true)
    res.json("Auth=true")
    }else{
    localStorage.setItem('Auth', false)
    res.json("Auth=false")
    } 
  }
}
}
</script>

<style>
.accueil{
  margin: 0;
  padding: 0;
}
</style>