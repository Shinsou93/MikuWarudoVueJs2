<template>
<div class="actujap">
    <mynavbaron v-if="myNavOn"/>
    <mynavbaroff v-else/>

    <img src="../assets/tradition3.jpg" alt="imgactu" class="imgactujap">

    <div class="cards">
    
    </div>


</div>
</template>

<script>
import mynavbaroff from "../components/navbaroff.vue"
import mynavbaron from "../components/navbaron.vue"

export default {
name: 'ActuJap',
components: {
mynavbaroff,
mynavbaron
},
}
</script>

<style scoped>
.actujap{
margin: 0;
padding: 0;
box-sizing: border-box;
}
.imgactujap{
width: 100%;
}

</style>