<template>
  <div>
    <div id="Home" class="intro">
      <h3>Hi,</h3>
      <h1>
        I am
        <strong>Tochukwu Ozurumba 😁,</strong>
      </h1>
      <h5>And Am A</h5>
      <h1 class="profession">
        <span class="text_1">Frontend Developer.</span>
        <span class="text_2">Backend Developer.</span>
        <!-- <span class="text_3">Javascript Advocate.</span> -->
        <!-- <span class="text_4">Software Deveelopment Trainer.</span> -->
        <!-- <span class="text_5">Environmental Technologist.</span> -->
      </h1>
      <!-- <p
        class="typwriter"
        data-period="2000"
        data-type="[
        'Frontend Developer.', , 'Javascript Advocate.', 'Software Deveelopment Trainer.', 'Environmental Technologist.', 'Safety Officer.'
      ]"
      ></p>-->

      <div class="container">
        <span class="circle">
          <i class="fa fa-arrow-down"></i>
        </span>
        <span class="pulse"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  height: 95vh;
  text-align: center;
  margin: 210px auto 50px;
  color: black;
}

h1 {
  font-size: 30px;
}

.profession {
  margin: 20px 0;
  font-size: 60px;
}

.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_3 {
  animation: text3;
}

.text_4 {
  animation: text4;
}

.text_5 {
  animation: text5;
}

.text_1,
.text_2,
.text_3,
.text_4,
.text_5 {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 20s;
  animation-timing-function: steps(15, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after,
.text_3::after,
.text_4::after,
.text_5::after {
  content: '|';
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 5s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 10.2em;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 10em;
  }
}

@keyframes text3 {
  0%,
  50%,
  100% {
    width: 0;
  }
  20%,
  50% {
    width: 10em;
  }
}

@keyframes text4 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 10em;
  }
}

@keyframes text5 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 10em;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

* {
  box-sizing: border-box;
}
/* .container {
  height: 120px;
  width: 120px;
  margin: 150px auto 0;
  position: relative;
} */
/* .circle {
  background-color: #fff;
  height: 120px;
  width: 120px;
  display: block;
  border: 5px solid #000000;
  border-radius: 100px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  animation-name: circle;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  -webkit-animation-name: circle;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
} */
.fa {
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
/* .pulse {
  margin: 0 auto;
  border-radius: 100px;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 0;
  background-color: transparent;
  opacity: 0;
  width: 110px;
  height: 110px;
  border: 10px solid #3a3a3a;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -o-border-radius: 100px;
  -ms-border-radius: 100px;
  border-radius: 100px;
  Giving Animation Function
  -webkit-animation: pulse 1s linear infinite 0.3s;
  -moz-animation: pulse 1s linear infinite 0.3s;
  border-image: initial;
} */
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
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  8% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  15% {
    -webkit-transform: scale(0.1);
    opacity: 1;
  }
  30% {
    -webkit-transform: scale(0.5);
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
  }
}
@-moz-keyframes pulse {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  8% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  15% {
    -webkit-transform: scale(0.1);
    opacity: 1;
  }
  30% {
    -webkit-transform: scale(0.5);
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
  }
}
</style>
