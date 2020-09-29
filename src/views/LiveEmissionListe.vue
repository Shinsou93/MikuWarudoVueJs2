<template>
  
    <div class="liveliste">

        <myNavbarOn/>

        <div class="imglive">
            <img src="../assets/Mikulive2.jpg" alt="gintama" width="100%">
        </div>

        <div class="liveliste-letters">
            <ul>
                <li>
                    <a href="#liveliste-#">#</a>
                </li>
                <li>
                    <a href="#liveliste-0">0</a>
                </li>
                <li>
                    <a href="#liveliste-a">A</a>
                </li>
                <li>
                    <a href="#liveliste-b">B</a>
                </li>
                <li>
                    <a href="#liveliste-c">C</a>
                </li>
                <li>
                    <a href="#liveliste-d">D</a>
                </li>
                <li>
                    <a href="#liveliste-e">E</a>
                </li>
                <li>
                    <a href="#liveliste-f">F</a>
                </li>
                <li>
                    <a href="#liveliste-g">G</a>
                </li>
                <li>
                    <a href="#liveliste-h">H</a>
                </li>
                <li>
                    <a href="#liveliste-i">I</a>
                </li>
                <li>
                    <a href="#liveliste-j">J</a>
                </li>
                <li>
                    <a href="#liveliste-k">K</a>
                </li>
                <li>
                    <a href="#liveliste-l">L</a>
                </li>
                <li>
                    <a href="#liveliste-m">M</a>
                </li>
                <li>
                    <a href="#liveliste-n">N</a>
                </li>
                <li>
                    <a href="#liveliste-o">O</a>
                </li>
                <li>
                    <a href="#liveliste-p">P</a>
                </li>
                <li>
                    <a href="#liveliste-q">Q</a>
                </li>
                <li>
                    <a href="#liveliste-r">R</a>
                </li>
                <li>
                    <a href="#liveliste-s">S</a>
                </li>
                <li>
                    <a href="#liveliste-t">T</a>
                </li>
                <li>
                    <a href="#liveliste-u">U</a>
                </li>
                <li>
                    <a href="#liveliste-v">V</a>
                </li>
                <li>
                    <a href="#liveliste-w">W</a>
                </li>
                <li>
                    <a href="#liveliste-x">X</a>
                </li>
                <li>
                    <a href="#liveliste-y">Y</a>
                </li>
                <li>
                    <a href="#liveliste-z">Z</a>
                </li>
            </ul>
        </div>

        <div class="liste row" v-for="live in lives" :key="live.id">
            <ul>
                <li>
                    <router-link :to="`/livestreaming/${live.id}`">
                    <a href=""><span class="titrelives">{{live.titre}}</span></a>
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
name: 'LiveEmissionListe',

data() {
    return {
        lives: {},
        titre: ''
    }
},

components: {
    myNavbarOn,
    myFooter
},

created() {
    this.axios.get("http://localhost:3000/live/all")
      .then((res) => {
        console.log(res.data);
        this.lives = res.data.lives;
      })
      .catch((err) => {
        alert(err);
      });
  },
}
</script>

<style scoped>

.liveliste{
    background: black;
    margin: 0;
    padding: 0;
}

.liste ul{
    list-style: none;

}

.titrelives{
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
}

.liveliste-letters ul{
    display: flex;    
    list-style: none;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 50%;
    transform: translateX(48%);
}

.liveliste-letters ul a{
    color: #00fffc;
    font-size: 28px;
    font-family: MV Boli;
    padding: 0 5px;
}
</style>