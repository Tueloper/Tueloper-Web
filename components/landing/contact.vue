<template>
  <div>
    <section class="contact pt-100 pb-100" id="Contact">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 mx-auto text-center">
            <div class="section-title mb-100">
              <h4>Contact me</h4>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-8">
            <form action="#" class="contact-form">
              <div class="row">
                <div class="col-xl-6">
                  <input type="text" placeholder="name" />
                </div>
                <div class="col-xl-6">
                  <input type="text" placeholder="email" />
                </div>
                <div class="col-xl-6">
                  <input type="text" placeholder="subject" />
                </div>
                <div class="col-xl-6">
                  <input type="text" placeholder="telephone" />
                </div>
                <div class="col-xl-12">
                  <textarea placeholder="message" cols="30" rows="10"></textarea>
                  <input type="submit" value="send message" />
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <div class="single-contact">
              <i class="fa fa-map-marker"></i>
              <h5>Address</h5>
              <p>
                No 2, Salvation Road, Off Oliver Tweest Junction Grace Bill,
                Eket, Akwa Ibom State
              </p>
            </div>
            <div class="single-contact">
              <i class="fa fa-phone"></i>
              <h5>Phone</h5>
              <p>(+234 ) 810 865 4986</p>
            </div>
            <div class="single-contact">
              <i class="fa fa-envelope"></i>
              <h5>Email</h5>
              <p>ozurumbatochukwu@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pb-100 {
  padding-bottom: 100px;
}
.pt-100 {
  padding-top: 100px;
}
.mb-100 {
  margin-bottom: 50px;
}
a {
  text-decoration: none;
  color: #333;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.section-title {
  position: relative;
}

.section-title h4 {
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 20px;
  display: inline-block;
}
.section-title h4::before {
  position: absolute;
  content: '';
  width: 80px;
  height: 2px;
  background-color: #080707;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
}
.section-title h4::after {
  position: absolute;
  content: '';
  width: 50px;
  height: 2px;
  background-color: #050505;
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}
.contact {
  background-color: #fff;
  position: relative;
  z-index: 2;
  color: rgb(15, 15, 15);
}
.contact-form input,
textarea {
  width: 100%;
  border: 1px solid #555;
  padding: 5px 10px;
  text-transform: capitalize;
  margin-top: 15px;
  background-color: transparent;
  color: #fff;
}
/* .contact:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #333;
  z-index: -1;
  opacity: 0.85;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=85)';
} */
.single-contact {
  text-align: left;
  position: relative;
  padding-left: 70px;
  margin-bottom: 50px;
  margin-top: 10px;
}
.single-contact i.fa {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #070707;
  color: #fff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 3px;
}
.single-contact h5 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
}
.single-contact p {
  font-size: 15px;
  font-weight: 400;
}
.contact-form input[type='submit'] {
  background-color: #030303;
  border: 0px;
  cursor: pointer;
  font-size: 16px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.contact-form input[type='submit']:hover {
  background-color: #030303;
}
.contact-form input:focus,
textarea:focus {
  border-color: #030303;
}
</style>
