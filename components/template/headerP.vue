<template>
  <div>
    <!-- Header section start -->
    <b-navbar ref="navbar" class="navbar" toggleable="lg" type="light" fixed="top">
      <div class="container">
        <b-navbar-brand href="/">
          <img src="./../../assets/img/favicon.ico.png" alt="TUE" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#Home">
              Home
              <span class="sr-only navba">(current)</span>
            </b-nav-item>
            <b-nav-item class="navba" href="#About">About</b-nav-item>
            <b-nav-item class="navba" href="#Skills">Skills</b-nav-item>

            <b-nav-item class="navba" href="#Projects">Projects</b-nav-item>

            <b-nav-item class="navba" href="#Contact">Contact</b-nav-item>

            <b-nav-item class="blog text-white" href="#Blog">Blog</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: 'headerP',

  mounted() {
    const navbar = this.$refs['navbar']
    window.onscroll = function() {
      if (
        document.body.scrollTop < 0 ||
        document.documentElement.scrollTop > 5
      ) {
        navbar.classList.add('navTransparent')
        navbar.classList.remove('navbar')
      } else {
        navbar.classList.add('navbar')
        navbar.classList.remove('navTransparent')
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 10px 0px !important;
  background: #ffffff;
  color: rgb(102, 102, 102);
}

.navTransparent {
  background: #000000;
  display: flex;
  color: rgb(250, 249, 249);
  border-bottom: 1px solid black;
  box-shadow: 0, 0, 0, 0.5, black;
}
.navbar-brand img {
  height: 50px;
  width: 40px;
  padding: 5px 0px;
  text-decoration: none;
  border-radius: 2px;
}

.navba {
  font-size: 16px;
  color: rgb(102, 102, 102);
  padding: 0px;
  text-decoration: none;
}

.navba:hover {
  color: #000;
}

.navba:focus {
  color: #000;
}

.navba:active {
  color: #000;
}

.blog {
  color: rgb(255, 255, 255) !important;
  background: transparent;
  margin-left: 5px;
  border: 1px solid black;
  border-radius: 0;
  font-weight: 500;
  padding: 0px 8px 2px;
}

.blog:hover {
  color: rgb(251, 250, 250);
  background: rgb(0, 0, 0);
  border: 1px solid rgb(16, 16, 16);
  border-radius: 5px;
}

.nav-link {
  color: rgba(255, 255, 255);
}
</style>
