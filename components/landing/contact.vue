<template>
  <div id="Contact" class="animated slideInUp">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-sm-8">
        <div class="contact-text">
          <span class="what animated slideInUp">What Next??</span>
          <p class="get text-center">Get In Touch</p>
        </div>

        <form action="#">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name" />
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <input type="subject" class="form-control" id="subject" placeholder="Subject" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-sm-12 d-flex justify-content-center text-center">
              <div class="form-group">
                <button class="btn btn-outline-dark">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#Contact {
  height: 90vh;
  padding: 100px 0;
  font-family: 'Poppins';
}

.what {
  margin: 30px auto 0px;
  font-size: 17px;
  color: rgb(148, 148, 148);
}

.get {
  font-size: 60px;
  font-weight: 500;
  color: black;
}
.contact-text {
  text-align: center;
}
</style>