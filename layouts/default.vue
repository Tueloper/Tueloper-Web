<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <Header />
      <nuxt />
      <div ref="btnn" class="btnn animated bounceInUp 2s">
        <div @click.prevent="topFunction" id="myBtn" title="Go to top">
          <i class="fa fa-arrow-up animated jello infinite"></i>
        </div>
      </div>
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

    document.addEventListener('scroll', this.scrollFunction)
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollFunction)
  },

  watch: {},

  methods: {
    scrollFunction() {
      const btnTop = this.$refs['btnn']
      // return console.log(btnTop)
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 20
      ) {
        btnTop.style.display = 'block'
      } else {
        btnTop.style.display = 'none'
      }
    },

    seen() {
      console.log('i am seeennn')
    },

    topFunction() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
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

.btnn {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
}

#myBtn {
  display: block;
  font-size: 20px;
  border: 3px solid black;
  background-color: #fff;
  color: black;
  padding: 10px 15px;
  border-radius: 4px;
  transition: 2s;
}
#myBtn:hover {
  background-color: rgb(0, 0, 0);
  color: white;
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
