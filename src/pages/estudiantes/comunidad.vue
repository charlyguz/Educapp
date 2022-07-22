<template>
  <navbar link1="comunidad" name1="Comunidad" link2="agenda" name2="Agenda" link3="./"  link4="progreso" name4="Progreso" link5="cursos" name5="Mis Cursos"></navbar>
  <section class="section__comunidad container">
      <div class="section__comunidad-container">
          <div class="section__comunidad-container-header">
            <h2 class="section__comunidad-container-header-title">Comunidad</h2>

            <div class="section__comunidad-container-header-buttons">
              <button class="section__comunidad-container-header-button mis-publicaciones-button btn btn-primary ">Mis publicaciones</button>
              <button class="section__comunidad-container-header-button crear-publicaciones-button btn btn-primary ">Crear publicación</button>
              <button class="section__comunidad-container-header-button filtros-button btn btn-primary ">Filtros</button>
            </div>
            
          </div>
          
          <p class="section__comunidad-container-header-description">Comparte tus proyectos con el de otros. Para recibir recomendaciones de tus compañeros. También tú puedes ver lo de los demas y obtener inspiración para tu siguiente obra.</p>

          <div class="section__comunidad-container-grid">
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            <publicacion img="../../public/69052.webp" title="La noche estrellada" description="La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh."></publicacion>
            
          </div>
      </div>
    
 
    

    <div></div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  .section__comunidad-container-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
    padding: 0 2.4rem;
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
    padding: .4rem .8rem;
  }
</style>

<style scoped>
@import '~/styles/login.css';
</style>

<route lang="yaml">
meta:
  layout: globals
</route>