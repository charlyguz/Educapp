<template>
  <navbar link1="#so" name1="Comunidad" link2="#so" name2="Agenda" link3="#so"  link4="#so" name4="Progreso" link5="#so" name5="Mis Cursos"></navbar>
  
  <div class="container-xxl flex-wrap flex-md-nowrap m-auto">
      <div class="px-4 w-100 my-4 d-flex justify-start">
    <h5>Notificaciones:</h5>
      </div>
  <section class="progreso my-4 w-100 px-4">
    <div class="w-100 d-flex justify-content-between">
      <p>Tu progreso para cumplir tu meta</p>
      <a class="text-dark" href="">Ver mas</a>
    </div>
    <div class="h-100 h-100 border border-dark text-center ">
      <!-- Grafica del avance del estudiante -->
      Grafica del avance del estudiante
    </div>
  </section>
  <section class="mis_cursos my-4 w-100 px-4">
    <div class="w-100 d-flex justify-content-between">
      <p>continua donde te quedaste</p>
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
    width: 80%;
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

</style>
