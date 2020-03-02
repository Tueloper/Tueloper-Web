<template>
  <div class="design">
    <div>
      <ul class="icon-bar">
        <li>
          <a href="#" class="facebook">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="twitter">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="google">
            <i class="fa fa-google"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="medium">
            <i class="fa fa-medium"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="sectoion-text">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

    <div class="emailly">
      <!-- <p>ozurumbatochukwu@yahoo.com</p> -->
    </div>
  </div>
</template>

<script>
import Banner from './../components/landing/banner'
import About from './../components/landing/about'
import Projects from './../components/landing/project'
import Contact from './../components/landing/contact'
import Skills from './../components/landing/skills'
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

<style  scoped>
.design {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.icon-bar {
  width: 10%;
  position: fixed;
  top: 53%;
  margin-left: 40px;
  text-decoration: none;
  list-style-type: none;
}

.icon-bar li {
  text-decoration: none;
}

.icon-bar .fa {
  font-size: 23px;
  line-height: 1.2;
  color: black;
}

.icon-bar li a fa:hover {
  background-color: rgb(161, 154, 154);
}

.sectoion-text {
  width: 90%;
}

.emailly {
  width: 10%;
  position: fixed;
  float: right;
  top: 65%;
  /* transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%); */
}
</style>