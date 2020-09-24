<template>
  <div class="afficheanimeprev">
    
    <div class="baniere">
      <img src="@/assets/StarSkyBaniere.jpg" alt="">
      <h2>ANIMES</h2>
    </div>
    <!-- afficher la components lesVideo dans Accueil -->
    <div class="video-ajustement">
    <myvideo v-if="(video !== null, renderComponent)" :video="video" :info="info"/>


    </div>
    <div class="vignettes-placement">
      <div class="imageanime" v-for="anime in animes" :key="anime.id">
        <img
          @click="reafficher(anime.videos[0].video, anime)"
          :src="require(`@/assets/${anime.images[0].image}.jpg`)" width="300" height="150"
        />
<p class="tailletitre">{{ anime.titre }}</p>

        
      </div>
      
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import myvideo from "@/components/lesVideo.vue";
export default {
  name: "animePrev",
  components: {
    myvideo,
  },
  data() {
    return {
      info: {},
      video: "GintamaPrev",
      renderComponent: true,
      animes: {},
      titre: {},
    };
  },
  created() {
    this.axios.get("http://localhost:3000/anime/limit/4")
      .then((res) => {
        console.log(res.data);
        this.animes = res.data.animes;
      })
      .catch((err) => {
        alert(err);
      });
  },
  methods: {
    reafficher: function (videolink, info) {
      this.video = videolink;
this.info = info;
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
};
</script>

<style>
.afficheanimeprev{
    margin: 10px auto;
    padding: 0;
    position: relative;
}
.vignettes-placement{
    display: flex;
    z-index: 999;
    justify-content: space-evenly;
    margin-top: -190px;
    flex-wrap: wrap;
}

.tailletitre{
font-size: 22px;
color: #fcff00;
margin-top: -40px;
margin-bottom: 40px;

}

.imageanime img:hover{
  cursor: pointer;
}

.baniere img{
  width: 100%;
    height: 50px;
    position: absolute;
    opacity: 0.7;
    left: 0;
    
}

.baniere h2{
  position: absolute;
    left: 0;
    right: 0;
    font-size: 34px;
    color: #fcff00;
    z-index: 1;
    padding-top: 5px;
    font-family: MV Boli;
    text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);


}
</style>