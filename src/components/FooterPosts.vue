<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div class="widget">
            <h2 class="widget-title">Recent Posts</h2>
            <div class="blog-list-widget">
              <div class="list-group btn-cursor">
                <a
                  v-for="(value, key, index) in recent"
                  @click="
                    $router.push({
                      path: '/blog',
                      query: { category: value.category, id: value.id },
                    })
                  "
                  class="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="w-100 justify-content-between">
                    <img
                      style="width: 80px; height: 80px"
                      :src="value ? value.img : '../assets/images/footer.png'"
                      alt=""
                      class="img-fluid float-left"
                    />
                    <h5 class="mb-1">
                      {{ value.title }}
                    </h5>
                    <small>{{ value.created_at }}</small>
                  </div>
                </a>
              </div>
            </div>
            <!-- end blog-list -->
          </div>
          <!-- end widget -->
        </div>
        <!-- end col -->

        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div class="widget">
            <h2 class="widget-title">Popular Posts</h2>
            <div class="blog-list-widget">
              <div class="list-group btn-cursor">
                <a
                  v-for="(value, key, index) in popular"
                  @click="
                    $router.push({
                      path: '/blog',
                      query: { category: value.category, id: value.id },
                    })
                  "
                  class="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="w-100 justify-content-between">
                    <img
                      style="width: 80px; height: 80px"
                      :src="value ? value.img : '../assets/images/footer.png'"
                      alt=""
                      class="img-fluid float-left"
                    />
                    <h5 class="mb-1">
                      {{ value.title }}
                    </h5>
                    <span class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <!-- end blog-list -->
          </div>
          <!-- end widget -->
        </div>
        <!-- end col -->

        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div class="widget">
            <h2 class="widget-title">Popular Categories</h2>
            <div class="link-widget">
              <ul>
                <li>
                  <a href="fashion">Fashion <span>(21)</span></a>
                </li>
                <li>
                  <a href="food">Food <span>(15)</span></a>
                </li>
                <li>
                  <a href="tech">Technology <span>(31)</span></a>
                </li>
                <li>
                  <a href="travel">Travel <span>(22)</span></a>
                </li>
                <li>
                  <a href="videos">Videos <span>(66)</span></a>
                </li>
                <li>
                  <a href="health">Health <span>(11)</span></a>
                </li>
              </ul>
            </div>
            <!-- end link-widget -->
          </div>
          <!-- end widget -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <hr class="invis1" />

      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="widget">
            <div class="footer-text text-center">
              <a href="index.html"
                ><img src="../assets/images/flogo.png" alt="" class="img-fluid"
              /></a>
              <p>
                SAPPIENTIA VIVERRE is a personal blog for handcrafted,
                cameramade photography content, fashion styles from independent
                creatives around the world.
              </p>
              <div class="social">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                  ><i class="fa fa-facebook"></i
                ></a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                  ><i class="fa fa-twitter"></i
                ></a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                  ><i class="fa fa-instagram"></i
                ></a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Google Plus"
                  ><i class="fa fa-google-plus"></i
                ></a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Pinterest"
                  ><i class="fa fa-pinterest"></i
                ></a>
              </div>

              <hr class="invis" />

              <div class="newsletter-widget text-center">
                <!--form class..-->
                <div class="form-inline">
                  <input
                    @keyup.enter="subscribing ? '' : subscribePostEmail()"
                    v-model="email"
                    id="news-email-address"
                    type="text"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                  <button
                    @click="subscribing ? '' : subscribePostEmail()"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Subscribe <i class="fa fa-envelope-open-o"></i>
                  </button>
                </div>
              </div>
              <!-- end newsletter -->
            </div>
            <!-- end footer-text -->
          </div>
          <!-- end widget -->
        </div>
        <!-- end col -->
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <br />
          <div class="copyright">
            &copy; Cloapedia. Design:
            <a href="http://html.design">HTML Design</a>.
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </footer>
  <!-- end footer -->

  <div class="dmtop">Scroll to Top</div>
  <!-- end col -->
</template>
<script>
import tech from "../assets/sample/tech.json"; //TODO DELETE
import health from "../assets/sample/health.json"; //TODO DELETE
export default {
  name: "FooterPosts",
  components: {},
  data() {
    return {
      email: "",
      subscribing: false,
      recent: [],
      popular: [],
    };
  },
  methods: {
    async subscribePostEmail() {
      this.subscribing = true;
      try {
        alert("Thank You For Subscribing!");
      } catch (err) {
        console.error(err);
      } finally {
        this.email = "";
        this.subscribing = false;
      }
    },
  },
  mounted() {
    this.recent = tech.slice(0, 3);
    this.popular = health.slice(0, 3);
  },
};
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";
.widget > .blog-list-widget > .list-group,
.widget > .link-widget li {
  text-align: left;
}
</style>
