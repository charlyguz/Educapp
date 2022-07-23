<template>
<navbar link1="/estudiantes/comunidad" name1="Comunidad" link2="/estudiantes/agenda" name2="Agenda" link3="/estudiantes"  link4="/estudiantes/progreso" name4="Progreso" link5="/estudiantes/cursos" name5="Mis Cursos"></navbar>
  <div class="section__index-container container flex-wrap flex-md-nowrap m-auto">
      <div class="w-100 d-flex justify-start">
    <h5 class="global-title">Notificaciones:</h5>
      </div>
  <section class="">
    <div class="w-100 d-flex justify-content-between">
      <h5 class="global-subtitle">Tu progreso para cumplir tu meta</h5>
      <a class="text-dark" href="">Ver mas</a>
    </div>
    <div class="progress progress-striped active">
      <div class="progress-bar progress-bar-purple" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">
          NIVEL: 20<img class="logo-progress" src="/icons/cohete.png" alt="">
      </div>
    </div>
  </section>
  <section class="mis_cursos w-100">
    <div class="w-100 d-flex justify-content-between">
      <h5 class="global-subtitle">Continua donde te quedaste:</h5>
      <a class="text-dark" href="">Ver mas</a>
    </div>
    <div class="section__comunidad-container-grid">
      <curso img="../../public/imgs/biologia.jpg" title="Fundamentos de biología" description="Describir la organización de los seres vivos en general y del ser humano" color="#6cb17d"></curso>
            <curso img="../../public/imgs/matematicas.jpg" title="Ángulos" description="la parte del plano determinada por dos semirrectas. Veras esto y mucho más.." color="#E6958c"></curso>
            <curso img="../../public/imgs/ciencias.jpg" title="Partes de un cuento" description="Los cuentos entretienen, aportan valores y ayudan al desarrollo de las emociones" color="#8ccee6"></curso>
    </div>
  </section>

  <section class="todos_cursos  w-100 ">
    <div class="w-100 d-flex justify-content-between">
      <h4 class="global-subtitle">Comienza un nuevo curso: </h4>
      <a href="">Ver mas</a>
    </div>
      <div class="section__materia-container-grid">
        <materia color="#8ccee6" materia="Cursos de Español"></materia>
        <materia color="#6cb17d" materia="Cursos de Biologia"></materia>
        <materia color="#E6958c" materia=" Cursos de Matematicas"></materia>
        <materia color="#f79ae5" materia="Cursos de Ingles"></materia>
        <materia color="#8ccee6" materia="Cursos de Geografía"></materia>
        <materia color="#f9d99a" materia="Cursos de Historia"></materia>
        <materia color="#75f9f2" materia=" Cursos de Artes"></materia>
        <materia color="#f4bfad" materia="Cursos de Vida Saludable"></materia>
        <materia color="#f6d1de" materia="Cursos de Computación"></materia>
      </div>

  </section>
  <chatbot></chatbot>
  </div>
  <!-- notificaciones -->


</template>

<script>
export default {
  data() {
    return {
      name: 'Erick',
      notification: false,
      notifications: [],
    }
  },
  // poner texto si no hay notificaiones
  computed: {
    notificationText() {
      if (this.notifications.length === 0) {
        return 'No tienes notificaciones'
      } else {
        return 'Tienes ' + this.notifications.length + ' notificaciones'
      }
    }
  },
  methods: {
    toggleNotification() {
      this.notification = !this.notification
      // girar la imagen
      let img = document.querySelector('.icon-notifications img')
      img.classList.toggle('rotate')
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
    color: rgb(0, 0, 0);
  } 

  .section__index-container {
  padding: 0 2.4rem;
}

    .global-title {
    margin: 0;
    font-size: 2rem;
    padding: 2.4rem 0;
  }

  .global-subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .section__comunidad-container-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat( auto-fill, minmax(410px, 1fr));
    grid-auto-rows: 1fr;
    padding-bottom: 2.4rem;
  }

  .section__materia-container-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat( auto-fill, minmax(410px, 1fr));
    grid-auto-rows: 1fr;
    padding-bottom: 1.2rem;
    margin-bottom: 2.4rem;
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

  .notifications-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .notification {
    width: 100%;
    height: 130px;
    border: 1px solid #000;
  }
  .rotate {
    transform: rotate(180deg);
  }
  .icon-notifications img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .progress {
    width: 100%;
    height: 30px;
    background-color: #D9E3FF;
    margin-bottom: 2.4rem;
    
  }
  .progress-bar-purple {
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
    left:20%;
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
    border-radius: 0 1rem 1rem 0;
    cursor: pointer;
  }
  .logo img {
    width: 50px;
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
  .clases {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .icon-play {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    display: none;

  }
  .clase:hover .icon-play {
    display: block;
  }
  .clase:hover{
    box-shadow: 0 0 10px #000;
    filter: brightness(1);
  }
  .clases:hover{
    box-shadow: 0 0 10px #000;
  }
  .comunidad, .agenda, .cursos, .progreso {
    font-weight: bold;
  }
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



</style>

<route lang="yaml">
meta:
  layout: globals
</route>