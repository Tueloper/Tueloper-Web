<template>
  <div>
    <!-- Hero section start -->
    <section id="About" class="hero-section spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-10 offset-xl-1">
            <div class="row">
              <div class="col-lg-6">
                <div class="hero-text">
                  <h2>Tochukwu Ozurumba</h2>
                  <p>
                    I’m a Serial Web Developer with Frontend and Backend skills,
                    A Javascript Advocate, Software Developement Trainer,
                    Environmental Technologist & A Safety Officer.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/Tueloper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="btn btn-g" href="#" target="_blank">
                      <i class="fa fa-github b-icon"></i> Github Profile
                    </button>
                  </a>
                  <a
                    href="https://getcv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="btn btn-g" href="#" target="_blank">
                      Download Cv
                    </button>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 text-md-center">
                <figure class="hero-image">
                  <img src="../../assets/img/tochi.jpg" alt="5" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero section end -->
  </div>
</template>

<style scoped>
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

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}
</style>
