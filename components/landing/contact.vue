<template>
  <div id="Contact" class="animated slideInUp">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-8 col-sm-8">
        <div class="contact-text">
          <span class="what animated slideInUp">What Next??</span>
          <p class="get text-center">Get In Touch</p>
        </div>

        <form action="#" @submit.prevent="sendMessage">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <input type="text" class="form-control" v-model="name" id="name" placeholder="Name" />
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <input
                  type="subject"
                  class="form-control"
                  v-model="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <textarea
                  class="form-control"
                  v-model="content"
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
                <button type="submit" class="btn btn-outline-dark">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: 'Your Name',
      subject: 'Title Of Your Message',
      email: 'text@example.com',
      content: 'Type in your message here'
    }
  },
  methods: {
    async sendMessage() {
      const msg = {
        name: this.name,
        subject: this.subject,
        email: this.email,
        content: this.content
      }

      try {
        const contactMessage = await axios.post(
          'https://tueloperbe.herokuapp.com/api/v1/contact',
          msg
        )
        console.log(contactMessage)
      } catch (e) {
        return console.log(e)
      }
    }
  }
}
</script>

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

.form-control:focus {
  color: #000000;
  background-color: #fff !important;
  border-color: #000000;
  outline: 0;
  box-shadow: none;
}

.form-control:visited {
  background-color: #fff !important;
}

.form-control {
  color: #000000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #414141;
}
button,
input {
  overflow: visible;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

@media screen and (max-width: 772px) {
  #Contact {
    /* height: 92vh; */
    padding: 100px 10px;
  }
  .get {
    font-size: 40px;
  }
}

@media screen and (max-width: 602px) {
  #Contact {
    /* height: 100vh; */
    padding: 100px 50px;
  }
}
</style>
