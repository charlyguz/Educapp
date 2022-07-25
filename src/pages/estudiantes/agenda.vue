<template>
  <navbar
    link1="comunidad"
    name1="Comunidad"
    link2="agenda"
    name2="Agenda"
    link3="./"
    link4="progreso"
    name4="Progreso"
    link5="cursos"
    name5="Mis Cursos"
  ></navbar>
  <section class="section__comunidad container">
    <div class="section__comunidad-container">
      <div class="section__comunidad-container-header">
        <h2 class="global-title">Agenda</h2>
      </div>

      <p class="section__comunidad-container-header-description">
        Aquí puedes ver las clases en vivo que tendrán. También cuando es tu
        proxima tutoria
      </p>

      <div class="month">
        <ul>
          <li class="prev">&#10094;</li>
          <li class="next">&#10095;</li>
          <li>Julio<br /><span style="font-size: 18px">2022</span></li>
        </ul>
      </div>

      <ul class="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul class="days">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li><span class="active">23</span></li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  list-style-type: none;
}
body {
  font-family: Verdana, sans-serif;
}

/* Month header */
.month {
  padding: 70px 25px;
  width: 100%;
  background: #d9e3ff;
  text-align: center;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: black;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-top: 10px;
}

/* Next button */
.month .next {
  float: right;
  padding-top: 10px;
}

/* Weekdays (Mon-Sun) */
.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

/* Days (1-31) */
.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
}

/* Highlight the "current" day */
.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
}

.section__comunidad-container {
  padding: 0 2.4rem;
  min-height: calc(100vh - 297px);
}
.section__comunidad-container-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  padding-bottom: 2.4rem;
}
.section__comunidad-container-header {
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
  align-items: center;
}
.global-title {
  margin: 0;
  font-size: 2rem;
}

.global-subtitle {
  font-size: 1.8rem;
  font-weight: 600;
}

.section__comunidad-container-header-description {
  font-size: 1.6rem;
}
.section__comunidad-container-header-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}
.btn-primary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.btn-outline-primary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.btn-secondary {
  font-size: 1.6rem;
  padding: 0.4rem 0.8rem;
}
.crear-publicaciones-button {
  display: flex;
  align-items: center;
}
.icon-plus {
  width: 20px;
  padding-left: 0.5rem;
}
</style>

<route lang="yaml">
meta:
  layout: globals
</route>
