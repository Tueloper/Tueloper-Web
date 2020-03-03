<template>
  <div class="row">
    <div class="column icons">
      <ul class="icon-bar animated bounce">
        <li>
          <a href="https://web.facebook.com/Tueloper" class="facebook animated slideInLeft">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="https://twitter.com/Tueloper" class="twitter">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="google">
            <i class="fa fa-medium"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="https://www.linkedin.com/in/tochukwu-ozurumba/" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="https://github.com/Tueloper" class="medium">
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="column data">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script>
import Banner from './../components/landing/banner'
import About from './../components/landing/about'
import Projects from './../components/landing/project'
import Contact from './../components/landing/contact'
import Skills from './../components/landing/work'
export default {
  components: {
    Banner,
    About,
    Projects,
    Contact,
    Skills
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow: hidden;
}
body {
  overflow-x: hidden;
}
.row {
  overflow: hidden;
}

.column {
  float: left;
  /* height: 300px; Should be removed. Only for demonstration */
}

.data {
  width: 75%;
}

.icons {
  width: 15%;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}

.icon-bar {
  width: 10%;
  position: fixed;
  top: 53%;
  margin-left: 65px;
  text-decoration: none;
  list-style-type: none;
}

.icon-bar li {
  text-decoration: none;
}

.icon-bar .fa {
  font-size: 21px;
  line-height: 1.2;
  color: black;
}

.icon-bar li a .fa:hover {
  color: rgb(161, 154, 154);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
