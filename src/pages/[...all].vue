<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <body>

    <div class="container">
      <img src="/404.svg" alt="" />
        <h1>{{ t('La página que ha solicitado no se encuentra disponible') }}</h1>
        <div class="boton">
          <a href="/">Volver atras</a>
        </div>
    </div>
  </body>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
<style scoped>
body{
    background: rgb(8,28,34);
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
}
img{
    width: 50%;
}
.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
}
h1{
    color: rgb(233, 238, 245);
    font-size: 20px;
    padding: 20px;
}
a{
    padding: 13px 30px;
    border-radius: 15px;
    border: none;
    background: rgb(5, 129, 245);
    color: white;
    text-decoration: none;
}

@media screen and (max-width:630px){
    h1{
        font-size: 16px;
    }
}
</style>
