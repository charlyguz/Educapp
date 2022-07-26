
<template>
  <div class="hijo__container" :style=style>
    <div class="hijo__container--img" :style="style2"></div>
    <p class="hijo__container-title">{{ title }}</p>
    <p class="hijo__container-nivel">{{ nivel }}</p>
    <p class="hijo__container-racha">{{ racha }}</p>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    color: String,
    img: String,
    title: String,
    nivel: String,
    racha: String,
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
.hijo__container {
  border-radius: .8rem;
 
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio : 1 / 1;
  justify-content: center;
  align-items: center;
}

.hijo__container-title{
  font-size: 1.6rem;
  font-weight: 600;
}

.hijo__container--img {
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

.hijo__container-nivel {
  font-size: 1.2rem;
  font-weight: 700;
}

.hijo__container-racha {
  font-size: 1.2rem;
  font-weight: 700;
}

p {
  margin: 0;
}

</style>