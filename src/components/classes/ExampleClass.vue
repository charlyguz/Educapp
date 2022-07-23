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
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/_JeR__bXzG0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <regla-de-tres></regla-de-tres>
        <!-- <button type="button" class="btn btn-success" @click="toogleQuiz()">
          Mostar / ocultar quiz
        </button> -->
        <quiz></quiz>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
