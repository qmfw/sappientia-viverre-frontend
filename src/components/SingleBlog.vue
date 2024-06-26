<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <section class="section wb">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                  <div class="blog-title-area">
                    <ol class="breadcrumb hidden-xs-down">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">Blog</a></li>
                      <li class="breadcrumb-item active">{{ blog.title }}</li>
                    </ol>

                    <span v-if="blog.category == 'fashion'" class="color-red"
                      ><a href="fashion" title="">Fashion</a></span
                    >
                    <span v-else-if="blog.category == 'food'" class="color-pink"
                      ><a href="food" title="">Food</a></span
                    >
                    <span
                      v-else-if="blog.category == 'technology'"
                      class="color-aqua"
                      ><a href="technology" title="">Technology</a></span
                    >
                    <span
                      v-else-if="blog.category == 'travel'"
                      class="color-green"
                      ><a href="travel" title="">Travel</a></span
                    >
                    <span
                      v-else-if="blog.category == 'videos'"
                      class="color-yellow"
                      ><a href="videos" title="">Videos</a></span
                    >
                    <span
                      v-else-if="blog.category == 'health'"
                      class="color-grey"
                      ><a href="health" title="">Health</a></span
                    >
                    <h3>{{ blog.title }}</h3>

                    <div class="blog-meta big-meta">
                      <small
                        ><a href="single.html" title="">{{
                          blog.created_at
                        }}</a></small
                      >
                      <small
                        ><a href="blog-author.html" title=""
                          >by {{ blog.author }}</a
                        ></small
                      >
                      <!-- <small
                        ><a href="#" title=""
                          ><i class="fa fa-eye"></i> {{ blog.views }}</a
                        ></small
                      > -->
                    </div>
                    <!-- end meta -->

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
                            <span class="down-mobile">Tweet on Twitter</span></a
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
                  </div>
                  <!-- end title -->

                  <div class="blog-content" v-html="blog.content"></div>
                  <div style="height: 20px"></div>
                  <div class="blog-title-area">
                    <div class="tag-cloud-single">
                      <span>Tags</span>
                      <small><a href="#" title="">lifestyle</a></small>
                      <small><a href="#" title="">colorful</a></small>
                      <small><a href="#" title="">trending</a></small>
                      <small><a href="#" title="">another tag</a></small>
                    </div>
                    <!-- end meta -->

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
                            <span class="down-mobile">Tweet on Twitter</span></a
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
                  </div>
                  <!-- end title -->

                  <div class="row">
                    <div class="col-lg-12">
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

                  <hr class="invis1" />
                  <!-- 
                  <div class="custombox prevnextpost clearfix">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="blog-list-widget">
                          <div class="list-group">
                            <a
                              href="single.html"
                              class="list-group-item list-group-item-action flex-column align-items-start"
                            >
                              <div
                                class="w-100 justify-content-between text-right"
                              >
                                <img
                                  src=""
                                  alt=""
                                  class="img-fluid float-right"
                                />
                                <h5 class="mb-1">
                                  5 Beautiful buildings you need to before dying
                                </h5>
                                <small>Prev Post</small>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="blog-list-widget">
                          <div class="list-group">
                            <a
                              href="single.html"
                              class="list-group-item list-group-item-action flex-column align-items-start"
                            >
                              <div class="w-100 justify-content-between">
                                <img
                                  src=""
                                  alt=""
                                  class="img-fluid float-left"
                                />
                                <h5 class="mb-1">
                                  Let's make an introduction to the glorious
                                  world of history
                                </h5>
                                <small>Next Post</small>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="invis1" />

                  <div class="custombox authorbox clearfix">
                    <h4 class="small-title">About author</h4>
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <img
                          src=""
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </div>

                      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                        <h4><a href="#">Jessica</a></h4>
                        <p>
                          Quisque sed tristique felis. Lorem
                          <a href="#">visit my website</a> amet, consectetur
                          adipiscing elit. Phasellus quis mi auctor, tincidunt
                          nisl eget, finibus odio. Duis tempus elit quis risus
                          congue feugiat. Thanks for stop SAPPIENTIA VIVERRE!
                        </p>

                        <div class="topsocial">
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
                            title="Youtube"
                            ><i class="fa fa-youtube"></i
                          ></a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Pinterest"
                            ><i class="fa fa-pinterest"></i
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
                            title="Website"
                            ><i class="fa fa-link"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="invis1" />

                  <div class="custombox clearfix">
                    <h4 class="small-title">You may also like</h4>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="blog-box">
                          <div class="post-media">
                            <a href="single.html" title="">
                              <img
                                src=""
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span class=""></span>
                              </div>
                            </a>
                          </div>
                          <div class="blog-meta">
                            <h4>
                              <a href="single.html" title=""
                                >We are guests of ABC Design Studio</a
                              >
                            </h4>
                            <small
                              ><a href="blog-category-01.html" title=""
                                >Trends</a
                              ></small
                            >
                            <small
                              ><a href="blog-category-01.html" title=""
                                >21 July, 2017</a
                              ></small
                            >
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="blog-box">
                          <div class="post-media">
                            <a href="single.html" title="">
                              <img
                                src=""
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span class=""></span>
                              </div>
                            </a>
                          </div>
                          <div class="blog-meta">
                            <h4>
                              <a href="single.html" title=""
                                >Nostalgia at work with family</a
                              >
                            </h4>
                            <small
                              ><a href="blog-category-01.html" title=""
                                >News</a
                              ></small
                            >
                            <small
                              ><a href="blog-category-01.html" title=""
                                >20 July, 2017</a
                              ></small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="invis1" />

                  <div class="custombox clearfix">
                    <h4 class="small-title">
                      {{ blog && blog.comments ? blog.comments.length : 0 }}
                      Comments
                    </h4>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="comments-list">
                          <div
                            v-for="(value, key, index) in blog.comments"
                            class="media"
                          >
                            <a class="media-left" href="#">
                              <img
                                src=""
                                alt=""
                                class="rounded-circle"
                              />
                            </a>
                            <div class="media-body">
                              <h4 class="media-heading user_name">
                                {{ value.writer }}
                                <small>{{ value.date }} days ago</small>
                              </h4>
                              <p>
                                {{ value.content }}
                              </p>
                              <a href="#" class="btn btn-primary btn-sm"
                                >Reply</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="invis1" />

                  <div class="custombox clearfix">
                    <h4 class="small-title">Leave a Reply</h4>
                    <div class="row">
                      <div class="col-lg-12">
                        <form class="form-wrapper">
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
                            placeholder="Website"
                          />
                          <textarea
                            class="form-control"
                            placeholder="Your comment"
                          ></textarea>
                          <button type="submit" class="btn btn-primary">
                            Submit Comment
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
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
import fashion from "../assets/sample/fashion.json"; //TODO DELETE
import food from "../assets/sample/food.json"; //TODO DELETE
import tech from "../assets/sample/tech.json"; //TODO DELETE
import travel from "../assets/sample/travel.json"; //TODO DELETE
import health from "../assets/sample/health.json"; //TODO DELETE
export default {
  name: "SingleBlog",
  components: { SideBarWidget, FooterPosts },
  data() {
    return {
      blog: {},
    };
  },
  methods: {},
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (this.$route.query.category == "fashion") {
      this.blog = fashion.find((f) => f.id == this.$route.query.id);
    } else if (this.$route.query.category == "food") {
      this.blog = food.find((f) => f.id == this.$route.query.id);
    } else if (this.$route.query.category == "tech") {
      this.blog = tech.find((t) => t.id == this.$route.query.id);
    } else if (this.$route.query.category == "travel") {
      this.blog = travel.find((t) => t.id == this.$route.query.id);
    } else if (this.$route.query.category == "health") {
      this.blog = health.find((h) => h.id == this.$route.query.id);
    }
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
