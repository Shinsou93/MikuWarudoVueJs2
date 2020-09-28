<template>
  <div class="affichedramaprev">

    <div class="baniere">
      <img src="@/assets/StarSkyBaniere.jpg" alt="">
      <h2>DRAMAS</h2>
    </div>

    <!-- afficher la components lesVideo dans Accueil -->
    <myvideo v-if="(video !== null, renderComponent)" :video="video" :info="info"/>

    <div class="vignettes-placement">
      <div class="imagedrama" v-for="drama in dramas" :key="drama.id">
        <img
          @click="reafficher(drama.videos[0].video, drama)"
          :src="require(`@/assets/${drama.images[0].image}.jpg`)" width="300" height="150"
        />
<div class="titre">
        <p>{{ drama.titre }}</p>
</div>
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import myvideo from "@/components/lesVideo.vue";
export default {
  name: "dramaPrev",
  components: {
    myvideo,
  },
  data() {
    return {
      info:{},
      video: "GTOPrev",
      renderComponent: true,
      dramas: {},
      titre: {},
    };
  },
  created() {
    this.axios.get("http://localhost:3000/drama/limit/4")
      .then((res) => {
        console.log(res.data);
        this.dramas = res.data.dramas;
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
.vignettes-placement{
    display: flex;
    z-index: 1;
    justify-content: space-evenly;
margin-top: -190px;
}

.affichedramaprev{
margin: 15px auto;
position: relative;
}

.titre p{
font-size: 22px;
color: #fcff00;
margin-top: -40px;
margin-bottom: 40px;

}

.imagedrama img:hover{
  cursor: pointer;
}

</style>