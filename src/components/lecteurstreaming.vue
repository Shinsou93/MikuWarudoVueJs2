<template>
  <div class="lecteur">
    
    
    
    
        <div>
            <b-card v-for="anime in animes" :key="anime.id" style="max-width: 20rem;" class="mb-2">
            <img :src="require(`@/assets/${anime.images[0].image}.jpg`)" alt="imagecard">
            <b-card-text>
                {{anime.titre}}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>


  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "lecteurstreaming",
  components: {
    
  },
  data() {
    return {
      info: {},
      video: "",
      renderComponent: true,
      animes: {},
      titre: {},
      episodes: {},
      image: {}
    };
  },
  created() {
    this.axios.get("http://localhost:3000/anime/episodes/4")
      .then((res) => {
        console.log(res.data);
        this.episodes = res.data.episodes;
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
.lecteur{
    margin: 10px auto;
    padding: 0;
    position: relative;
}
.vignettes-placement{
    display: flex;
    z-index: 999;
    justify-content: space-evenly;
    margin-top: -220px;
    margin-bottom: 45px;
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
</style>