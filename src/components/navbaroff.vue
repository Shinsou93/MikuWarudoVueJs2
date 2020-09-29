<template>
  <div class="mynav">

<b-navbar toggleable="lg" type="light" class="colorfond">
    <b-navbar-brand href="#" class="logoplacement">
        <img src="../assets/LogoPerso2.png" alt="logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="burger">&#9776;</b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
     <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="placementlinks">
        <b-nav-item href="#">Accueil</b-nav-item>
        <b-nav-item href="#">Streaming</b-nav-item>
      </b-navbar-nav>
          <b-nav-item-dropdown text="Lectures" class="placementlinks1">
          <b-dropdown-item href="#">Actu-Jap</b-dropdown-item>
          <b-dropdown-item href="#">Forum</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <div class="hors-burger">
    <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 style-recherche" placeholder="Rechercher..."></b-form-input>
        </b-nav-form>
        <a href="/login" >
          <img src="../assets/poweroff.png" alt="boutonoff" width="40">
        </a>
      </div>
  </b-navbar>

  </div>
</template>

<script>
export default {
name: "navbar"
}
</script>

<style scoped>
.mynav{
    position: fixed;
    width: 100%;
    max-height: 100px;
    z-index: 1;
}
.colorfond{
    background-color: rgba(0,0,0,0.5);
}

.placementlinks{
    margin-top: 5px !important;
    margin-left: -10%;
    
}
.placementlinks1{
    margin-top: 5px !important;
       
}

.logoplacement img{
    margin-left: 15% !important;
    width: 100px;
    

}
.navbar-light .navbar-nav .nav-link{
    color: #00fffc !important;
    font-size: 20px;
    padding: 0px 20px !important;
      
}

.navbar-light .navbar-toggler{
  border: none;
  outline-style: none;
  
}
.burger{
  color: #00fffc !important;
  
}

.style-recherche{
    border-radius: 15px !important;
    border: 2px solid #00fffc !important;
}

.hors-burger{
  display: flex;
  margin-right: 100px;
  justify-content: space-around;
}
</style>