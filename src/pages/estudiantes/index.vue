<template>
  <navbar link1="#so" name1="Comunidad" link2="#so" name2="Agenda" link3="#so"  link4="#so" name4="Progreso" link5="#so" name5="Mis Cursos"></navbar>
  
  <div class="container-xxl flex-wrap flex-md-nowrap m-auto">
      <div class="px-4 w-100 my-4 d-flex justify-start">
    <h5>Notificaciones:</h5>
      </div>
  <section class="progreso my-4 w-100 px-4">
    <div class="w-100 d-flex justify-content-between">
      <h5 class="mb-2">Tu progreso para cumplir tu meta</h5>
      <a class="text-dark" href="">Ver mas</a>
    </div>
    <div class="progress progress-striped active">
      <div class="progress-bar progress-bar-purple" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
          Progreso: 40%<img class="logo-progress" src="../../assets/icons/cohete.png" alt="">
      </div>
    </div>
  </section>
  <section class="mis_cursos my-4 w-100 px-4">
    <div class="w-100 d-flex justify-content-between">
      <h5>continua donde te quedaste</h5>
      <a class="text-dark" href="">Ver mas</a>
    </div>
    <div class="w-100">
      <div class="w-100 row">
        <a href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/biologia.jpg" alt="portada biologia">
        <h4 class="class_one h-100 py-4 border-top border-dark">Fundamentos de biologia</h4>
        </a>
        <a href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/ciencias.jpg" alt="portada ciencias naturales">
          <h4 class="class_two h-100 w-100 py-4 border-top border-dark">Ciencias Naturales</h4>
        </a>
        <a href="" class="clases col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/matematicas.jpg" alt="portada matematicas">
          <h4 class="class_three w-100 h-100 py-4 border-top border-dark">Matematicas 1</h4>
        </a>
      </div>
    </div>
  </section>

  <section class="todos_cursos my-4 w-100 px-4">
    <div class="w-100 d-flex justify-content-between">
      <h4 class="text-bold">Comienza un nuevo curso: </h4>
      <a href="">Ver mas</a>
    </div>
    <div class="w-100">
      <div class="row">
        <a href="" class=" clases col p-4 text-white m-3 bg-primary border border-dark rounded ">Clase 1</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-secondary border border-dark rounded ">Clase 2</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-danger border border-dark rounded ">Clase 3</a>
      </div>
      <div class="row">
        <a href="" class=" clases col p-4 text-white m-3 bg-danger border border-dark rounded ">Clase 4</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-primary border border-dark rounded ">Clase 5</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-secondary border border-dark rounded ">Clase 6</a>
      </div>
      <div class="row">
        <a href="" class=" clases col p-4 text-white m-3 bg-secondary border border-dark rounded ">Clase 7</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-danger border border-dark rounded ">Clase 8</a>
        <a href="" class=" clases col p-4 text-white m-3 bg-primary border border-dark rounded ">Clase 9</a>
      </div>
    </div>
  </section>
  <section class="help-section px-4">
    <div class="help-container">
      <img class="help-img" src="../../assets/imgs/chatbot.png" alt="">
      <p class="help-text">Necesitas ayuda?</p>
    </div>

  </section>
  </div>
  <!-- notificaciones -->
  

</template>

<script>
export default {
  data() {
    return {
      name: 'Erick',
    }
  },
}
</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
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
  .class_one{
    background-color: pink;
  }
  .class_two{
    background-color: rgb(45, 187, 85);
  }
  .class_three{
    background-color: rgb(244, 157, 171);
  }
  .progress {
    width: 100%;
    height: 30px;
    background-color: #D9E3FF;
  }
  .progress-bar-purple {
    /* background-image: linear-gradient(to right, #ffbf2b, #ff7300, #f91f06); */
    /* position: absolute; */
    /* width: 100vw;
    height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* font-size: 45px; */
    font-weight: bold;
    background: linear-gradient(150deg, #ffb702,  #f16202, #f90303);
    background-size: 400% 300%;
    animation: BgGradient 3.5s ease infinite;
  }
  @keyframes BgGradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 50% 0%;}
    100% {background-position: 0% 50%;}
}
  .logo-progress {
    position: absolute;
    left:40%;
    width: 40px;
    height: 40px;
  }
  .img{
    width: 100%;
    min-height: 200px;
  }
  .help-container {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .help-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px black solid;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    right: -10px;
  }
  .help-text {
    /* font-size: 1.5rem; */
    font-weight: bold;
    border: 1px black solid;
    padding: 0.5rem;
    padding-left: 1rem;
    border-radius: 0 1rem 1rem 0;
    cursor: pointer;
  }
  .logo img {
    width: 50px;
  }
  /* agregar sombra a las clase clses con hover */
  .clases:hover{
    box-shadow: 0 0 10px #000;
  }

/* poner comunidad:hover con el text-decoration de un color */
.comunidad:hover{
  text-decoration: underline;
  text-decoration-color: rgb(237, 156, 35);
  border-bottom: 3px solid rgb(237, 156, 35);

}
.agenda:hover{
  text-decoration: underline;
  text-decoration-color: rgb(35, 237, 230);
  border-bottom: 3px solid rgb(35, 237, 230);

}
.progreso:hover{
  text-decoration: underline;
  text-decoration-color: rgb(242, 60, 224);
  border-bottom: 3px solid rgb(242, 60, 224);

}
.cursos:hover{
  text-decoration: underline;
  text-decoration-color: rgb(35, 237, 99);
  border-bottom: 3px solid rgb(35, 237, 99);

}
.neon {
  font-weight: bold;
	text-align: center;
	text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  animation: neon 4s ease-in-out infinite;
}

@keyframes neon {
  0% {
    text-shadow:
      0 0 5px rgba(0,178,255,1),
      0 0 10px rgba(0,178,255,1),
      0 0 20px rgba(0,178,255,1),
      0 0 40px rgba(38,104,127,1),
      0 0 80px rgba(38,104,127,1),
      0 0 90px rgba(38,104,127,1),
      0 0 100px rgba(38,104,127,1),
      0 0 140px rgba(38,104,127,1),
      0 0 180px rgba(38,104,127,1);
  }
  50% {
  text-shadow:
    0 0 5px rgb(255, 30, 0),
    0 0 10px rgb(255, 0, 0),
    0 0 20px rgb(255, 34, 0),
    0 0 40px rgb(127, 50, 38),
    0 0 80px rgb(127, 38, 38),
    0 0 90px rgb(127, 38, 38),
    0 0 100px rgb(127, 47, 38),
    0 0 140px rgb(127, 48, 38),
    0 0 180px rgb(127, 50, 38);
  }
  100% {
    text-shadow:
      0 0 5px rgb(9, 255, 0),
      0 0 10px rgb(21, 255, 0),
      0 0 20px rgb(0, 255, 21),
      0 0 40px rgb(38, 127, 44),
      0 0 80px rgb(38, 127, 42),
      0 0 90px rgb(38, 127, 44),
      0 0 100px rgb(38, 127, 42),
      0 0 140px rgba(38,104,127,1),
      0 0 180px rgba(38,104,127,1);
  }
}
.neon:hover {
  /* transform: rotate(360deg); */
  font-size: 1.5rem;
}
.icon-game {
  width: 25px;
  transition: all 0.5s ease-in-out;
}
.neon:hover .icon-game {
  /* position: relative;
  top: 30px;
  right: -70px; */
  width: 40px;

}



</style>
