

<template>
  <navbar
    link1="/profesores/comunidad"
    name1="Comunidad"
    link2="/profesores/cursos"
    name2="Mis Cursos"
    link3="/profesores"
    link4="/profesores/grupos"
    name4="Mis grupos"
    link5="/profesores/perfil"
    name5="Mis Perfil"
  ></navbar>
  <section class="section__comunidad container">
    <div class="section__comunidad-container">
      <div class="section__comunidad-container-header">
        <h2 class="global-title">Hola Hector</h2>

        
      </div>
      
      <p class="section__comunidad-container-header-description">
        Consulta el perfil de tus hijos. Usted tiene el control total sobre su hijo.
      </p>
      
      <div class="section__comunidad-container-header-subtitle">
        

        <div class="global-subtitle-container-left">
           <p class="global-subtitle">Hijos</p>
        </div>
      </div>

      <div class="section__comunidad-container-grid">
        <div class="section__comunidad-container-grid">
        <hijo color="#8ccee6" img='/imgs/niño.jpg' title="Juan" nivel="Viajero" racha="20 días seguidos"></hijo>
      </div>

      <div class="section__comunidad-container-grid">
        <hijo color="#f9d99a" img='/imgs/niño.jpg' title="Juan" nivel="Viajero" racha="20 días seguidos"></hijo>
      </div>

      <div class="section__comunidad-container-grid">
        <hijo color="#e6958c" img='/imgs/niño.jpg' title="Juan" nivel="Viajero" racha="20 días seguidos"></hijo>
      </div>

      </div>

      
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section__comunidad {
  min-height: calc(100vh - 297px);
}

.section__comunidad-container {
  padding: 0 2.4rem;
  
}

.ver-mas-container {
  display: flex;
  justify-content: end;
  align-items: center;
}

.ver-mas {
  font-size: 1.2rem;
}

.section__comunidad-container-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  padding-bottom: 2.4rem;
}
.section__comunidad-container-header {
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
  align-items: center;
}

.section__comunidad-container-header-subtitle {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
  
}


.global-title {
  margin: 0;
  font-size: 2rem;
}

.global-subtitle {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0;
  white-space: nowrap;
  margin-right: 2rem;
  line-height: 2;
}

.global-subtitle-container-left {
  display: flex;
  align-items: center;
  align-content: center;
}

.section__comunidad-container-header-description {
  font-size: 1.6rem;
}
.section__comunidad-container-header-buttons {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2rem;
}

.section__comunidad-container-header-buttons-preguntas {
  grid-template-columns: auto auto  ;
}

.btn-primary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.btn-outline-primary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.btn-secondary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.crear-publicaciones-button {
  display: flex;
  align-items: center;
}
.icon-plus {
  width: 20px;
  padding-left: 0.5rem;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.input-group{
  height: 100%;
}

.form-control{
  font-size: 1.6rem;
} 

.input-group-text {
  
}

</style>

<route lang="yaml">
meta:
  layout: globals
</route>
