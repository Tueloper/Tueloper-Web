<template>
  <div>
    <About />
    <Socials />
    <Projects />
    <Accomplishment />
    <Contact />
  </div>
</template>

<script>
import Banner from './../components/landing/banner'
import About from './../components/landing/about'
import Socials from './../components/landing/socials'
import Accomplishment from './../components/landing/accomplishment'
import Projects from './../components/landing/project'
import Contact from './../components/landing/contact'
export default {
  components: {
    Banner,
    About,
    Socials,
    Accomplishment,
    Projects,
    Contact
  }
}
</script>
