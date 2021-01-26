<template>
<div class="navbaroff">
  <div class="logo">
    <img src="../assets/LogoPerso2.png" alt="monlogo" width="50%">
  </div>
  <ul class="nav-links">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Streaming</a></li>
      <li><a href="#">Lectures</a></li>
      <li><input type="search" class="recherche" placeholder="Rechercher..."></li>
      <li><a href="#"><img src="../assets/poweroff.png" alt="poweroff" width="40"></a></li>
  </ul>

<!--burger-->
  <div class="burger">
    <div class="line1">
    </div>
    <div class="line2">
    </div>
    <div class="line3">
    </div>
  </div>

</div>
</template>

<script>
window.onload = function() {
  const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //activation
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  //Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Animation du Burger
    burger.classList.toggle('toggle');
  });
}

navSlide();
}
export default {

}
</script>

<style scoped>
*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

.navbaroff{
position: fixed;
display: flex;
justify-content: space-around;
align-items: center;
height: 10vh;
background-color: rgba(0,0,0,0.5);
width: 100%;
z-index: 999;
}

.nav-links{
display: flex;
justify-content: space-around;
width: 40%;
align-items: center;
}

.nav-links a{
color: #00fffc;
text-decoration: none;
font-size: 20px;
z-index: 999;
}

ul > li{
list-style: none;
}

.recherche{
    border-radius: 15px;
    border: 2px solid #00fffc;
    outline: none;
}

.burger{
display: none;
z-index: 999;
cursor: pointer;
}

.burger div{
  width: 25px;
  height: 3px;
  background-color: #00fffc;
  margin: 5px;
  transition: all 0.3s ease;
  z-index: 99;
}

@media screen and (max-width: 1024px){
.nav-links{
  width: 60%;
  }
}

@media screen and (max-width: 768px){
.body{
  overflow-x: hidden;
  }

.nav-links{
  position: absolute;
  right: 0px;
  height: 90vh;
  top: 10vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;
  }

.nav-links li{
  opacity: 0;
  }

.burger{
  display: block;
  }


.nav-active{
  transform: translateX(0%);
}

@keyframes navLinkFade{
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1{
 transform: rotate(-45deg) translate(-5px,6px);
}

.toggle .line2{
opacity: 0;
}

.toggle .line3{
 transform: rotate(45deg) translate(-5px,-6px);

}
}
</style>