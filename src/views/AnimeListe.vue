<template>
  
    <div class="animeliste">

        <myNavbarOn/>

        <div class="imganime">
            <img src="../assets/Gintama.jpg" alt="gintama" width="100%">
        </div>

        <div class="animeliste-letters">
            <ul>
                <li>
                    <a href="#animeliste-#">#</a>
                </li>
                <li>
                    <a href="#animeliste-0">0</a>
                </li>
                <li>
                    <a href="#animeliste-a">A</a>
                </li>
                <li>
                    <a href="#animeliste-b">B</a>
                </li>
                <li>
                    <a href="#animeliste-c">C</a>
                </li>
                <li>
                    <a href="#animeliste-d">D</a>
                </li>
                <li>
                    <a href="#animeliste-e">E</a>
                </li>
                <li>
                    <a href="#animeliste-f">F</a>
                </li>
                <li>
                    <a href="#animeliste-g">G</a>
                </li>
                <li>
                    <a href="#animeliste-h">H</a>
                </li>
                <li>
                    <a href="#animeliste-i">I</a>
                </li>
                <li>
                    <a href="#animeliste-j">J</a>
                </li>
                <li>
                    <a href="#animeliste-k">K</a>
                </li>
                <li>
                    <a href="#animeliste-l">L</a>
                </li>
                <li>
                    <a href="#animeliste-m">M</a>
                </li>
                <li>
                    <a href="#animeliste-n">N</a>
                </li>
                <li>
                    <a href="#animeliste-o">O</a>
                </li>
                <li>
                    <a href="#animeliste-p">P</a>
                </li>
                <li>
                    <a href="#animeliste-q">Q</a>
                </li>
                <li>
                    <a href="#animeliste-r">R</a>
                </li>
                <li>
                    <a href="#animeliste-s">S</a>
                </li>
                <li>
                    <a href="#animeliste-t">T</a>
                </li>
                <li>
                    <a href="#animeliste-u">U</a>
                </li>
                <li>
                    <a href="#animeliste-v">V</a>
                </li>
                <li>
                    <a href="#animeliste-w">W</a>
                </li>
                <li>
                    <a href="#animeliste-x">X</a>
                </li>
                <li>
                    <a href="#animeliste-y">Y</a>
                </li>
                <li>
                    <a href="#animeliste-z">Z</a>
                </li>
            </ul>
        </div>

        <div class="liste row" v-for="anime in animes" :key="anime.id">
            <ul>
                <li>
                    <router-link :to="`/animestreaming/${anime.id}`">
                    <a href=""><span class="titreanimes">{{anime.titre}}</span></a>
                    </router-link>
                </li>
            </ul>

        </div>


        <myFooter/>

    </div>

</template>

<script>
import myNavbarOn from '../components/navbaron.vue'
import myFooter from '../components/myfooter.vue'

export default {
name: 'AnimeListe',

data() {
    return {
        animes: {},
        titre: ''
    }
},

components: {
    myNavbarOn,
    myFooter
},

created() {
    this.axios.get("http://localhost:3000/anime/all")
      .then((res) => {
        console.log(res.data);
        this.animes = res.data.animes;
      })
      .catch((err) => {
        alert(err);
      });
  },
}
</script>

<style scoped>

.animeliste{
    background: black;
    margin: 0;
    padding: 0;
}

.liste ul{
    list-style: none;

}

.titreanimes{
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
}

.animeliste-letters ul{
    display: flex;    
    list-style: none;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 50%;
    transform: translateX(48%);
}

.animeliste-letters ul a{
    color: #00fffc;
    font-size: 28px;
    font-family: MV Boli;
    padding: 0 5px;
}
</style>