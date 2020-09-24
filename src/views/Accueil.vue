<template>
  <div class="accueil">
      <mynavbaroff/>
      <myaccueilheader/>
      <myAnimePrev/>
      <myDramaPrev/>
      <myLiveEmissionPrev/>
      <myFooter/>
      
  </div>
</template>

<script>

import mynavbaroff from "../components/navbaroff.vue"
import myaccueilheader from "../components/accueilheader.vue"
import myAnimePrev from "../components/accueilsection/animePrev.vue"
import myDramaPrev from "../components/accueilsection/dramaPrev.vue"
import myLiveEmissionPrev from "../components/accueilsection/liveemissionPrev.vue"
import myFooter from "../components/myfooter.vue"
export default {
name: "Accueil",
components: {
    mynavbaroff,
    myaccueilheader,
    myAnimePrev,
    myDramaPrev,
    myLiveEmissionPrev,
    myFooter
}
}
</script>

<style>
.accueil{
  margin: 0;
  padding: 0;
}
</style>