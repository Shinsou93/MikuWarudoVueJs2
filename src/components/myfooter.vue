<template>
  <div class="myfooter">
<img src="../assets/LogoPerso2.png" alt="logo">
<p>© COPYRIGHT SOU VIREACH, TOUS DROITS RESERVES</p>
  </div>
</template>

<script>
export default {
name: "myfooter"
}
</script>

<style>
.myfooter{
 display: flex;
  height: 100px;
  width: 100%;
  position: relative;
  background: rgba(0,0,0);
  margin: 0;

}
.myfooter img{
  position: absolute;
  width: 110px;
  left: 100px;
  top: 10px;
}
.myfooter p{
  position: absolute;
  color: #00fffc;
  top: 40%;
  
left: 0px;
right: 0px;
font-size: 18px;
text-align: center;
}
</style>