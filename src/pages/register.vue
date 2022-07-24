<template lang="">
  <header class="header">
    <nav class="header__nav container">
      <ul class="header__nav__ul">
        <li class="header__nav__ul-li">
          <a href="#ofrecemos" class="header__nav_ul-li-a">¿Qué ofrecemos?</a>
        </li>
        <li class="header__nav__ul-li">
          <a href="#acercade" class="header__nav_ul-li-a">¿Quiénes somos?</a>
        </li>
        <li class="header__nav__ul-li">
          <a href="#funciona" class="header__nav_ul-li-a">¿Cómo funciona?</a>
        </li>
        <li class="header__nav__ul-li">
          <router-link to="/" replace class=""
            ><img src="/imgs/logo.jpg" style="width: 50px" alt=""
          /></router-link>
        </li>
        <li class="header__nav__ul-li">
          <a href="#donaciones" class="header__nav_ul-li-a">Donaciones</a>
        </li>
        <li class="header__nav__ul-li">
          <a href="./login" class="header__nav_ul-li-a">Inicia Sesión</a>
        </li>
        <li class="header__nav__ul-li-2">
          <a href="./register" class="primary-button mr-18">¡Empieza hoy!</a>
        </li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <section class="section__register container py-64 grid-2">
      <div class="section__register--left p-48">
        <h2 class="section__register--left-title mb-32">Registrate</h2>
        <p class="section__register--left-description">
          Estas a un paso de tu mejor decisión. La educación es una parte
          fundamental en la vida. El tener la oportunidad de hacerlo una
          costumbre desde temprana edad es el mayor regalo que puedes recibir.
          <br />
          <br />
          Teniendo esto en cuenta, ¿Qué más da llenar un formulario?
        </p>
      </div>
      <div class="section__register--right">
        <div class="section__register--right-container">
          <div>
            <p class="section__register--right-title mb-3">Eres un...</p>

            <div
              class="btn-group btn-group-lg mb-3"
              role="group"
              aria-label="Basic outlined example"
            >
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  id="btnradio1"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-primary" for="btnradio1"
                  >Maestro</label
                >

                <input
                  id="btnradio2"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio2"
                  >Tutor</label
                >

                <input
                  id="btnradio3"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio3"
                  >Padre</label
                >

                <input
                  id="btnradio4"
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio4"
                  >Alumno</label
                >
              </div>
            </div>

            <form action="">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  id="exampleInputEmail1"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  id="exampleInputPassword1"
                  type="password"
                  class="form-control"
                />
              </div>
            </form>
          </div>

          <div class="d-grid gap-2 mt-auto">
            <button class="btn btn-primary" type="button" @click="llamar">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    llamar() {
      if (document.getElementById('btnradio1').checked == true) {
        window.location.href = './profesores'
      } else if (document.getElementById('btnradio2').checked == true) {
        window.location.href = './tutorias'
      } else if (document.getElementById('btnradio3').checked == true) {
        window.location.href = './padre'
      } else {
        window.location.href = './estudiantes'
      }
    },
  },
}
</script>

<style scoped>
@import '~/styles/login.css';
</style>

<route lang="yaml">
meta:
  layout: globals
</route>
