
<template>
  <header class="header">
    <h3>Tu Nivel: <span class="bienvenida">{{level}}</span></h3>
    <nav class="navbar px-4">
      <li><a href="#" class="comunidad">Comunidad</a></li>
      <li><a href="#" class="agenda">Mi agenda</a> </li>
      <li><a href="/estudiantes" class="progreso">Mi Progreso</a> </li>
      <li><a href="#" class="cursos">Mis Cursos</a> </li>
    </nav>
  </header>
  <h1 id="background">BIENVENIDO A LA SALA DE JUEGOS Y RECOMPENSAS</h1>
  <section class="section-games">
    <div class="w-100 row">
        <div href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 5 } "  class="img w-100 img-fluid" src="../../assets/imgs/cartas.png" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span>5</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Juego de cartas</h4>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <a v-show="level >= 5" href="https://slizer98.github.io/Juego_blackJack/" target="_blank" class="custom-btn btn-12"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
        <div  class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 10 } " class="img w-100 img-fluid" src="../../assets/imgs/memorama.png" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span class="text-weigth-bold">10</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Juego Memorama</h4>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <a v-show="level >= 10" href="https://slizer98.github.io/memorama-game/" class="custom-btn btn-12" target="_blank"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
        <div class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 15 } " class="img w-100 img-fluid" src="../../assets/imgs/pokemon.png" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span class="text-weigth-bold">15</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Juego Pokemon</h4>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <a v-show="level >= 15" href="https://que-pokemon-es-vue.netlify.app" class="custom-btn btn-12" target="_blank"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
      </div>
      <div class="w-100 row">
        <div href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 20 } " class="img w-100 img-fluid" src="../../assets/imgs/snake.webp" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span class="text-weigth-bold">20</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Juego Snake</h4>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <a v-show="level >= 20" href="https://slizer98.github.io/juego-snake/" class="custom-btn btn-12" target="_blank"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
        <div href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 25 } " class="img w-100 img-fluid" src="../../assets/imgs/tarjeta.png" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span class="text-weigth-bold">25</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Tajeta de regalo</h4>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <a v-show="level >= 25" href="" class="custom-btn btn-12" target="_blank"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
        <div  class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <div>
            <img :class=" { 'active': level < 30 } " class="img w-100 img-fluid" src="../../assets/imgs/naves.png" alt="portada biologia">
            <p class="nivel-game">Nivel Necesario: <span class="text-weigth-bold">30</span> </p>
            <h4 class="class_one h-100 py-4 border-top border-dark">Juego Naves</h4>
          </div>
          <div  class="w-100 d-flex justify-content-center">
            <a v-show="level >= 30" href="https://slizer98.github.io/space-game/"  class="custom-btn btn-12" target="_blank"><span>Jugar!</span><span>Leer Mas</span></a>
          </div>
        </div>
      </div>

  </section>
</template>

<script>
export default {
  name: 'Juegos',
  data() {
    return {
      name: 'Erick',
      level: 20,
    };
  },

};

</script>

<style scoped>
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: 700;
  }

  .active {
    /* hacer la imagen gris */
    filter: grayscale(100%);
  }
.header {
    width: 100%;
    height: 60px;
    background-color: #D9E3FF;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .header h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    margin: 0 22px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 100%;
  }
  .navbar li {
    list-style: none;
  }
  .navbar li a{
    text-decoration: none;
    color: #000;
  }
  .comunidad, .agenda, .cursos, .progreso {
    font-weight: bold;
  }
    .bienvenida {
    font-weight: bold;
    font-size: 1.6rem;
    animation: colorChange 10s ease-in-out infinite;
  }
  @keyframes colorChange {
    0% {
      color: rgb(240, 12, 12);
    }
    25% {
      color: rgb(255, 187, 14);
    }
    50% {
      color: rgb(111, 249, 5);
    }
    75% {
      color: rgb(5, 132, 236);
    }
    100% {
      color: rgb(219, 25, 222);
    }
  }
#background {
  font-family: sans-serif;
  color: rgba(255, 255, 255, .1);
  background: linear-gradient(
    to right,
    rgb(76, 217, 105),
    rgb(52, 170, 220),
    rgb(88, 86, 217),
    rgb(255, 45, 83),
    rgb(255, 45, 83),
    rgb(88, 86, 217),
    rgb(52, 170, 220),
    rgb(76, 217, 105)
  );
  background-size: 400%;
  -webkit-background-clip: text;
  font-weight: 700;
  font-size: 5em;
  animation: sTransition 10s linear infinite;
}
@keyframes sTransition {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
.nivel-game {
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin: 0 22px;
}

.section-games {
  background-color: rgba(216, 216, 216, 0.5);
}
.clses{
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 100%;
  height: 280px;
}
.btn-12{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
  margin-left: 25px;
}
.btn-12 span {
  background: rgb(0,172,238);
  background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.btn-12 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
