<template>
  <div>
    <!-- Header section start -->
    <nav ref="navbar" class="navbar fixed-top navbar-expand-lg bg-light">
      <div class="container header-container">
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
            <!-- <li class="nav-item active">
              <nuxt-link class="nav-link" to="#Home"
                >Home <span class="sr-only">(current)</span></nuxt-link
              >
            </li> -->
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="#About">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#Skills">Skills</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#Projects">Projects</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#Contact">Contact</nuxt-link>
            </li>
          </ul>

          <nuxt-link class="nav-link" to="/blog">
            <button class="btn btn-outline-dark blog my-2 my-sm-0 blog">
              Blog
            </button>
          </nuxt-link>
        </div>
      </div>
    </nav>

    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: 'headerP',

  mounted() {
    const navbar = this.$refs['navbar']
    const links = navbar.querySelectorAll('a')
    const btn_i = navbar.querySelector('.blog')
    // return console.log(btn_i)
    window.onscroll = function() {
      if (
        document.body.scrollTop < 0 ||
        document.documentElement.scrollTop > 5
      ) {
        navbar.classList.add('bg-dark', 'navbar-dark', 'shadow')
        navbar.classList.remove('bg-light', 'navbar-dark', 'shadow')
        links.forEach(link => {
          link.classList.add('nav-black')
          link.classList.remove('nav-link')
        })
        btn_i.classList.remove('btn-outline-dark', 'blog')
        btn_i.classList.add('btn-outline-light', 'blog_i')
      } else {
        navbar.classList.add('bg-light', 'navbar-dark', 'shadow')
        navbar.classList.remove('bg-dark', 'navbar-dark', 'shadow')
        links.forEach(link => {
          link.classList.add('nav-link')
          link.classList.remove('nav-black')
        })
        btn_i.classList.remove('btn-outline-light', 'blog_i')
        btn_i.classList.add('btn-outline-dark', 'blog')
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0% !important;
}
.navbar-brand img {
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
  background: #0e0d0d !important;
}

.nav-black {
  color: #fff !important;
}

.blacknav:hover {
  color: rgb(102, 102, 102) !important;
}
</style>
