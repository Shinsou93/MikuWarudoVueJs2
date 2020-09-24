<template>
  <div class="afficheliveprev">

    <div class="baniere">
      <img src="@/assets/StarSkyBaniere.jpg" alt="">
      <h2>LIVES / EMISSIONS</h2>
    </div>

    <!-- afficher la components lesVideo dans Accueil -->
    <myvideo v-if="(video !== null, renderComponent)" :video="video" :info="info"/>

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


  </div>
</template>

<script>
// @ is an alias to /src
import myvideo from "@/components/lesVideo.vue";
export default {
  name: "livePrev",
  components: {
    myvideo,
  },
  data() {
    return {
      info: {},
      video: "OneOkRockPrev",
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
}

.titre p{
font-size: 22px;
color: #fcff00;
margin-top: -40px;
margin-bottom: 40px;

}
</style>