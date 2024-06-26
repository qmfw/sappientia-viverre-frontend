<!-- 5 places you should see -->
<!-- Separate your place with exotic hotels -->
<!-- What you need to know for child health -->
<!-- 5 Beautiful buildings you need to visit without dying -->
<!-- Let's make an introduction to the glorious world of history -->
<!-- Did you see the most beautiful sea in the world? -->
<!-- I have a desert visit this summer -->
<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>
                  <i class="fa fa-car bg-green"></i> Travel
                  <small class="hidden-xs-down hidden-sm-down"
                    >Explore the world's wonders!
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
                  <li class="breadcrumb-item active">Travel</li>
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

                  <div class="blog-grid-system">
                    <div class="row">
                      <div
                        v-for="(value, key, index) in blogs"
                        class="col-md-6"
                      >
                        <div class="blog-box">
                          <div class="post-media btn-cursor">
                            <a
                              @click="
                                $router.push({
                                  path: '/blog',
                                  query: { category: 'travel', id: value.id },
                                })
                              "
                              title=""
                            >
                              <!--img style="max-width: 330px; height: 271.02px"-->
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
                          <div class="blog-meta big-meta btn-cursor">
                            <h4>
                              <a
                                @click="
                                  $router.push({
                                    path: '/blog',
                                    query: { category: 'travel', id: value.id },
                                  })
                                "
                                title=""
                                >{{ value.title }}</a
                              >
                            </h4>
                            <p>
                              {{ value.subtitle }}
                            </p>
                            <small
                              ><a
                                @click="
                                  $router.push({
                                    path: '/blog',
                                    query: { category: 'travel', id: value.id },
                                  })
                                "
                                title=""
                                >Travel</a
                              ></small
                            >
                            <small
                              ><a
                                @click="
                                  $router.push({
                                    path: '/blog',
                                    query: { category: 'travel', id: value.id },
                                  })
                                "
                                title=""
                                >{{ value.created_at }}</a
                              ></small
                            >
                            <small
                              ><a title="">{{ value.author }}</a></small
                            >
                          </div>
                          <!-- end meta -->
                        </div>
                        <!-- end blog-box -->
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end blog-grid-system -->
                </div>
                <!-- end page-wrapper -->

                <hr class="invis3" />
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
import travel from "../assets/sample/travel.json"; //TODO DELETE
export default {
  name: "TravelBlog",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = travel;
  },
};
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";
</style>
