<!-- What do you think of a luxurious and elegant restaurant? -->
<!-- 10 different samples of vegetables -->
<!-- You can make money by giving recipes -->
<!-- What do you say we make potatoes? -->
<!-- A chat with a cup of coffee conversation -->
<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <div class="page-title wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h2>
                  <i class="fa fa-shopping-bag bg-red"></i> Food & Drink
                  <small class="hidden-xs-down hidden-sm-down"
                    >Dive into delicious recipes and culinary adventures!
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
                  <li class="breadcrumb-item active">Food</li>
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
                  <div class="blog-list clearfix">
                    <div
                      v-for="(value, key, index) in blogs.slice(0, 3)"
                      class="blog-box row"
                    >
                      <div class="col-md-4">
                        <div class="post-media btn-cursor">
                          <a
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'food', id: value.id },
                              })
                            "
                            title=""
                          >
                            <!--img style="max-width: 254.98px; height: 254.98px"-->
                            <img
                              :src="
                                value
                                  ? value.img
                                  : '../assets/images/footer.png'
                              "
                              alt=""
                              class="img-fluid"
                            />
                            <div class="hovereffect"></div>
                          </a>
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col -->

                      <div class="blog-meta big-meta col-md-8">
                        <h4>
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'food', id: value.id },
                              })
                            "
                            title=""
                            >{{ value.title }}</a
                          >
                        </h4>
                        <p>
                          {{ value.subtitle }}
                        </p>
                        <small><a href="food" title="">Food</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                        <small
                          ><a title="">by {{ value.author }}</a></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> -->
                    <div class="row">
                      <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                          <div class="banner-img">
                            <a href="/ad" target="_blank"
                              ><img
                                src="https://static.surfe.be/images/banners/en/728x90_8.gif"
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

                    <div
                      v-for="(value, key, index) in blogs.slice(3)"
                      class="blog-box row"
                    >
                      <div class="col-md-4">
                        <div class="post-media btn-cursor">
                          <a
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'food', id: value.id },
                              })
                            "
                            title=""
                          >
                            <!--img style="max-width: 254.98px; height: 254.98px"-->
                            <img
                              style="max-width: 210px; height: 210px"
                              :src="
                                value
                                  ? value.img
                                  : '../assets/images/footer.png'
                              "
                              alt=""
                              class="img-fluid"
                            />
                            <div class="hovereffect"></div>
                          </a>
                        </div>
                        <!-- end media -->
                      </div>
                      <!-- end col -->

                      <div class="blog-meta big-meta col-md-8">
                        <h4>
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'food', id: value.id },
                              })
                            "
                            title=""
                            >{{ value.title }}</a
                          >
                        </h4>
                        <p>
                          {{ value.subtitle }}
                        </p>
                        <small><a href="food" title="">Food</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                        <small
                          ><a title="">by {{ value.author }}</a></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> -->
                  </div>
                  <!-- end blog-list -->
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
import food from "../assets/sample/food.json"; //TODO DELETE
export default {
  name: "Food",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = food;
  },
};
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";

.blog-box {
  margin-bottom: 30px;
}
</style>
