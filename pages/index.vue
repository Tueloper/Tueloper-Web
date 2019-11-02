<template>
  <div>
    <About/>    
    <Socials/>    
    <Education/>    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import About from '~/components/landing/about.vue'
import Socials from '~/components/landing/socials.vue'
import Education from '~/components/landing/education.vue'

export default {
  components: {
    Logo, About, Socials, Education
  }
}
</script>
