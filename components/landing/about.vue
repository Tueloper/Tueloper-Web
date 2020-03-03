<template>
  <div>
    <!-- Hero section start -->
    <section id="About">
      <div class="row about animated slideInUp">
        <div class="col-md-6 col-xs-12 about-text">
          <div class="col-xs-6">
            <h3>About</h3>
          </div>
          <div class="col-xs-6 animated slideInLeft">
            <hr />
            <p>
              Hello! I'm Tochukwu aka Tueloper, a web developer based in Lagos,
              Nigeria. I enjoy building things that live on the internet. I
              develop exceptional websites and web apps that provide intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
            </p>
            <p>
              Shortly after i started my National Youth Service i started
              programing, and since then have worked with teams as a developer,
              Trainer, Community Builder and Have hosted bootcamps where
              developers are groomed.
            </p>
            <p>Here are a few technologies i've working with recently:</p>
            <div class="row full-stack">
              <div class="col-md-6">
                <ul class="stack">
                  <li>Javascript (ES6+)</li>
                  <li>Vue.Js</li>
                  <li>HTML & (S) CSS</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="stack">
                  <li>Node.Js</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 imgDiv animated slideInRight">
          <img
            src="./../../assets/img/_47A2188.jpg"
            alt="Tueloper"
            class="tochi-img img-responsive"
          />
        </div>
      </div>
    </section>
    <!-- Hero section end -->
  </div>
</template>

<style scoped>
#About {
  height: 95vh;
  margin: 140px 0 50px;
  display: flex;
  align-items: center;
}

.about {
  padding: 50px 20px;
}

.about-text {
  padding: 10px;
}

.about p {
  font-size: 16px;
}

.full-stack {
  margin-left: 6px;
}
.stack li {
  list-style-type: square;
  font-size: 16px;
  color: #808181;
}

.tochi-img {
  width: 60%;
  height: 80%;
}

.imgDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
