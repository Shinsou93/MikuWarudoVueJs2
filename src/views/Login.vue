<template>
    <div class="login">

        <myNavbarLog/>

        <div class="imagedefondlog">
            <img src="../assets/Hatsunefond5.jpg" alt="mikuwelcome">

        </div>

        <form method="POST" action="/profil" class="formulairelog">
            <h1>LOGIN</h1>
            <p class="pseudo">Pseudo:</p>
            <input name="pseudo" type="text" id="pseudo">
            <p>Password:</p>
            <input name="password" type="password" id="password"><br>
                <div class="optionsup">
                    <a href="/forgetpass" class="forgetpass">Mot De Pass Oublié ?</a>
                    <a href="/register" class="register">S'inscrire</a>
                </div>
            <button type="submit" class="start">Start !</button>

        </form>
        

        <myFooter/>

    </div>
</template>

<script>
import myNavbarLog from "../components/navbarlog.vue"
import myFooter from "../components/myfooter.vue"
export default {
name: "Login",

components: {
    myNavbarLog,
    myFooter
}
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli);

.login{
    margin: 0;
    padding: 0;
    position: relative;
}
.imagedefondlog img{
    width: 100%;
}

.formulairelog{
    
    position: absolute;
    width: 40%;
    height: 60%;
    background-color: rgba(0, 255, 252, 0.5);
    z-index: 1;
    left: 50%;
    top: -10%;
    transform: translate(-50%,50%);
    border-radius: 20px;
    border: 3px solid #00bff3;
}

.formulairelog h1{
    color: #fcff00;
    -webkit-text-stroke: 0.5px #00ff0c;
    text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);
    font-family: MV Boli !important;
    padding-top: 10%;
    font-size: 44px;
    font-weight: bolder;
}
.formulairelog p{
    color: #fcff00;
    font-size: 28px;
    text-align: left;
    padding-left: 15%;
    font-family: MV Boli;
}

.formulairelog input{
    width: 70%;
    border-radius: 10px;
    border: 1px solid #fcff00;
    height: 5%;
    outline-style: none;
}
.pseudo{
    margin-top: 25% !important;
}


/* Animation du bouton */
button {
    margin-top: 30% !important;
  z-index: 1;
  position: relative;
  font-size: 28px !important;
  font-family: MV Boli !important;
  color: #fcff00;
  -webkit-text-stroke: 1px #00ff0c;
  padding: 1px auto;
  width: 25%;
  outline: none;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px !important;
  border: 1px solid #fcff00;
}

button:hover {
  cursor: pointer;
  text-shadow: 0 0 0.5em rgb(0, 255, 12), 0 0 0.5em  rgb(0, 255, 12);

}

button::before {
  content: '';
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

.forgetpass{
    left: 15%;
    position: absolute;
    font-size: 12px;
    color: #fcff00;
}

.register{
    right: 15%;
    position: absolute;
    font-size: 12px;
    color: #fcff00;
}
</style>