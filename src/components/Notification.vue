<template>


  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="background-color: #d9e3ff">
    <img src="/imgs/logo.jpg" style="width: 18px" class="rounded me-2" alt="...">
    <strong class="me-auto title-toast">{{title}}</strong>
    <small class="time-change">{{time}}</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="close"></button>
  </div>
  <div class="toast-body">
    <div>
      {{msg}}
    </div>
    <router-link to="/tutorias/educapp-tutoria-cJ2xGTF3"><button class="section__comunidad-container-header-button mis-publicaciones-button btn btn-primary ">Unirse</button></router-link>
                  <!-- <button class="section__comunidad-container-header-button mis-publicaciones-button btn btn-primary ">Unirse</button> -->
  </div>
</div>
   
</template>

<script>
export default {
  props: {
    title: String,
    time: String,
    msg: String
  },

  methods: {
    close() {
    document.querySelector(".toast").style.display = "none"
    }
  }
}

</script>

<style scoped>
  .toast {
    width: 100%;
    border-radius: .8rem;
  }

  .title-toast {
    font-size: 1.8rem;
  }

  .toast-body {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    line-height: 2;
  }

  small {
    font-size: 1.6rem;
  }

  .btn-primary {
    font-size: 1.6rem;
    padding: .4rem .8rem;
  } 
</style>
