<template>
  <header class="header">
      <h4>Mis Cursos Publicos:</h4>
      <div class="search-container d-flex alig-items-center">
        <label for="search">
          <img src="../../assets/icons/loupe.png" alt="buscador">
        </label>
        <input id="search" type="text" placeholder="Buscar...">
      </div>
      <div class="crear-container d-flex alig-items-center">
        <p @click="crearNuevaClase">Crear Nuevo</p>
        <p>+</p>
      </div>
      <div class="filtros-container d-flex alig-items-center">
        <p>Filtros</p>
      </div>
      <p>Ver Mas</p>
  </header>
   <div class="grupos-publicos">
      <div class="w-100 mx-4 row">
        <a href="" class="clase col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/biologia.jpg" alt="portada biologia">
          <h4 class=" h-100 py-2 border-top border-dark">Fundamentos de biologia</h4>
          <p>Mi calificacion:</p>
          <p class="star"><span>5</span> &#9733;&#9733;&#9733;&#9733;&#9733; <span>(25)</span> </p>
        </a>
        <a href="" class="clase col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/ciencias.jpg" alt="portada ciencias naturales">
          <h4 class=" h-100 w-100 py-2 border-top border-dark">Ciencias Naturales</h4>
          <p>Mi calificacion:</p>
          <p class="star"><span>4 </span> &#9733;&#9733;&#9733;&#9733; <span>(25)</span> </p>
        </a>
        <a href="" class="clase col text-dark container w-25 border border-dark rounded d-flex flex-column m-3">
          <img class="img w-100 img-fluid" src="../../assets/imgs/matematicas.jpg" alt="portada matematicas">
          <h4 class=" w-100 h-100 py-2 border-top border-dark">Matematicas 1</h4>
          <p>Mi calificacion:</p>
          <p class="star"><span>5 </span>&#9733;&#9733;&#9733;&#9733;&#9733; <span>(35)</span></p>
        </a>
      </div>
    </div>
      <header class="header">
      <h4>Mis Cursos Privados:</h4>
      <div class="search-container d-flex alig-items-center">
        <label for="search">
          <img src="../../assets/icons/loupe.png" alt="buscador">
        </label>
        <input id="search" type="text" placeholder="Buscar...">
      </div>
      <div class="crear-container d-flex alig-items-center">
        <p @click="crearNuevaClase">Crear Nuevo</p>
        <p>+</p>
      </div>
      <div class="filtros-container d-flex alig-items-center">
        <p>Filtros</p>
      </div>
      <p>Ver Mas</p>
  </header>
  <section>
    <div id="container" class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-red">
              <h5 class="card-title">Matematicas 2</h5>
              <p class="card-text">10 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>5</span> &#9733;&#9733;&#9733;&#9733;&#9733; <span>(55)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(1)">Ver Mas!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-ingles">
              <h5 class="card-title">Algebra 1</h5>
              <p class="card-text">15 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>3</span> &#9733;&#9733;&#9733;<span>(72)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(2)">Ver Mas!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-artes">
              <h5 class="card-title">Figuras Geometricas</h5>
              <p class="card-text">11 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>4</span> &#9733;&#9733;&#9733;&#9733; <span>(15)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(3)">Ver Mas!</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-brown">
              <h5 class="card-title">Matematicas 1</h5>
              <p class="card-text">10 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>5</span> &#9733;&#9733;&#9733;&#9733;&#9733; <span>(25)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(4)">Ver Mas!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-lectura">
              <h5 class="card-title">Dibujo Geometrico</h5>
              <p class="card-text">15 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>5</span> &#9733;&#9733;&#9733;&#9733;&#9733; <span>(118)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(5)">Ver Mas!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body bg-historia">
              <h5 class="card-title">Dibujo artistico</h5>
              <p class="card-text">11 Clases</p>
              <h6>Mi calificacion: <p class="star"><span>5</span> &#9733;&#9733;&#9733;&#9733;&#9733; <span>(330)</span> </p></h6>
              <a href="#" class="btn btn-primary" @click="toggleClass(6)">Ver Mas!</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section v-show="isOpen"  class="ver-mas" @click="toggleClass">
    <a href="#container"><img class="close-button" src="../../assets/icons/close.png" alt="boton para cerrar modal" @click="close"></a>
    <div :class=" { 'bg-red': band==1, 'bg-ingles': band==2, 'bg-artes': band==3, 'bg-brown': band==4, 'bg-lectura': band==5, 'bg-historia': band==6 } " class="list-class-container" @click="noCerrar">
      <div>
        <ul>
          <li>
            <h3>Clase 1</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
          <li>
            <h3>Clase 2</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
          <li>
            <h3>Clase 3</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
          <li>
            <h3>Clase 4</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
          <li>
            <h3>Clase 5</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
          <li class="pb-2">
            <h3>Clase 6</h3>
            <p>Vista por: 10</p>
            <p>Preguntas: 3</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <h3 class="titulo-preguntas">Preguntas de estudiantes: </h3>
  <section class="preguntas-estudiantes">
    <li v-for="(pregunta, index) in preguntas" class="lista-preguntas" :key="index">
      <h3>{{pregunta.curso}}: Clase {{pregunta.clase}}</h3>
      <h4>Estudiante: {{pregunta.nombre}}</h4>
      <p>{{pregunta.pregunta}}</p>
    </li>
  </section>

  <section class="retirar-pago">
    <h3>Retira tus Ganancias: </h3>
    <div class="retirar-pago-container">
      <h4>Tu saldo: $4,500</h4>
        <button class="custom-btn btn-4"><span>Retirar Ahora!</span></button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Profesores',
  data() {
    return {
      isOpen: false,
      band: 0,
      preguntas: [
        {
          curso: 'Matematicas 2',
          clase: 10,
          nombre: 'Juan',
          pregunta: '¿Como se hace el ejercicio 2 de la clas?'
        },
        {
          curso: 'Ciencias Naturales',
          clase: 1,
          nombre: 'Carlos',
          pregunta: '¿Como se llama el profesor que imparte la clase de Matematicas 1?'
        },
        {
          curso: 'Fundamentos de biologia',
          clase: 15,
          nombre: 'Erick',
          pregunta: '¿Que tenemos que hacer de tarea?'
        },
        {

          curso: 'Ciencias Naturales',
          clase: 9,
          nombre: 'Charly',
          pregunta: '¿Que sigue de esta clase?'
        },
        {
          curso: 'Matematicas 1',
          clase: 17,
          nombre: 'Aaron',
          pregunta: '¿Como paso a otra clase?'
        },
        {
          curso: 'Algebra 1',
          clase: 17,
          nombre: 'Amsi',
          pregunta: '¿Como subo mi tarea?'
        },
        {
          curso: 'Dibujo artistico',
          clase: 8,
          nombre: 'Jorge',
          pregunta: '¿Donde veo las otras clases?'
        },
        {
          curso: 'Dibujo geometrico',
          clase: 1,
          nombre: 'Elinai',
          pregunta: '¿Quien sera el siguiente profesor?'
        },
        {
          curso: 'Matematicas 1',
          clase: 4,
          nombre: 'Manuel',
          pregunta: '¿Cuantas tareas debo enviar?'
        },
        {
          curso: 'Algebra 1',
          clase: 10,
          nombre: 'Roberto',
          pregunta: '¿Se dan certificados o diplomas?'
        },
      ]
    }
  },
  methods: {
    toggleClass(id) {
      this.band = id
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = true;
    },
    noCerrar(e) {
      e.stopPropagation()
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .retirar-pago {
    margin: 4rem 2rem;
  }
  .retirar-pago-container {
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
.btn-4 {
  background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 1rem;
  border: none;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  font-weight: 700;
  border-radius: 10px;
}
.btn-4:hover{
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  color: rgb(255, 255, 255);
}
.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4:before {
  height: 0%;
  width: .1px;
}
.btn-4:after {
  width: 0%;
  height: .1px;
}
.btn-4:hover:before {
  height: 100%;
}
.btn-4:hover:after {
  width: 100%;
}
.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4 span:before {
  width: .1px;
  height: 0%;
}
.btn-4 span:after {
  width: 0%;
  height: .1px;
}
.btn-4 span:hover:before {
  height: 100%;
}
.btn-4 span:hover:after {
  width: 100%;
}

  .titulo-preguntas {
    margin-top: 4rem;
    margin-left: 2rem;
  }
  .preguntas-estudiantes {
    /* margin-top: 2rem; */
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 4rem;
  }
  .lista-preguntas {
    width: 230px;
    height: auto;
    background-color: lightgray;
    margin: 10px;
    border-radius: 8px;
    padding: 10px;
  }
  .grupos-publicos {
    box-sizing: border-box;
    width: 98%;
  }
  .star {
    font-size: 2.2rem;
    font-weight: bold;
    color: rgb(160, 148, 10);
  }
  .star span:nth-child(1) {
    color: rgb(101, 93, 6);
    font-size: 2rem;
  }
  .star span:nth-child(2) {
    color: rgb(210, 208, 183);
    font-size: 1.8rem;
  }
  .clase {
    width: 300px;
    height: 300px;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    filter: brightness(0.9);
  }
   .clase:hover{
    box-shadow: 0 0 10px #000;
    filter: brightness(1);
  }
   .img{
    width: 100%;
    min-height: 200px;
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

  .header {
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 3rem 0;
  }
.search-container {
  height: 3rem;
  width: 300px;
  border: 1px solid rgb(170, 170, 170);
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.search-container img {
  width: 16px;
  height: 16px;
  margin-left:8px;
  cursor: pointer;

}
#search {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  padding: 0 10px;
  outline: none;
}
.crear-container {
  width: 150px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: rgb(43, 136, 198);
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.crear-container :nth-child(1) {
  font-weight: bold;
  padding-top: 0.9rem;
}
.crear-container :nth-child(2) {
  margin-left: 10px;
  font-size: 2.5rem;
  font-weight: bold;
  padding-top: 0.5rem;

}
.filtros-container {
  width: 150px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  background: rgb(189, 189, 189);
  padding-top: 1.2rem;
  cursor: pointer;
}

.card-body {
  filter: brightness(0.9);
}
.card-body:hover {
  filter: brightness(1.1);
  box-shadow: 0 0 10px #000;

}
.card-title {
  font-size: 1.5rem;
}
.card-text {
  font-size:1.2rem;
}
.bg-red {
  background-color: #e2504c;
}
.bg-brown {
  background-color: #95b8f6;
}
.bg-ingles {
  background-color: #f79ae5;
  }
.bg-ciencias {
  background-color: #add5fa;
  }
.bg-historia {
  background-color: #f9d99a;
}
.bg-lectura {
  background-color: #b5ead7;
}
.bg-computacion {
  background-color: #f6d1de;
}
.bg-artes {
  background-color: #75f9f2;
}
.bg-vida {
  background-color: #f4bfad;
}
.ver-mas{
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.498);
  position: absolute;
  top: 0;
  z-index: 5;
  overflow-x: hidden;
  overflow-y: hidden;
}
.list-class-container {
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-height: 80%;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 9999;
}
.close-button {
  position: relative;
  top: 5%;
  left: 48%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 99999;
}
</style>
