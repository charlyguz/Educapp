<template>
  <div class="grupos__container" :style=style>
    <img src="/69052.webp" alt="" class="grupos__container--img">
    <p class="grupos__container-title">Los poderesos</p>
    <p class="grupos__container-number">Grupo #81</p>
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
.grupos__container {
  background-color: #6cb17d;
  border-radius: .8rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.grupos__container-title{
  font-size: 1.6rem;
  width: 80%;
  font-weight: 600;
}

.grupos__container-number {
  font-size: 1.2rem;
}

</style>