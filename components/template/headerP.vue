<template>
  <div>
    <!-- Header section start -->
    <nav
      ref="navbar"
      class="navbar fixed-top navbar-expand-lg"
      :class="[scroller ? backgroundBlack : backgroundLight]"
    >
      <div class="container-fluid header-container">
        <nuxt-link class="navbar-brand text-dark" to="/">
          <img src="./../../assets/img/favicon.ico.png" alt="TUE" />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="#Home">
                Home
                <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item active">
              <nuxt-link :class="[scroller ? navBlack : navLink]" to="#About"
                >About</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link :class="[scroller ? navBlack : navLink]" to="#Skills"
                >Skills</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link :class="[scroller ? navBlack : navLink]" to="#Projects"
                >Projects</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link :class="[scroller ? navBlack : navLink]" to="#Contact"
                >Contact</nuxt-link
              >
            </li>
          </ul>

          <a
            :class="[scroller ? navBlack : navLink]"
            target="_blank"
            href="https://res.cloudinary.com/dwtvwjhn3/raw/upload/v1579212854/TochukwuOzurumbaResume_1_ipj4as.pdf"
          >
            <button
              class="btn my-2 my-sm-0"
              :class="[scroller ? buttonWhite : buttonBlack]"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>

    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: 'headerP',

  data() {
    return {
      isScrolling: false,
      backgroundBlack: ['bg-dark', 'navbar-dark', 'shadow'],
      backgroundLight: ['bg-transparent'],
      navLink: 'nav-link',
      navBlack: 'nav-black',
      buttonBlack: ['btn-outline-dark', 'blog'],
      buttonWhite: ['btn-outline-light', 'blog_i']
    }
  },

  mounted() {
    document.addEventListener('scroll', this.scrollFunction)
  },

  computed: {
    scroller() {
      return this.isScrolling
    }
  },

  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop < 0 ||
        document.documentElement.scrollTop > 5
      ) {
        return (this.isScrolling = true)
      } else {
        return (this.isScrolling = false)
      }
    }
  }
}
</script>

<style scoped>
.navbar-brand img {
  margin-left: 15px;
  height: 50px;
  width: 40px;
  padding: 5px 0px;
  text-decoration: none;
  border-radius: 2px;
}

.header-container li .nav-link {
  font-size: 16px;
  color: rgb(102, 102, 102);
  padding: 0px 10px;
  text-decoration: none;
  /* font-weight: 600; */
}

.header-container li .nav-black {
  font-size: 16px;
  color: rgb(102, 102, 102);
  padding: 0px 10px;
  text-decoration: none;
  /* font-weight: 600; */
}

.blog {
  color: rgb(255, 255, 255);
  background: rgb(16, 16, 16);
  margin-left: 5px;
  border-radius: 0;
  font-weight: 500;
  padding: 2px 13px 4px;
}

.blog:hover {
  color: rgb(16, 16, 16);
  background: #fff;
  border: 1px solid rgb(16, 16, 16);
  border-radius: 4px;
}

.blog_i {
  color: rgb(16, 16, 16);
  background: #fff;
  margin-left: 5px;
  border-radius: 0;
  font-weight: 500;
  padding: 2px 13px 4px;
}

.bg-light {
  background: #fff !important;
}

.bg-dark {
  background: rgb(16, 16, 16) !important;
}

.nav-black {
  color: #fff !important;
}

.blacknav:hover {
  color: rgb(102, 102, 102) !important;
}
</style>
