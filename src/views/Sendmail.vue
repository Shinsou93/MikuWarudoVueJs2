<template>
  <div class="sendmail">

      <myNavbar/>
        <div class="mailbox">
         <div class="imagedefond">   
        <img src="../assets/MikuSendMail.jpg" alt="imagesendmail">
         </div>
            <div class="boxmessage">
                <h1 class="messagesend">Vous allez recevoir un mail dans quelques instants !<br/>
                Vérifiez votre boîte de reception svp.
                </h1>

                <button onclick="window.location.href ='/';">Retour</button>
            </div>
        </div>
    <myFooter/>

  </div>
</template>

<script>
import myNavbar from"../components/navbarlog.vue"
import myFooter from"../components/myfooter.vue"
export default {
name: "Sendmail",
components: {
    myNavbar,
    myFooter
}
}
</script>

<style scoped>
.sendmail{
    margin: 0;
    padding: 0;
    position: relative;
}


.sendmail img{
position: relative;
width: 100%;
z-index: -1;

}

.messagesend{
   
    left: 0;
    right: 0;
    color: #fcff00;
    font-family: MV Boli;
    
    
}

/* Animation du bouton */
button {
z-index: 1;
    font-size: 28px !important;
    font-family: MV Boli !important;
    color: #fcff00;
    -webkit-text-stroke: 1px #00ff0c;
    padding: 0px;
    width: 25%;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px !important;
    border: 1px solid #fcff00;
    margin-top: 5%;
    margin-bottom: 5%;
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
  border: 2px solid #fcff00;
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

.boxmessage{
    position: absolute;
    background-color: rgba(0,255,252,0.6);
    border-radius: 20px;
    width: 60%;
    top: 40%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 1;
   
}

</style>