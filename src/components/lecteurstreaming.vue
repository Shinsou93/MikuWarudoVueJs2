<template>
  <div class="afficheanimeprev">
    
    
    <!-- afficher la components lesVideo dans Accueil -->
    <div class="video-ajustement">
    <myvideo v-if="(video !== null, renderComponent)" :video="video" :info="info"/>


    </div>
    <div class="episodeliste">
      <div class="imageanime" v-for="anime in animes" :key="anime.id">
        <img
          @click="reafficher(anime.videos[0].video, anime)"
          :src="require(`@/assets/${anime.images[0].image}.jpg`)" width="300" height="150"
        />
      </div>


      
    </div>
        <h3 class="voiraussi">Voir aussi</h3>
        <div class="voiraussiliste">
            <div class="imageanime2" v-for="anime in animes" :key="anime.id">
        
            <img
            :src="require(`@/assets/${anime.images[0].image}.jpg`)" width="250" height="125"
            />
            <p class="tailletitrevoir">{{ anime.titre }}</p>
            </div>
        </div>

    


  </div>
</template>

<script>
// @ is an alias to /src
import myvideo from "@/components/lesVideoAnime.vue";
export default {
<<<<<<< HEAD
  name: "lecteurstreaming",
=======
  name: "animePrev",
>>>>>>> 483b86c9b2203f1caebb3f0515337929f3621886
  components: {
    myvideo,
  },
  data() {
    return {
      info: {},
      video: null,
      renderComponent: true,
      animes: {},
      titre: {},
    };
  },
  created() {
<<<<<<< HEAD
    this.axios.get("http://localhost:3000/anime/all/")
=======
    this.axios.get("http://localhost:3000/anime/limit/4")
>>>>>>> 483b86c9b2203f1caebb3f0515337929f3621886
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

<style scoped>
.afficheanimeprev{
    margin: 10px auto;
    padding: 0;
    position: relative;
}
.episodeliste{
    display: flex;
    z-index: 1;
    margin-top: 100px;
    margin-bottom: 45px;
    overflow-x: scroll;
    width: 60%;
    padding: 40px 0;
    margin-left: 1%;
    border: 2px solid #00fffc;
}

.tailletitrevoir{
    font-size: 22px;
    color: #fff;
    margin-bottom: 10px;

}

.imageanime img:hover{
  cursor: pointer;
}

.imageanime{
    padding: 0 15px;
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
    z-index: 0;
    padding-top: 5px;
    font-family: MV Boli;
    text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);


}

.animeliste-btn{
  position: absolute;
    font-size: 22px;
    z-index: 1;
    top: 98%;
    background: rgba(0,0,0,0.7);
    color: #fcff00;
    padding: 2px 5px;
    font-family: MV Boli;
    border-radius: 20px;
    width: 10%;
    border: 1px solid #00fffc;
    left: 50%;
    transform: translateX(-50%);
}

.mesvideos{
    z-index: 0;
    width: 60%;
    margin-left: 1%;
    margin-top: 5%;
    border: 2px solid #00fffc;
}

.voiraussiliste{
    display: flex;
    flex-wrap: wrap;
    
}

.imageanime2 img{
    padding: 5px 10px;
}

.voiraussi{
    color: #00fffc;
    text-align: left;
    margin-left: 3%;
}
</style>