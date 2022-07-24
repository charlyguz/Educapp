<script setup lang="ts">
const showQuiz = ref(false)
function toogleQuiz() {
  showQuiz.value = !showQuiz
}
</script>
<template>
  <div class="container-xxl flex-wrap flex-md-nowrap">
    <div class="row">
      <div class="col">
        <div class="fs-1">Regla de tres</div>
        <br />
        <iframe
          class="su-youtube"
          width="40%"
          height="15%"
          src="https://www.youtube.com/embed/_JeR__bXzG0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <regla-de-tres></regla-de-tres>
        <quiz></quiz>
      </div>
    </div>
  </div>
</template>

<style scoped>
.su-youtube {
  margin: 0 auto;
  display: block;
}
</style>
