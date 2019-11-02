<template>
  <div>
    <About/>    
    <Socials/>    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import About from '~/components/landing/about.vue'
import Socials from '~/components/landing/socials.vue'

export default {
  components: {
    Logo, About, Socials
  }
}
</script>
