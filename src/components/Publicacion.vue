<template>
  <div class="publicacion__container">
    <div class="publicacion__container-img-box" :style="style">
    </div>
    <div class="publicacion__container-footer">
      <p class="publicacion__container-footer-title">{{ title }}</p>
      <p class="publicacion__container-footer-description">{{ description }}</p>
      
      <img src="" alt="" class="publicacion__container-footer-logo-comments">
      <img src="" alt="" class="publicacion__container-footer-logo-heart">
    </div>
  </div>
</template>

<script>

export default {
  name: "Slider",
  props: {
    img: String,
    title: String,
    description: String,
  }, computed: {
      style () {
        return 'background-image: url(' + this.img + ')';
      }
    }
};

</script>

<style>
  .publicacion__container {
    width: auto;
    background-color: rgb(188, 235, 238);
    aspect-ratio: 1/1;
    border-radius: .8rem;
  }

  .publicacion__container-img-box {
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: .8rem .8rem 0 0;
  }

  .publicacion__container-footer {
    padding: 2rem;
    font-size: 1.6rem;
  }


</style>