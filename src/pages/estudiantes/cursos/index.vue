<template>
  <navbar
    link1="comunidad"
    name1="Comunidad"
    link2="agenda"
    name2="Agenda"
    link3="./"
    link4="progreso"
    name4="Progreso"
    link5="cursos"
    name5="Mis Cursos"
  ></navbar>
  <section class="section__comunidad container">
    <div class="section__comunidad-container">
      <div class="section__comunidad-container-header">
        <h2 class="global-title">Mis cursos</h2>

        <button
          class="section__comunidad-container-header-button filtros-button btn btn-secondary"
        >
          Filtros
        </button>
      </div>

      <p class="section__comunidad-container-header-description">
        Empieza o continua un curso. Estos cursos estan verificados y son
        seguros para ti. Recuerda que nuestra único proposito es hacer que te
        sientas comodo.
      </p>

      <p class="global-subtitle">Continua con el curso</p>

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
            description="sirve para determinar el vínculo lineal entre dos términos. Por ejemplo, si con un kilo de harina de trigo, preparo 2 tortas, con 5 kilos, cuantas tortas se harán."
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

      <p class="global-subtitle">Cursos recomendados</p>

      <div class="section__comunidad-container-grid">
        <curso
          img="/imgs/biologia.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
        <curso
          img="/imgs/matematicas.jpg"
          title="Ángulos"
          description="la parte del plano determinada por dos semirrectas. Veras esto y mucho más.."
          color="#E6958c"
        ></curso>
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

      <p class="global-subtitle">Prueba nuevos cursos</p>

      <div class="section__comunidad-container-grid">
        <curso
          img="/imgs/biologia.jpg"
          title="Ángulos"
          description="la parte del plano determinada por dos semirrectas. Veras esto y mucho más."
          color="#E6958c"
        ></curso>
        <curso
          img="/imgs/matematicas.jpg"
          title="Partes de un cuento"
          description="Los cuentos entretienen, aportan valores y ayudan al desarrollo de las emociones"
          color="#8ccee6"
        ></curso>
        <curso
          img="/imgs/ciencias.jpg"
          title="Fundamentos de biología"
          description="Describir la organización de los seres vivos en general y del ser humano"
          color="#6cb17d"
        ></curso>
        <curso
          img="/imgs/biologia.jpg"
          title="Ángulos"
          description="la parte del plano determinada por dos semirrectas. Veras esto y mucho más.."
          color="#E6958c"
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
</style>

<route lang="yaml">
meta:
  layout: globals
</route>
