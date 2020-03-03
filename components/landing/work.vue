<template>
  <div>
    <section id="Skills" class="w-100 mt-12">
      <div class="row mt-12">
        <div class="col-xs-12">
          <card class="mt-12">
            <div slot="picture" class="picture"></div>
            <a
              slot="picture"
              href="https://twitter.com/tamer_aka_remat"
              target="_blank"
            >
              <i class="fa fa-github"></i>
            </a>
            <a
              slot="demo"
              href="https://codepen.io/tamer_aka_remat/"
              target="_blank"
            >
              <i class="fa fa-codepen"></i>
            </a>
          </card>
        </div>

        <div class="col-xs-12">
          <card>
            <div slot="picture" class="picture"></div>
            <a
              slot="picture"
              href="https://twitter.com/tamer_aka_remat"
              target="_blank"
            >
              <i class="fa fa-github"></i>
            </a>
            <a
              slot="demo"
              href="https://codepen.io/tamer_aka_remat/"
              target="_blank"
            >
              <i class="fa fa-codepen"></i>
            </a>
          </card>
        </div>
        <div class="col-xs-12">
          <card>
            <div slot="picture" class="picture"></div>
            <a
              slot="picture"
              href="https://twitter.com/tamer_aka_remat"
              target="_blank"
            >
              <i class="fa fa-github"></i>
            </a>
            <a
              slot="demo"
              href="https://codepen.io/tamer_aka_remat/"
              target="_blank"
            >
              <i class="fa fa-codepen"></i>
            </a>
          </card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import card from './../card'
export default {
  name: 'work',
  components: {
    card
  }
}
</script>

<style lang="scss" scoped>
$body: #282828;
$twitter: #55acee;
$linkedin: #007bb5;
$codepen: #ffdd40;
$transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
%focus-it {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  opacity: 0.8;
  z-index: 1;
  cursor: pointer;
  i {
    opacity: 1;
    font-size: 20vw;
    margin: 15vw 33vw;
  }
}

body {
  width: 50%;
  height: 30vh;
  background-color: $body;
  display: flex;
  align-items: center;
  justify-content: center;
  .frame {
    width: 60vw;
    height: 20vw;
    border-radius: 5%;
    overflow: hidden;
    position: relative;
    .picture {
      width: 100%;
      height: 100%;
      background-image: url('https://ucarecdn.com/f138bad2-15be-4c93-a678-5018869ee28f/');
      z-index: 0;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: $transition;
      filter: grayscale(100%);
    }
    .social {
      position: absolute;
      right: 2vw;
      width: 5vw;
      height: 5vw;
      border-radius: 50%;
      z-index: 2;
      a {
        display: contents;
        i {
          color: white;
          margin: 7px;
          opacity: 0;
        }
      }
      &.twitter {
        bottom: 2vw;
        background-color: $twitter;
        &:hover,
        &:focus {
          @extend %focus-it;
        }
      }
      &.codepen {
        bottom: 18vw;
        background-color: $codepen;
        &:hover,
        &:focus {
          @extend %focus-it;
        }
      }
    }
    &:hover,
    &.focus {
      .picture {
        transition: $transition;
        transform: scale(1.3) rotate(10deg);
      }
    }
  }
}
</style>
