<template>
  <div class="validmail">

      <myNavbar/>
        
        <img src="../assets/Hatsunefond.jpg" alt="imagesendmail">
        
        <h1 class="messagevalid">Compte Activé !<br/>Bienvenue sur<br/><br/>MIKU WARUDO !
        </h1>

        <button onclick="window.location.href ='/login';">Connexion</button>
            
        
    <myFooter/>

  </div>
</template>

<script>
import myNavbar from"../components/navbarlog.vue"
import myFooter from"../components/myfooter.vue"
export default {
name: "Validmail",
data() {
    return {
        email: this.$route.params.email,
    };
},

created() {
    this.axios.post("http://localhost:3000/user/validemail/",{
        email: this.email,
    })
    .then((res) =>{
        console.log(res);
    })
    .catch(err => {
        alert(err);
    });
},

components: {
    myNavbar,
    myFooter
}
}
</script>

<style scoped>
.validmail{
    margin: 0;
    padding: 0;
    position: relative;
}


.validmail img{
position: relative;
width: 100%;
z-index: -1;

}

.messagevalid{
    position: absolute;
    left: 0;
    right: 0;
    color: #fcff00;
    font-family: MV Boli;
    top: 25%;
    -webkit-text-stroke: 3px #4b4746;
    font-size: 50px;

    
    
}

/* Animation du bouton */
button {
z-index: 1;
    font-size: 28px !important;
    font-family: MV Boli !important;
    color: #fcff00;
    padding: 0px;
    width: 10%;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px !important;
    border: 1px solid #c83e7a;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
}

button:hover {
  cursor: pointer;
  text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em rgb(0, 255, 12);
}

button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #c83e7a;
  border-radius: 20px;
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}



</style>