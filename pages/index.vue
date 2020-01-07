<template>
  <div>
    <About />
    <Socials />
    <Accomplishment />
  </div>
</template>

<script>
import Banner from './../components/landing/banner'
import About from './../components/landing/about'
import Socials from './../components/landing/socials'
import Accomplishment from './../components/landing/accomplishment'
export default {
  components: {
    Banner,
    About,
    Socials,
    Accomplishment
  }
}
</script>
