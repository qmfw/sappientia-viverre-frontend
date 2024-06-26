<!-- Is summer, have you bought a cane -->
<!-- This year's fashionable long beard -->
<!-- How to be more cool with clothing -->
<!-- Pink and Brown Great Harmony -->
<!-- Things to watch out for when choosing sunglasses -->
<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>
                  <i class="fa fa-shopping-bag bg-pink"></i> Fashion
                  <small class="hidden-xs-down hidden-sm-down"
                    >Unveil the latest styles and trends in fashion!
                  </small>
                </h2>
              </div>
              <!-- end col -->
              <div
                class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item btn-cursor">
                    <a @click="$router.push('/')">Home</a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">Blog</a></li>
                  <li class="breadcrumb-item active">Fashion</li>
                </ol>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end container -->
        </div>
        <!-- end page-title -->

        <section class="section wb">
          <div class="container">
            <div class="row">
              <SideBarWidget></SideBarWidget>
              <!-- end col -->

              <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                  <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                      <div class="banner-spot clearfix">
                        <div class="banner-img">
                          <a href="/ad" target="_blank"
                            ><img
                              src="https://static.surfe.be/images/banners/en/728x90_13.png"
                              alt="Surfe.be - Banner advertising service"
                          /></a>
                        </div>
                        <!-- end banner-img -->
                      </div>
                      <!-- end banner -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <hr class="invis" />

                  <div class="portfolio row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div
                        v-for="(value, key, index) in blogs.slice(0, 4)"
                        class="pitem item-w1 item-h1"
                      >
                        <div class="blog-box">
                          <div class="post-media btn-cursor">
                            <a
                              @click="
                                $router.push({
                                  path: '/blog',
                                  query: { category: 'fashion', id: value.id },
                                })
                              "
                              title=""
                            >
                              <!--img style="max-width: 365.5px; height: 542.42px"-->
                              <img
                                :src="
                                  value
                                    ? value.img
                                    : '../assets/images/footer.png'
                                "
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span></span>
                              </div>
                              <!-- end hover -->
                            </a>
                          </div>
                          <!-- end media -->
                          <div class="blog-meta">
                            <span class="bg-pink"
                              ><a href="fashion" title="">Fashion</a></span
                            >
                            <h4>
                              <a
                                class="btn-cursor"
                                @click="
                                  $router.push({
                                    path: '/blog',
                                    query: {
                                      category: 'fashion',
                                      id: value.id,
                                    },
                                  })
                                "
                                title=""
                                >{{ value.title }}</a
                              >
                            </h4>
                            <small
                              ><a title="">By: {{ value.author }}</a></small
                            >
                            <small
                              ><a title="">{{ value.created_at }}</a></small
                            >
                          </div>
                          <!-- end meta -->
                        </div>
                        <!-- end blog-box -->
                      </div>
                      <!-- end col -->
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="pitem item-w1 item-h1">
                        <div
                          v-for="(value, key, index) in blogs.slice(4, 8)"
                          class="blog-box"
                        >
                          <div class="post-media btn-cursor">
                            <a
                              @click="
                                $router.push({
                                  path: '/blog',
                                  query: { category: 'fashion', id: value.id },
                                })
                              "
                              title=""
                            >
                              <!--img style="max-width: 365.5px; height: 542.42px"-->
                              <img
                                style="max-width: 298px; height: 442.23px"
                                src=""
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span></span>
                              </div>
                              <!-- end hover -->
                            </a>
                          </div>
                          <!-- end media -->
                          <div class="blog-meta">
                            <span class="bg-pink"
                              ><a href="fashion" title="">Fashion</a></span
                            >
                            <h4>
                              <a
                                class="btn-cursor"
                                @click="
                                  $router.push({
                                    path: '/blog',
                                    query: {
                                      category: 'fashion',
                                      id: value.id,
                                    },
                                  })
                                "
                                title=""
                                >{{ value.title }}</a
                              >
                            </h4>
                            <small
                              ><a title="">By: {{ value.author }}</a></small
                            >
                            <small
                              ><a title="">{{ value.created_at }}</a></small
                            >
                          </div>
                          <!-- end meta -->
                        </div>
                        <!-- end blog-box -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end portfolio -->
                </div>
                <!-- end page-wrapper -->

                <hr class="invis" />
                <!--TODO pagination
                <div class="row">
                  <div class="col-md-12">
                    <nav aria-label="Page navigation">
                      <ul class="pagination justify-content-start">
                        <li class="page-item">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>-->
              </div>
              <!-- end col -->
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
import fashion from "../assets/sample/fashion.json"; //TODO DELETE
export default {
  name: "Fashion",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = fashion;
  },
};
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";
.shadoweffect > .shadow-desc > .blog-meta,
.blog-box > .blog-meta,
.section > .container > .row .section-title,
.widget > .blog-list-widget > .list-group,
.widget > .link-widget li {
  text-align: left;
}
</style>
