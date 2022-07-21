<template>
  <header class="navbar navbar-expand-md navbar-dark bd-navbar">
    <nav class="navbar navbar-expand-lg container-xxl flex-wrap flex-md-nowrap">
      <div class="container-fluid d-flex">
        <a class="navbar-brand" href="#">
          <image
            src="/favicon.svg"
            class="nav-logo d-inline-block align-middle"
            width="40"
            height="40"
          ></image>
          <span class="fs-4"> Educapp </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="¿Qué estás buscando?"
              aria-label="Buscar"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/estudiantes" class="nav-link fs-6 mx-1">¿Qué ofrecemos?</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tutorias" class="nav-link fs-6 mx-1" href="#">Sobre Nosotros</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-6 mx-1" href="#">¿Cómo usar?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-6 mx-1" href="#">Donaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-6 mx-1" href="#">Inicia Sesión</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-6 mx-1" href="#">Registrate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-logo {
  border-radius: 100%;
}
</style>
