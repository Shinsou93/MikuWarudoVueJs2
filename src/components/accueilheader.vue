<template>
  <div class="accueilheader">

      <img class="headerfond" src="../assets/MikuwarudoHeader.jpg" alt="header">

     <carousel class="taillecarousel">

         <carousel-slide>
             <div class="patchnote">
                <img src="../assets/StarSkyBaniere.jpg" alt="star">
                <h4>NEWS DU SITE</h4>
                <div class="patchnote1">
                    <a href="#" style="text-decoration:none">
                        <h5>Ouverture Du Site</h5>
                        <p>Bienvenue sur <span class="colorNom">MIKU WARUDO</span> ! ... <span class="lirenews">Lire la suite...</span></p>
                    </a>
                </div>
                <div class="patchnote2">
                    <a href="#" style="text-decoration:none">
                        <h5>ANIME News</h5>
                        <p>Découverte de <span class="colorNom">KANOJO, OKARISHIMASU (Louer une Petite-Amie)</span>! Un anime tout mignon... <span class="lirenews">Lire la suite...</span></p>
                    </a>
                </div>
                <div class="patchnote3">
                    <a href="#" style="text-decoration:none">
                        <h5>DRAMAS News</h5>
                        <p>Lumière sur <span class="colorNom">THE KING'S AVATAR</span> ! Le monde E-Sports... <span class="lirenews">Lire la suite...</span></p>
                    </a>
                </div>

            </div>
         </carousel-slide>
         
         <carousel-slide>
             <h3>EN CONSTRUCTION</h3>
         </carousel-slide>
        
         <carousel-slide>
             <h3>EN CONSTRUCTION</h3>
         </carousel-slide>
     </carousel>


  </div>
</template>

<script>
import Carousel from"./carousel/Carousel.vue"
import CarouselSlide from"./carousel/CarouselSlide.vue"
export default {
name: "accueilheader",

components:{
    Carousel,
    CarouselSlide
}
}

</script>

<style>
.accueilheader{
position: relative;
}

.headerfond{
    width: 100%;
    position: relative;
    z-index: -1;
}

.taillecarousel{
    display: flex !important;
    position: absolute !important;
    width: 50%;
    min-height: 25%;
    max-height: 35%;
    overflow-x: hidden;
    background: rgba(0,0,0,0.6);
    border-radius: 15px;
    bottom: 2%;
    left: 25%;
    
    
}
.patchnote img{
    width: 100%;
    height: 30px;
    border-radius: 15px 15px 0px 0px;
    margin-top: 0px;
}

.life{
    width: 100%;
}

.mikuwarudo{
    width: 100%;
}


/* L E  P A T C H  N O T E */

.patchnote {
    position: relative;
    height: 350px;
    width: 100%;
    border-radius: 10px;
}



.patchnote h4 {
    position: absolute;
    color: #fcff00;
    text-align: center;
    font-family: 'MV Boli';
    margin-top: -30px;
    float: left;
    font-weight: lighter;
    left: 0px;
    right: 0;
    text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);
}

.patchnote h5 {
    text-decoration: none;
    color: #ff0000;
    margin-top: 5px;
    padding: 1px 10px;
    text-align: left;
}

.lirenews {
    color: yellow;
}

.patchnote1 {
    background: #222222;
    border-radius: 20px;
    margin: 10px 20px 0 20px;
    border: 1px solid #00fffc;
}



.patchnote1 p {
    color: #fff;
    margin-top: -15px;
    padding: 1px 10px;
    font-size: 16px;
    text-align: left;
    text-decoration: none;


}

.patchnote1:hover {
    background: #333333;
}

.patchnote2 {
    background: #222222;
    border-radius: 20px;
    margin: 10px 20px 0 20px;
    border: 1px solid #00fffc;
    
}

.patchnote2 p {
    color: #fff;
    text-align: left;
    margin-top: -15px;
    padding: 1px 10px;
    text-align: left;


}

.patchnote2:hover {
    background: #333333;
}

.patchnote3 {
    background: #222222;
    border-radius: 20px;
    margin: 10px 20px 0 20px;
    border: 1px solid #00fffc;
}



.patchnote3 p {
    margin-top: -15px;
    padding: 1px 10px;
    text-align: left;
    color: #fff;


}

.patchnote3:hover {
    background: #333333;
}

.colorNom {
    color: #00fffc;
}
</style>