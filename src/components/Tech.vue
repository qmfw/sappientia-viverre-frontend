<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>
                  <i class="fa fa-leaf bg-aqua"></i> Technology
                  <small class="hidden-xs-down hidden-sm-down"
                    >Stay ahead with cutting-edge tech updates!
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
                  <li class="breadcrumb-item active">Technology</li>
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
                  <div class="blog-custom-build">
                    <div v-for="(value, key, index) in blogs" class="blog-box">
                      <div class="post-media btn-cursor">
                        <a
                          @click="
                            $router.push({
                              path: '/blog',
                              query: { category: 'tech', id: value.id },
                            })
                          "
                          title=""
                        >
                          <!--img style="max-width: 825px; height: 474.38px"-->
                          <!--img style="max-width: 825px; height: 300px"-->
                          <img
                            :src="
                              value ? value.img : '../assets/images/footer.png'
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
                      <div class="blog-meta big-meta text-center">
                        <div class="post-sharing">
                          <ul class="list-inline">
                            <li>
                              <a href="#" class="fb-button btn btn-primary"
                                ><i class="fa fa-facebook"></i>
                                <span class="down-mobile"
                                  >Share on Facebook</span
                                ></a
                              >
                            </li>
                            <li>
                              <a href="#" class="tw-button btn btn-primary"
                                ><i class="fa fa-twitter"></i>
                                <span class="down-mobile"
                                  >Tweet on Twitter</span
                                ></a
                              >
                            </li>
                            <li>
                              <a href="#" class="gp-button btn btn-primary"
                                ><i class="fa fa-google-plus"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                        <!-- end post-sharing -->
                        <h4>
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'tech', id: value.id },
                              })
                            "
                            title=""
                            >{{ value.title }}</a
                          >
                        </h4>
                        <p>
                          {{ value.subtitle }}
                        </p>
                        <small><a title="">Technology</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                        <small
                          ><a title="">by {{ value.author }}</a></small
                        >
                        <small
                          ><a href="blog-author.html" title=""
                            ><i class="fa fa-eye"></i> {{ value.views }}</a
                          ></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> -->

                    <hr class="invis" />

                    <!-- end blog-box -->
                  </div>
                  <!-- end blog-custom-build -->
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
import tech from "../assets/sample/tech.json"; //TODO DELETE
export default {
  name: "TechBlog",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = tech;
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
