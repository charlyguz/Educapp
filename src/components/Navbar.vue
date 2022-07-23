<template>
  <header class="header">
      <nav class="header__nav container">
        <ul class="header__nav__ul">
          <li class="header__nav__ul-li"> <router-link :to="link1" class="header__nav_ul-li-a">{{name1}}</router-link></li>
          <li class="header__nav__ul-li"><router-link :to="link2" class="header__nav_ul-li-a">{{name2}}</router-link>
          </li>
          <li class="header__nav__ul-li "><router-link :to="link3" replace class=""><img src="../../public/imgs/logo.jpg" style="width:50px" alt=""></router-link>
          </li>
          <li class="header__nav__ul-li"><router-link :to="link4" class="header__nav_ul-li-a">{{name4}}</router-link>
          </li>
          <li class="header__nav__ul-li"><router-link :to="link5" class="header__nav_ul-li-a">{{name5}}</router-link> </li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    link1: String,
    link2: String,
    link3: String,
    link4: String,
    link5: String,
    name1: String,
    name2: String,
    name4: String,
    name5: String,
  }
};
</script>

<style scoped>

.header {
  height: auto;
  background-color: #d9e3ff;
  height: 70px;
}

.header__nav {
  display: flex;
  height: 100%;
}

.header__nav__ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.header__nav__ul-li {
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 1.6rem;
  position: relative;
}

.header__nav__ul-li-2 {
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 1.6rem;
  position: relative;
}

.header__nav_ul-li-a:link,
.header__nav_ul-li-a:visited {
  text-decoration: none;
  color: #002169;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

.header__nav__ul-li:after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  transition: width 0.4s cubic-bezier(0.45, 0.05, 0.5, 0.1);
  border-bottom: 2px solid black;
}

.header__nav__ul-li:hover:after {
  width: 100%;
}



.primary-button:link,
.primary-button:visited {
  padding: 1.2rem 2.4rem;
  background-color: #002169;
  color: white;
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  text-decoration: none;
  border: 3px solid #002169;
}

.primary-button:active,
.primary-button:hover {
  padding: 1.2rem 2.4rem;
  background-color: white;
  color: #002169;
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
  animation-fill-mode: forwards;
}

.secundary-button:link,
.secundary-button:visited {
  padding: 1.2rem 2.4rem;
  background-color: #d9e3ff;
  color: #002169;
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  text-decoration: none;
  border: 3px solid #d9e3ff;
}

.secundary-button:active,
.secundary-button:hover {
  padding: 1.2rem 2.4rem;
  background-color: rgb(245, 240, 240);
  color: #002169;
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 3px solid rgb(245, 240, 240);
}

.container {
  max-width: 1200px;
  padding: 0 3.2rem;
  margin: 0 auto;
}
 
</style>
