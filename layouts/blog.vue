<template>
  <div>
    <Loader v-if="loading"/>
    <div>
      <nuxt/>
    </div>
  </div>
</template>
<script>

import Loader from './../components/page_loader'

export default {
  components: {
    Loader
  },

  data() {
    return {
      loading: true
    }
  },

   mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style>

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* font-size: 16px; */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


.fadeOut {
  animation-name: fadeOut; }

@keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } 
}

</style>
