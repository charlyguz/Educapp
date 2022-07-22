<template>
  <main>
    <header class="header">
      <nav class="header__nav container">
        <ul class="header__nav__ul">
          <li class="header__nav__ul-li"><a href="#ofrecemos" class="header__nav_ul-li-a">¿Qué ofrecemos?</a> </li>
          <li class="header__nav__ul-li"><a href="#acercade" class="header__nav_ul-li-a">¿Quiénes somos?</a> </li>
          <li class="header__nav__ul-li"><a href="#funciona" class="header__nav_ul-li-a">¿Cómo funciona?</a> </li>
          <li class="header__nav__ul-li header__nav-logo "><a href="#" class="header__nav_ul-li-a">Logo</a> </li>
          <li class="header__nav__ul-li"><a href="#donaciones" class="header__nav_ul-li-a">Donaciones</a> </li>
          <li class="header__nav__ul-li"><a href="./login" class="header__nav_ul-li-a">Inicia Sesión</a> </li>
          <li class="header__nav__ul-li-2"><a href="./register" class="primary-button mr-18 ">¡Empieza hoy!</a></li>
        </ul>
      </nav>
    </header>

    <section class="section__hero">
      <div class="container grid-2 pb-160">
        <div class="section__hero--left">
          <h1 class="section__hero--left-h1 mt-100 mb-16">
            Empieza a aprender para ser el mejor de tu clase
          </h1>
          <p class="section__hero--left-p mb-48">
            Somos una organización que busca sacar el potencial en todos los
            niños. Impulsando sus fortalezas y mejorando sus debilidades.
          </p>
          <a href="/landing/register.html" class="primary-button mr-18"
            >¡Empieza hoy!</a
          >
          <a href="#acercade" class="secundary-button">Más de nosotros</a>
        </div>

        <div class="section__hero--right">
          <img
            src="/landing/Recurso_1.svg"
            alt=""
            class="section__hero--right-img"
          />
        </div>
      </div>
    </section>

    <section class="section__patrocinadores py-48">
      <div class="section__patrocinadores-container container d-fl">
        <h3 class="section__patrocinadores-container-title mb-32">
          Empresas y colaboradores que confian en nuestra metodología de
          aprendizaje para ser tu mejor version
        </h3>
        <div class="section__patrocinadores_boxes-container">
          <div class="section__patrocinadores_box">
            <img
              src="/landing/SEP_Logo_2019.svg"
              alt=""
              class="section__patrocinadores_box--img"
            />
          </div>
          <div class="section__patrocinadores_box">
            <img
              src="/landing/SEP_Logo_2019.svg"
              alt=""
              class="section__patrocinadores_box--img"
            />
          </div>
          <div class="section__patrocinadores_box">
            <img
              src="/landing/SEP_Logo_2019.svg"
              alt=""
              class="section__patrocinadores_box--img"
            />
          </div>
          <div class="section__patrocinadores_box">
            <img
              src="/landing/SEP_Logo_2019.svg"
              alt=""
              class="section__patrocinadores_box--img"
            />
          </div>
          <div class="section__patrocinadores_box">
            <img
              src="/landing/SEP_Logo_2019.svg"
              alt=""
              class="section__patrocinadores_box--img"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="funciona" class="section__steps container mt-100 mb-100">
      <p class="section__steps-subtitle mb-16">COMO FUNCIONA</p>
      <h2 class="section__steps-title mb-48">
        Empieza a aprender en tres pasos
      </h2>

      <div class="section__steps-container grid-2">
        <div class="section__steps-container--box-text">
          <span class="section__steps-container--box-text-number">01</span>
          <h3 class="section__steps-container--box-text-title mb-32">
            Registre a sus hijos en nuestra aplicación
          </h3>
          <p class="section__steps-container--box-text-description">
            Usted tiene el control sobre lo que su hijo consume en nuestra web.
            Por ello usted registra a su hijo para darle los accesos del perfil
            del menor.
          </p>
        </div>
        <div class="section__steps-container--box-image">
          <img src="/landing/mujerestudiando.svg" alt="" />
        </div>

        <div class="section__steps-container--box-image">
          <img src="/landing/mujerestudiando.svg" alt="" />
        </div>
        <div class="section__steps-container--box-text">
          <span class="section__steps-container--box-text-number">02</span>
          <h3 class="section__steps-container--box-text-title mb-32">
            Selecciona las clases y tutores
          </h3>
          <p class="section__steps-container--box-text-description">
            Usted tiene el control de elegir que sus hijos van a consumir. Asi
            como los tutores con el que podran tener sesiones uno a uno para
            resolver dudas y llevar un progreso.
          </p>
        </div>

        <div class="section__steps-container--box-text">
          <span class="section__steps-container--box-text-number">03</span>
          <h3 class="section__steps-container--box-text-title mb-32">
            Lleve el avance de sus hijos facilmente
          </h3>
          <p class="section__steps-container--box-text-description">
            Usted puede ver el avance de sus hijos en el periodo que usted
            desee. Con esto, puede evaluar el rendimiento de sus hijos. Con el
            fin de llevarlo por la mejor ruta.
          </p>
        </div>
        <div class="section__steps-container--box-image">
          <img src="/landing/mujerestudiando.svg" alt="" />
        </div>
      </div>
    </section>

    <section id="ofrecemos" class="section__ofrecemos py-100">
      <div class="section__ofrecemos container">
        <h2 class="section__ofrecemos-title mb-48">
          ¿Qué ofrecemos en Educapp?
        </h2>

        <div class="section__ofrecemos-grid">
          <div class="section__ofrecemos-grid-box">
            <img
              src="/landing/mujeresreloj.svg"
              alt=""
              class="section__ofrecemos-grid-box-image mb-48"
            />
            <h4 class="section__ofrecemos-grid-box-title mb-32">
              Aprende a tu ritmo
            </h4>
            <p class="section__ofrecemos-grid-box-description">
              Repasa cada clase como tu quieras. Así como poder avanzar más allá
              de los conocimientos bases
            </p>
          </div>

          <div class="section__ofrecemos-grid-box">
            <img
              src="/landing/mujerestudiando.svg"
              alt=""
              class="section__ofrecemos-grid-box-image mb-48"
            />
            <h4 class="section__ofrecemos-grid-box-title mb-32">
              Aprende lo que te gusta
            </h4>
            <p class="section__ofrecemos-grid-box-description">
              Escoge las materias que más te motiven. Para poder impulsar tus
              fortalezas y ser tu mejor version.
            </p>
          </div>

          <div class="section__ofrecemos-grid-box">
            <img
              src="/landing/dudas.svg"
              alt=""
              class="section__ofrecemos-grid-box-image mb-48"
            />
            <h4 class="section__ofrecemos-grid-box-title mb-32">
              Resuelve tus dudas
            </h4>
            <p class="section__ofrecemos-grid-box-description">
              En Educapp puedes preguntar y ver otras preguntas. La comunidad
              responde y aporta.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="acercade" class="section__acercade">
      <div class="section__acercade-container container py-100">
        <div class="section__acercade-grid grid-2">
          <div class="section__acercade-grid-left">
            <img src="/landing/maestro.svg" alt="" />
          </div>
          <div class="section__acercade-grid-right">
            <h2 class="section__acercade-title mb-48">¿Quienes somos?</h2>
            <p class="section__ofrecemos-grid-box-description">
              Educapp es una aplicación creada por jovenes entusiastas, con la
              finalidad de llegar a los niños en dificultades.
            </p>
            <br />
            <p class="section__ofrecemos-grid-box-description">
              Esta aplicación es totalmente gratuita. Asociados con la SEP,
              permitimos nivelar los conocimientos para alcanzar la mejor
              versión del estudiante.
            </p>
            <br />
            <p class="section__ofrecemos-grid-box-description mb-32">
              ¿Listo para ser tu mejor versión?
            </p>
            <a href="/landing/register.html" class="primary-button mt-16"
              >¡Empieza hoy!</a
            >
          </div>
        </div>
      </div>
    </section>

    <section id="donaciones" class="section__donaciones">
      <div class="section__donaciones-container container py-100">
        <div class="section__donaciones-grid grid-2">
          <div class="section__donaciones-grid-left">
            <h2 class="section__donaciones-title mb-48">Donaciones</h2>

            <p class="section__ofrecemos-grid-box-description">
              Esta plataforma es totalmente gratuita, por ello las donaciones
              son para fundamental para mantener la aplicación en funcionando.
            </p>
            <br />
            <p class="section__ofrecemos-grid-box-description mb-32">
              Esto con la intención de poder seguir llegando a jovenes y sacar
              su potencial. Esto siendo fundamental en edades tempranas para
              poder encaminar a lo que ellos realmente quieren ser.
            </p>


              <a
              href="#"
              class="secundary-button section__ofrecemos-grid-box-button"
               data-bs-toggle="modal" data-bs-target="#exampleModal"
              >¡Dona ahora!</a>

              <!-- Modal -->
              <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h2 id="exampleModalLabel" class="modal-title">Dona para poder seguir enseñando</h2>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="modal-body-left">
                        <h3 class="modal-body-left-title">¿Por qué donar?</h3>

                        <p class="modal-body-left-description">Esta plataforma es totalmente gratuita, por ello las donaciones son para fundamental para mantener la aplicación en funcionando.
