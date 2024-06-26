<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2><i class="fa fa-envelope-o"></i> Contact us</h2>
              </div>
              <!-- end col -->
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Pages</a></li>
                  <li class="breadcrumb-item active">
                    <a href="#">Contact</a>
                  </li>
                </ol>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end container -->
        </div>
        <!-- end page-title -->

        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                  <div class="row">
                    <div class="col-lg-6">
                      <h4>Who we are</h4>
                      <p>
                        SAPPIENTIA VIVERRE is a personal blog for handcrafted,
                        cameramade photography content, fashion styles from
                        independent creatives around the world.
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <h4>How we help?</h4>
                      <p>
                        If you’d like to write for us,
                        <a href="#">advertise with us</a> or just say hello,
                        fill out the form below and we’ll get back to you as
                        soon as possible.
                      </p>
                    </div>

                    <div class="col-lg-12">
                      <blockquote class="blockquote">
                        <strong>
                          Please read <a href="#">Licensing & Terms</a>
                          of Use if you are wondering about the license.
                        </strong>
                      </blockquote>
                    </div>
                  </div>
                  <!-- end row -->

                  <div class="row">
                    <div class="col-lg-12">
                      <form class="form-wrapper">
                        <h4>Contact form</h4>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your name"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email address"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject"
                        />
                        <textarea
                          class="form-control"
                          placeholder="Your message"
                        ></textarea>
                        <button type="submit" class="btn btn-primary">
                          Send <i class="fa fa-envelope-open-o"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- end page-wrapper -->
              </div>
              <!-- end col -->
              <SideBarWidget></SideBarWidget>
            </div>
            <!-- end row -->
          </div>
          <!-- end container -->
        </section>
        <FooterPosts></FooterPosts>
      </div>
      <!-- end wrapper -->
    </body>
  </html>
</template>
<script>
import SideBarWidget from "./SideBarWidget.vue";
import FooterPosts from "./FooterPosts.vue";
export default {
  name: "Contact",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";
</style>
