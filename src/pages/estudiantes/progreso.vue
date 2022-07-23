
<template>
  <navbar link1="comunidad" name1="Comunidad" link2="agenda" name2="Agenda" link3="./"  link4="progreso" name4="Progreso" link5="cursos" name5="Mis Cursos"></navbar>
  <section class="section__progreso container">
      <div class="section__progreso-container">
        
          <div class="section__comunidad-container-header">
            <h2 class="global-title">Progreso</h2>
          </div>
          
        
          <p class="section__comunidad-container-header-description">Explora el espacio. Eres un astronauta que que esta visitando planetas. En cada planeta recoges material para poder desbloquear recoompensas. ¿Estas listo?</p>

        <div class="section__progreso-container-grid">
          <div>
            <div class="perfil-container">
              <img class="perfil-image" src="/public/imgs/astronauta.jpg" alt=""> 
              <p class="perfil-Nombre">Juan</p>
              <P class="perfil-rol">Viajero</P>
              <p class="perfil-experiencia">1700 xp</p>
              <p class="perfil-experiencia">20 días seguidos aprendiendo <span>2X</span></p>
            </div>
          </div>

          <div class="progreso-container">
            <div class="progreso-container-left">
              <p>Recompensa 5 - Entrada gratis en Kidzania</p>
              <p>Recompensa 3 - 50% de descuento en Pizzas</p>
              <p>Recompensa 1 - 30% en FutHack</p>
            </div>
            <div class="progreso-container-cohete"><img class="progreso-container-img" src="/public/imgs/universo.png" alt=""><img class="progreso-container-img2" src="/public/imgs/cohete.png" alt=""></div>
            <div class="progreso-container-right">
              <p>Recompensa 4 - 20% en CineHack</p>
              <p>Recompensa 2 - 10% en Dulceria</p>
            </div>
          </div>
        </div>

        
      </div>
  </section>

  
</template>

<script>
export default {
}
</script>

<style scoped>

.section__progreso-container {
  padding: 0 2.4rem;
}
  .section__comunidad-container-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    padding-bottom: 2.4rem;
  }

  .section__progreso-container-grid {
    display: flex;
    gap: 20%;
  }

  .progreso-container {
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  .progreso-container-left {
    font-size: 20px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 9rem;
  }

  .progreso-container-right {
    padding-top: 8rem;
    font-size: 20px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 7rem;
  }

  .progreso-container-img{
    width: 100%;
  }

  .progreso-container-cohete {
    position: relative;
  }

  .progreso-container-img2 {
    width: 50px;
    position: absolute;
    bottom: 30%;
    right: calc(50% - 25px);
  }

  .section__comunidad-container-header {
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 0;
    align-items: center;
  }
  .global-title {
    margin: 0;
    font-size: 2rem;
  }

  .global-subtitle {
    font-size: 1.8rem;
    font-weight: 600;
  }


  .section__comunidad-container-header-description {
    font-size: 1.6rem;
  }
  .section__comunidad-container-header-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  .btn-primary {
    font-size: 1.6rem;
    padding: .4rem .8rem;
  }
  .btn-outline-primary {
      font-size: 1.6rem;
    padding: .4rem .8rem;
  }
  .btn-secondary {
      font-size: 1.6rem;
    padding: .4rem .8rem;
  }
  .crear-publicaciones-button {
    display: flex;
    align-items: center;
  }
  .icon-plus {
    width: 20px;
    padding-left: .5rem;
  }

.perfil-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 200px;
}
.perfil-image {
  width: 200px;
}
.perfil-Nombre {
  font-size: 2rem;
  font-weight: 600;
}
.perfil-rol {
  font-size: 1.6rem;
  font-weight: 600;
}
.perfil-experiencia{
  font-size: 1.6rem;
  font-weight: 600;
  position: relative;
}

.perfil-experiencia span{
  font-size: 2rem;
  position: absolute;
  right: 20px;
  background-color: rgb(243, 89, 89);
  padding: .2rem;
  border-radius: 100%;
  
}
</style>

<route lang="yaml">
meta:
  layout: globals
</route>