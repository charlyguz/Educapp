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

           <p class="global-subtitle">Mis Cursos Privados</p>

        
            <div class="input-group mb-3">
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
            Crear Curso
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

          <div class="ver-mas-container">
            <a class="ver-mas" href="/estudiantes/progreso">Ver mas</a>
          </div>
        </div>
      </div>

      

      <div class="section__comunidad-container-grid">
        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
        <router-link to="/estudiantes/cursos/regla-de-tres">
          <curso
            img="/imgs/matematicas.jpg"
            title="Regla de tres"
            description="sirve para determinar el vínculo lineal entre dos términos. "
            color="#E6958c"
          ></curso>
        </router-link>
        <curso
          img="/imgs/ciencias.jpg"
          title="Partes de un cuento"
          description="Los cuentos entretienen, aportan valores y ayudan al desarrollo de las emociones"
          color="#8ccee6"
        ></curso>

        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>

        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
        <router-link to="/estudiantes/cursos/regla-de-tres">
          <curso
            img="/imgs/matematicas.jpg"
            title="Regla de tres"
            description="sirve para determinar el vínculo lineal entre dos términos. "
            color="#E6958c"
          ></curso>
        </router-link>

        <curso
          img="/imgs/ciencias.jpg"
          title="Partes de un cuento"
          description="Los cuentos entretienen, aportan valores y ayudan al desarrollo de las emociones"
          color="#8ccee6"
        ></curso>
        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>

         <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
        <router-link to="/estudiantes/cursos/regla-de-tres">
          <curso
            img="/imgs/matematicas.jpg"
            title="Regla de tres"
            description="sirve para determinar el vínculo lineal entre dos términos. "
            color="#E6958c"
          ></curso>
        </router-link>

        <curso
          img="/imgs/ciencias.jpg"
          title="Partes de un cuento"
          description="Los cuentos entretienen, aportan valores y ayudan al desarrollo de las emociones"
          color="#8ccee6"
        ></curso>
        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
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
