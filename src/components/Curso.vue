<template>
  <div class="publicacion__container" :style="style2">
    <div class="publicacion__container-img-box" :style="style"></div>
    <div class="publicacion__container-footer">
      <p class="publicacion__container-footer-title">{{ title }}</p>
      <p class="publicacion__container-footer-description">{{ description }}</p>

      <img src="" alt="" class="publicacion__container-footer-logo-comments" />
      <img src="" alt="" class="publicacion__container-footer-logo-heart" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    img: String,
    title: String,
    description: String,
    color: String,
  },
  computed: {
    style() {
      return 'background-image: url(' + this.img + ')'
    },
    style2() {
      return 'background-color:' + this.color
    },
  },
}
</script>

<style scoped>
.publicacion__container-footer-title {
  font-size: 2rem;
  font-weight: 600;
}

.publicacion__container {
  height: 100%;
  background-color: rgb(188, 235, 238);

  border-radius: 0.8rem;
}

.publicacion__container-img-box {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.8rem 0.8rem 0 0;
}

.publicacion__container-footer {
  padding: 2rem;
  font-size: 1.6rem;
}
</style>
