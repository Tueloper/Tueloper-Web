<template>
  <div id="blog-card">
    <div class="card-link">
      <article class="blog-card">
        <img class="post-image" :src="project.image" />
        <div class="article-details">
          <h4 class="post-category">{{ category }}</h4>
          <h3 class="post-title">{{ project.title }}</h3>
          <p class="post-description">{{ project.content }}</p>
          <div class="post-author  head  ">
            <i class="fa fa-envelope "></i>
            <div class="d-flex ">
              <a v-if="project.github_url" :href="project.github_url">
                <i class="fa fa-github "></i>
              </a>
              <a v-if="project.link" :href="project.link">
                <i class="fa fa-link "></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
  <!-- </div>
  <div class="card  shadow mb-3" style="max-width: 20rem">
    <div class="card-header  head  bg-transparent ">
      <i class="fa fa-envelope fa-3x"></i>
      <div class="d-flex ">
        <a v-if="project.github_url" :href="project.github_url">
          <i class="fa fa-github fa-2x"></i>
        </a>
        <a v-if="project.link" :href="project.link">
          <i class="fa fa-link fa-2x"></i>
        </a>
      </div>
    </div>
    <div class="card-body ">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.content }}
      </p>
    </div>
    <div class="card-footer bg-transparent">
      <div class="p-badges">
        <SpanT v-for="stack of project.stacks" :key="stack" />
      </div>
    </div>
  </div> -->
</template>

<script>
import SpanT from './span'
export default {
  props: ['project'],
  components: { SpanT }
}
</script>

<style lang="scss" scoped>
.card {
  font-family: 'Poppins';
  height: 23rem;
  border-radius: 0 !important;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header {
  border-bottom: 0 !important;
}

.card-footer {
  border-top: 0ch !important;
}
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

body {
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: $text;
  background: $bg;
  font-size: 0.9375rem;
  min-height: 100vh;
  margin: 0;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-rendering: optimizeLegibility;
}

#container {
  width: 30rem;
  height: 13.625rem;
}

.blog-card {
  display: flex;
  flex-direction: row;
  background: $white;
  box-shadow: 0 0.1875rem 1.5rem $shadow;
  border-radius: 0.375rem;
  overflow: hidden;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover .post-title {
    @include transition(color 0.3s ease);
    color: $red;
  }
  &:hover .post-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.post-image {
  @include transition(opacity 0.3s ease);
  display: block;
  width: 100%;
  object-fit: cover;
}

.article-details {
  padding: 1.5rem;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.post-title {
  @include transition(color 0.3s ease);
  font-size: 1.125rem;
  line-height: 1.4;
  color: $black;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.post-author {
  font-size: 0.875rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid $border;
}

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    height: 27.25rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: '. main main .' '. main main .';
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .post-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}
</style>
