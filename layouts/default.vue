<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <Header />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from './../components/template/headerP'
import Footer from './../components/template/footer'
import Loader from './../components/page_loader'
export default {
  data() {
    return {
      loading: true
    }
  },

  components: {
    Header,
    Footer,
    Loader
  },

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>

<style>
html {
  font-family: 'Source sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.fadeOut {
  animation-name: fadeOut;
}

.banner {
  height: 99.5vh;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
