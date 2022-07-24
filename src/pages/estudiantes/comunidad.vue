<template>
  <navbar
    link1="/estudiantes/comunidad"
    name1="Comunidad"
    link2="/estudiantes/agenda"
    name2="Agenda"
    link3="/estudiantes"
    link4="/estudiantes/progreso"
    name4="Progreso"
    link5="/estudiantes/cursos"
    name5="Mis Cursos"
  ></navbar>
  <section class="section__comunidad container">
    <div class="section__comunidad-container">
      <div class="section__comunidad-container-header">
        <h2 class="section__comunidad-container-header-title global-title">
          Comunidad
        </h2>

        <div class="section__comunidad-container-header-buttons">
          <button
            class="section__comunidad-container-header-button mis-publicaciones-button btn btn-outline-primary"
          >
            Mis publicaciones
          </button>
          <button
            class="section__comunidad-container-header-button crear-publicaciones-button btn btn-primary"
          >
            Crear publicación
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

      <p class="section__comunidad-container-header-description">
        Comparte tus proyectos con el de otros. Para recibir recomendaciones de
        tus compañeros. También tú puedes ver lo de los demas y obtener
        inspiración para tu siguiente obra.
      </p>

      <div class="section__comunidad-container-grid">
        <publicacion
          img="/69052.webp"
          title="La noche estrellada"
          description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."
        ></publicacion>
        <publicacion
          img="/imgs/guernica.jpg"
          title="Guernica, de Pablo Picasso"
          description="Una de las más importantes del siglo XX que es testigo del bombardeo alemán."
        ></publicacion>
        <publicacion
          img="/imgs/ultimacena.jpg"
          title="La última cena, de Leonardo Da Vinci"
          description="Recrea la última cena de Pascua entre Jesús y sus apóstoles."
        ></publicacion>
        <publicacion
          img="/69052.webp"
          title="La noche estrellada"
          description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."
        ></publicacion>
        <publicacion
          img="/imgs/guernica.jpg"
          title="Guernica, de Pablo Picasso"
          description="Una de las más importantes del siglo XX que es testigo del bombardeo alemán."
        ></publicacion>
        <publicacion
          img="/imgs/ultimacena.jpg"
          title="La última cena, de Leonardo Da Vinci"
          description="Recrea la última cena de Pascua entre Jesús y sus apóstoles."
        ></publicacion>
        <publicacion
          img="/69052.webp"
          title="La noche estrellada"
          description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."
        ></publicacion>
        <publicacion
          img="/imgs/guernica.jpg"
          title="Guernica, de Pablo Picasso"
          description="Una de las más importantes del siglo XX que es testigo del bombardeo alemán."
        ></publicacion>
        <publicacion
          img="/imgs/ultimacena.jpg"
          title="La última cena, de Leonardo Da Vinci"
          description="Recrea la última cena de Pascua entre Jesús y sus apóstoles."
        ></publicacion>
        <publicacion
          img="/69052.webp"
          title="La noche estrellada"
          description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."
        ></publicacion>
        <publicacion
          img="/imgs/guernica.jpg"
          title="Guernica, de Pablo Picasso"
          description="Una de las más importantes del siglo XX que es testigo del bombardeo alemán."
        ></publicacion>
        <publicacion
          img="/imgs/ultimacena.jpg"
          title="La última cena, de Leonardo Da Vinci"
          description="Recrea la última cena de Pascua entre Jesús y sus apóstoles."
        ></publicacion>
      </div>
    </div>

    <div></div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section__comunidad-container-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0 2.4rem;
  padding-bottom: 2.4rem;
}
.section__comunidad-container-header {
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
  align-items: center;
}
.section__comunidad-container-header-title {
  margin: 0;
  font-size: 2rem;
}
.section__comunidad-container-header-description {
  padding: 0 2.4rem;
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