</p><br>
                      <p class="modal-body-left-description">Esto con la intención de poder seguir llegando a jovenes y sacar su potencial. Esto siendo fundamental en edades tempranas para poder encaminar a lo que ellos realmente quieren ser.</p>


                      </div>
                      <div class="modal-body-right">
                        <div class="model-body-right-box">
                          <div><p class="modal-body-right-title">Frecuencia de la donación</p>
                          <div class="btn-group modal-body-right-div" role="group" aria-label="Basic radio toggle button group">
                            <input id="btnradio1" type="radio" class="btn-check  " name="btnradio" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio1">Única vez</label>

                            <input id="btnradio2" type="radio" class="btn-check " name="btnradio" autocomplete="off">
                            <label class="btn btn-outline-primary " for="btnradio2">Mensualmente</label>
                          </div>

                          <p p class="modal-body-right-title ">Cantidad de la donación</p>
                          <div class="btn-group modal-body-right-div"  role="group" aria-label="Basic radio toggle button group">
                            <input id="btnradio3" type="radio" class="btn-check" name="btnradio2" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio3">$10</label>

                            <input id="btnradio4" type="radio" class="btn-check" name="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio4">$20</label>

                            <input id="btnradio5" type="radio" class="btn-check" name="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio5">$50</label>

                            <input id="btnradio6" type="radio" class="btn-check" name="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio6">$100</label>

                            <input id="btnradio7" type="radio" class="btn-check" name="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio7">Otro</label>
                          </div>

                          <form action="">
                            <div class="modal-body-right-div">
                              <label for="exampleInputEmail1" class="form-label modal-body-right-title ">Nombre</label>
                              <input id="exampleInputEmail1" type="email" class="form-control modal-body-right-input" aria-describedby="emailHelp">

                            </div>
                            <div class="modal-body-right-div">
                              <label for="exampleInputPassword1" class="form-label modal-body-right-title">Correo</label>
                              <input id="exampleInputPassword1" type="email" class="form-control modal-body-right-input">
                            </div>
                          </form></div>
                          
                      
                        <div class="row gap-3">
                          <button class="btn btn-primary  btn-form-end col" type="button">Donar con tarjeta</button>
                          <button class="btn btn-primary  btn-form-end col" type="button">Donar con Paypal</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
      
          </div>
          <div class="section__donaciones-grid-right">
            <img src="/landing/donacion.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <Chatbot></Chatbot>
  </main>
</template>

<style scoped>
@import '~/styles/landing.css';
</style>

<route lang="yaml">
meta:
  layout: landing
</route>
