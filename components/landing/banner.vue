<template>
  <div>
    <div id="Home" class="intro">
      <p class="hi">Hi, my name is</p>
      <p class="name">Tochukwu Ozurumba</p>
      <p class="build">I Build Things For The Web</p>
      <p class="content">
        I am a Web Developer based in Lagos, Nigeria, specializing in building Expectional & A well functional
        <br />Web Products, High Quality Web Sites, using Frontend & Backend Skills. Also I have Served as
        <br />a Web Training Officer training and building the next generation of developers.
      </p>

      <div>
        <a href="https://github.com/Tueloper" target="_blank" rel="noopener noreferrer">
          <button class="btn btn-g mt-4" href="#" target="_blank">
            <i class="fa fa-github b-icon"></i> Github Profile
          </button>
        </a>
        <!-- <a
          href="./../../assets/img/TochukwuOzurumbaResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn btn-g" href="#" target="_blank">Download Cv</button>
        </a>-->
      </div>

      <div class="container">
        <span class="circle">
          <i class="arrow fa fa-arrow-down"></i>
        </span>
        <span class="pulse"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  height: 95vh;
  margin: 130px 0 0 170px;
  font-family: Calibre, 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
  color: #000;
}

.hi {
  font-size: 17px;
}

.name {
  font-size: 75px;
  line-height: 1.1;
  color: rgb(0, 0, 0);
  font-weight: 600;
}

.build {
  font-size: 70px;
  line-height: 1.1;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
* {
  box-sizing: border-box;
}
.arrow {
  font-size: 42px;
  color: #050505;
  bottom: 27px;
  position: absolute;
  left: 50%;
  margin-left: -18px;
  animation-name: arrow;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  -webkit-animation-name: arrow;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
}
@keyframes arrow {
  0% {
    bottom: 0;
  }
  75% {
    bottom: 90px;
  }
  100% {
    bottom: 0;
  }
}
@-webkit-keyframes arrow {
  0% {
    bottom: 0;
  }
  75% {
    bottom: 90px;
  }
  100% {
    bottom: 0;
  }
}
@keyframes circle {
  0% {
    height: 120px;
  }
  10% {
    height: 120px;
  }
  50% {
    height: 130px;
  }
  75% {
    height: 150px;
  }
  90% {
    height: 130px;
  }
  100% {
    height: 120px;
  }
}
@-webkit-keyframes circle {
  0% {
    height: 120px;
  }
  10% {
    height: 120px;
  }
  50% {
    height: 130px;
  }
  75% {
    height: 150px;
  }
  90% {
    height: 130px;
  }
  100% {
    height: 120px;
  }
}

.btn {
  border-radius: 0 !important;
  font-family: 'Josefin Sans', 'cursive';
  font-weight: 500;
  font-size: 19px;
  margin: 0 10px 0 0;
}
.btn-g {
  background-color: white;
  width: 180px;
  height: 50px;
  color: black;
  border: 3px solid #000000;
}

.btn-g:hover {
  background: black;
  border: 3px solid #000000;
  color: #ffffff;
}

.b-icon {
  display: inline;
  padding: 0 2px;
}
</style>
