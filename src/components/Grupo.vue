<template>
  <div class="grupos__container" :style=style>
    <div class="grupos__container--img" :style="style2"></div>
    <p class="grupos__container-title">{{ title }}</p>
    <p class="grupos__container-number">{{ grupo }}</p>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    color: String,
    img: String,
    grupo: String,
    title: String,
  },
  computed: {
    style() {
      return 'background-color:' + this.color;
    },
    style2() {
      return 'background-image: url(' + this.img + ')'
    },
  },
}
</script>


<style scoped>
.grupos__container {
  border-radius: .8rem;
 
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio : 1 / 1;
  justify-content: center;
  align-items: center;
}

.grupos__container-title{
  font-size: 1.6rem;
  font-weight: 600;
}

.grupos__container--img {
  margin: 2rem;
  height: 50%;
  width: 50%;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.8rem;
  background-image: url('/imgs/matematicas.jpg');
}

.grupos__container-number {
  font-size: 1.2rem;
  font-weight: 700;
}

p {
  margin: 0;
}

</style>