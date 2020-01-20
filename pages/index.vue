<template>
  <div>
    <About />
    <Skills />
    <Projects />
    <!-- <Accomplishment /> -->
    <!-- <Socials /> -->
    <Contact />
  </div>
</template>

<script>
import Banner from './../components/landing/banner'
import About from './../components/landing/about'
// import Socials from './../components/landing/socials'
// import Accomplishment from './../components/landing/accomplishment'
import Projects from './../components/landing/project'
import Contact from './../components/landing/contact'
import Skills from './../components/landing/skills'
export default {
  components: {
    Banner,
    About,
    // Socials,
    // Accomplishment,
    Projects,
    Contact,
    Skills
  }
}
</script>
