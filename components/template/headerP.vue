<template>
  <div>
    <!-- Header section start -->
    <nav id="navbar-example2" class="navbar navbar-light">
      <div class="container header-container">
        <nuxt-link class="navbar-brand text-dark" to="/">
          <img src="./../../assets/img/favicon.ico.png" alt="TUE" />
        </nuxt-link>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#Home">Home</nuxt-link>
          </li>
          <li class="nav-item">
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
          <li class="nav-item">
            <nuxt-link class="nav-link blog" to="#Blog">Blog</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: 'headerP'
}
</script>

<style scoped>
nav {
  /* font-family: 'Source Sans Pro', sans-serif; */
}
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

.header-container li .blog {
  color: rgb(255, 255, 255);
  background: rgb(16, 16, 16);
  margin-left: 5px;
  border-radius: 0;
  font-weight: 500;
  padding: 2px 13px;
}
</style>