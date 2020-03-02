<template>
  <div class="design">
    <div class="icon-bar">
      <a href="#" class="facebook">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="#" class="twitter">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#" class="google">
        <i class="fa fa-google"></i>
      </a>
      <a href="#" class="linkedin">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>

    <div class="sectoion-text">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

    <div class="emailly">
      <p>ozurumbatochukwu@yahoo.com</p>
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
}
.icon-bar {
  /* width: 15%; */
  /* position: fixed; */
  top: 75%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sectoion-text {
  width: auto;
}

.emailly {
  width: 15%;
}
</style>