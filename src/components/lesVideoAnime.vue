<template>
  <div class="mesvideos">

    <!-- <b-embed v-if="video !== null" type="video" autoplay controls>
      
        <source :src="require(`@/assets/${video}.mp4`)" type="video/mp4" width="100%"/>
        
    </b-embed> -->


  </div>
</template>

<script>
export default {
name: "lesVideoAnime",
props: ["video", "info"]
}
</script>

<style>
.mesvideos{
position: relative;
z-index: -1;
}
.embed-responsive{
    z-index: -1;
}

.titreprev{
position: absolute;
top: 10%;
left:5%;
font-size: 50px;
color: #00fffc;
}

.synopsis{
position: absolute;
top: 40%;
left:5%;
color: red;
}

.syno-text{
position: absolute;
top: 45%;
left:5%;
color: white;
font-size: 22px;
text-align: left;
width: 40%;
}
</style>