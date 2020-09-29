<template>
  
<div class="animestreaming">

    <myNavbaron/>

    <div class="animeheader">
        <img src="../assets/MikuAnimehead.jpg" alt="animehead" width="100%">
    </div>
    <mylecteuranime/>



    <myFooter/>    

</div>

</template>

<script>
import myNavbaron from '../components/navbaron.vue'
import myFooter from '../components/myfooter.vue'
import mylecteuranime from '../components/lecteurstreaming'


export default {
name: 'AnimeStreaming',

components: {
    myNavbaron,
    mylecteuranime,
    myFooter
}
}
</script>

<style scoped>

.animestreaming{
    margin: 0;
    padding: 0;
    background-color: black;
}

</style>