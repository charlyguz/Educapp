<template lang="">

    <main class="main">
      <section class="section__register container py-64 grid-2">
        <div class="section__register--left p-48 ">
          <h2 class="section__register--left-title mb-32">Registrate</h2>
          <p class="section__register--left-description">Estas a un paso de tu mejor decisión. La educación es una parte
            fundamental en la vida. El tener la oportunidad de hacerlo una costumbre desde temprana edad es el mayor
            regalo que puedes recibir.
            <br>
            <br>
            Teniendo esto en cuenta, ¿Qué más da llenar un formulario?
          </p>
        </div>
        <div class="section__register--right ">
          <div class="section__register--right-container">
            <div>
              <p class="section__register--right-title">Eres un...</p>

              <div class="btn-group btn-group-lg mb-3" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">Maestro</button>
                <button type="button" class="btn btn-outline-primary">Tutor</button>
                <button type="button" class="btn btn-outline-primary">Padre</button>
                <button type="button" class="btn btn-outline-primary">Alumno</button>
              </div>

              <form action="">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input id="exampleInputEmail1" type="email" class="form-control" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input id="exampleInputPassword1" type="password" class="form-control">
                </div>
            


            <div class="d-grid gap-2 mt-auto">

              <button class="btn btn-primary" type="button">Registrarse</button>
            </div>
            </form>
            </div>
          </div>

        </div>
      </section>
    </main>

</template>

<style scoped>
@import '~/styles/login.css';
</style>