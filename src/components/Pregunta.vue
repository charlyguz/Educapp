<template>
  <div class="pregntas__container" :style=style>
    <p class="pregntas__container-title">{{ title }}</p>
    <p class="pregntas__container-clase">{{ clase }}</p>
    <p class="pregntas__container-estudiante">{{ estudiante }}</p>
    <div class="d-flex align-items-center justify-content-between mt-auto">
      <p class="pregntas__container-materia">{{ materia }}</p>
      
      <button
            class="section__comunidad-container-header-button mis-publicaciones-button btn btn-outline-dark"
          >
            Contestar
          </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    clase: String,
    materia: String,
    estudiante: String,
    color: String
  }, computed: {
    style() {
      return 'background-color:' + this.color;
    },
  },
}
</script>

<style>
.pregntas__container {
  border-radius: .8rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pregntas__container-title{
  font-size: 1.6rem;
  width: 80%;
  font-weight: 600;
}

.pregntas__container-clase {
  font-size: 1.2rem;
}

.pregntas__container-materia {
  padding: 0;
  margin: 0;

}

.pregntas__container-estudiante {
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.2rem;
}
</style>