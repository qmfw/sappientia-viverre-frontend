<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>
                  <i class="fa fa-user-md bg-grey"></i> Health
                  <small class="hidden-xs-down hidden-sm-down"
                    >Elevate your well-being!
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
                  <li class="breadcrumb-item active">Health</li>
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
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                  <div class="portfolio row">
                    <div
                      v-for="(value, key, index) in blogs"
                      class="pitem item-w1 item-h1 col-lg-4 col-md-4 col-sm-12 col-xs-12"
                    >
                      <div class="blog-box">
                        <div class="post-media">
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'health', id: value.id },
                              })
                            "
                            title=""
                            ><img
                              style="height: 188.81px"
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
                          <span class="bg-grey"
                            ><a href="health" title="">Health</a></span
                          >
                          <h4>
                            <a
                              class="btn-cursor"
                              @click="
                                $router.push({
                                  path: '/blog',
                                  query: { category: 'health', id: value.id },
                                })
                              "
                              title=""
                              >{{ value.title }}</a
                            >
                          </h4>
                          <small
                            ><a href="blog-author.html" title=""
                              >By: {{ value.author }}</a
                            ></small
                          >
                          <small
                            ><a href="blog-category-01.html" title="">{{
                              value.created_at
                            }}</a></small
                          >
                        </div>
                        <!-- end meta -->
                      </div>
                      <!-- end blog-box -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end portfolio -->
                </div>
                <!-- end page-wrapper -->

                <hr class="invis" />
                <!-- TODO DELETE 
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
                </div>
                -->
                <!-- end row -->
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
import FooterPosts from "./FooterPosts.vue";
import health from "../assets/sample/health.json"; //TODO DELETE
export default {
  name: "HealthBlog",
  components: { FooterPosts },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = health;
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
