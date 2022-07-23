<template>
  <div class="materia-container" :style="style">
    <p class="materia-title">{{ materia }}</p>
  </div>
</template>

<script>
export default {
  props: {
    materia: String,
    color: String
  },
  computed: {
      style () {
        return 'background-color: ' + this.color;
      }
  }
}
</script>

<style scoped>

  .materia-container {
    border-radius: .8rem;
    display: flex;
    align-items: center;
    padding: 1.2rem;
    width: 100%;
    height: 100px;
    
  }

  .materia-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    padding: 0 2.4rem;
  }
</style>