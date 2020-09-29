<template>
  
    <div class="dramaliste">

        <myNavbarOn/>

        <div class="imgdrama">
            <img src="../assets/PrisonSchool.jpg" alt="gintama" width="100%">
        </div>

        <div class="dramaliste-letters">
            <ul>
                <li>
                    <a href="#dramaliste-#">#</a>
                </li>
                <li>
                    <a href="#dramaliste-0">0</a>
                </li>
                <li>
                    <a href="#dramaliste-a">A</a>
                </li>
                <li>
                    <a href="#dramaliste-b">B</a>
                </li>
                <li>
                    <a href="#dramaliste-c">C</a>
                </li>
                <li>
                    <a href="#dramaliste-d">D</a>
                </li>
                <li>
                    <a href="#dramaliste-e">E</a>
                </li>
                <li>
                    <a href="#dramaliste-f">F</a>
                </li>
                <li>
                    <a href="#dramaliste-g">G</a>
                </li>
                <li>
                    <a href="#dramaliste-h">H</a>
                </li>
                <li>
                    <a href="#dramaliste-i">I</a>
                </li>
                <li>
                    <a href="#dramaliste-j">J</a>
                </li>
                <li>
                    <a href="#dramaliste-k">K</a>
                </li>
                <li>
                    <a href="#dramaliste-l">L</a>
                </li>
                <li>
                    <a href="#dramaliste-m">M</a>
                </li>
                <li>
                    <a href="#dramaliste-n">N</a>
                </li>
                <li>
                    <a href="#dramaliste-o">O</a>
                </li>
                <li>
                    <a href="#dramaliste-p">P</a>
                </li>
                <li>
                    <a href="#dramaliste-q">Q</a>
                </li>
                <li>
                    <a href="#dramaliste-r">R</a>
                </li>
                <li>
                    <a href="#dramaliste-s">S</a>
                </li>
                <li>
                    <a href="#dramaliste-t">T</a>
                </li>
                <li>
                    <a href="#dramaliste-u">U</a>
                </li>
                <li>
                    <a href="#dramaliste-v">V</a>
                </li>
                <li>
                    <a href="#dramaliste-w">W</a>
                </li>
                <li>
                    <a href="#dramaliste-x">X</a>
                </li>
                <li>
                    <a href="#dramaliste-y">Y</a>
                </li>
                <li>
                    <a href="#dramaliste-z">Z</a>
                </li>
            </ul>
        </div>

        <div class="liste row" v-for="drama in dramas" :key="drama.id">
            <ul>
                <li>
                    <router-link :to="`/dramastreaming/${drama.id}`">
                    <a href=""><span class="titredramas">{{drama.titre}}</span></a>
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
name: 'DramaListe',

data() {
    return {
        dramas: {},
        titre: ''
    }
},

components: {
    myNavbarOn,
    myFooter
},

created() {
    this.axios.get("http://localhost:3000/drama/all")
      .then((res) => {
        console.log(res.data);
        this.dramas = res.data.dramas;
      })
      .catch((err) => {
        alert(err);
      });
  },
}
</script>

<style scoped>

.dramaliste{
    background: black;
    margin: 0;
    padding: 0;
}

.liste ul{
    list-style: none;

}

.titredramas{
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
}

.dramaliste-letters ul{
    display: flex;    
    list-style: none;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 50%;
    transform: translateX(48%);
}

.dramaliste-letters ul a{
    color: #00fffc;
    font-size: 28px;
    font-family: MV Boli;
    padding: 0 5px;
}
</style>