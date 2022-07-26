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
        

        <div class="global-subtitle-container-left">

           <h2 class="section__comunidad-container-header-title global-title">
            Mis Grupos
            </h2>

        
            <div class="input-group ">
              <input type="text" class="form-control" placeholder="Buscar curso..." aria-label="Recipient's username" aria-describedby="basic-addon2">
              <span id="basic-addon2" class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg></span>
            </div>
        </div>
      
        <div class="section__comunidad-container-header-buttons">
          

          
          <button
            class="section__comunidad-container-header-button crear-publicaciones-button btn btn-primary"
          >
            Crear Nuevo Grupo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg icon-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
          <button
            class="section__comunidad-container-header-button filtros-button btn btn-secondary"
          >
            Filtros
          </button>

        </div>
      </div>

      

      <div class="section__comunidad-container-grid">
        <grupo title="Los poderosos" color="#6cb17d" grupo="Grupo #81" img="'/imgs/biologia.jpg'"></grupo>
        <grupo title="Los padrotes" color="#8ccee6" grupo="Grupo #86" img="'/imgs/ciencias.jpg'"></grupo>
        <grupo title="Los superheroes" color="#e6958c" grupo="Grupo #88" img="'/imgs/matematicas.jpg'"></grupo>
        <grupo title="Los magos" color="#f9d99a" grupo="Grupo #89" img="'/imgs/historia.jpg'"></grupo>
        <grupo title="Los magos" color="#f9d99a" grupo="Grupo #89" img="'/imgs/historia.jpg'"></grupo>
        <grupo title="Los poderosos" color="#6cb17d" grupo="Grupo #81" img="'/imgs/biologia.jpg'"></grupo>
        <grupo title="Los padrotes" color="#8ccee6" grupo="Grupo #86" img="'/imgs/ciencias.jpg'"></grupo>
        <grupo title="Los superheroes" color="#e6958c" grupo="Grupo #88" img="'/imgs/matematicas.jpg'"></grupo>


      </div>
      
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section__comunidad-container {
  padding: 0 2.4rem;
  
}

.section__comunidad-container-header-title {
  margin: 0;
  font-size: 2rem;
  margin-right: 2rem;
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
  font-size: 2rem;
  width: auto;
  white-space: nowrap;
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
}

.section__comunidad-container-header-description {
  font-size: 1.6rem;
}
.section__comunidad-container-header-buttons {
  display: grid;
  grid-template-columns: auto auto;
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
