<template>
  <div class="afficheliveprev">

    <div class="baniere">
      <img src="@/assets/StarSkyBaniere.jpg" alt="">
      <h2>LIVES / EMISSIONS</h2>
    </div>

    <!-- afficher la components lesVideo dans Accueil -->
    <!-- <myvideo v-if="(video !== null, renderComponent)" :video="video" :info="info"/>
 -->
    <div class="vignettes-placement">
      <div class="imagelive" v-for="live in lives" :key="live.id">
        <img
          @click="reafficher(live.videos[0].video, live)"
          :src="require(`@/assets/${live.images[0].image}.jpg`)" width="300" height="150"
        />
<div class="titre">
        <p>{{ live.titre }}</p>
</div>
      </div>
    </div>

<a href="/liveemissionliste" class="liveemissionliste-btn">Explorer</a>

  </div>
</template>

<script>
// @ is an alias to /src
/* import myvideo from "@/components/lesVideo.vue";
 */export default {
  name: "livePrev",
  components: {
/*     myvideo,
 */  },
  data() {
    return {
      info: {},
      video: "OORmute",
      renderComponent: true,
      lives: {},
      titre: {},
    };
  },
  created() {
    this.axios.get("http://localhost:3000/live/limit/4")
      .then((res) => {
        console.log(res.data);
        this.lives = res.data.lives;
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
.afficheliveprev{
position: relative;
}

.vignettes-placement{
    display: flex;
    z-index: 1;
    justify-content: space-evenly;
    margin-top: -220px;
    margin-bottom: 45px;
}

.titre p{
font-size: 22px;
color: #fcff00;
margin-top: -40px;
margin-bottom: 40px;

}

.imagelive img:hover{
  cursor: pointer;
}

.liveemissionliste-btn{
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
</style>