<template>
  <html lang="en">
    <body>
      <div id="wrapper">
        <section class="section first-section">
          <div class="container-fluid">
            <div class="masonry-blog clearfix">
              <div class="left-side">
                <div
                  class="masonry-box post-media"
                  @click="
                    $router.push({
                      path: '/blog',
                      query: { category: 'tech', id: tech[0].id },
                    })
                  "
                >
                  <img
                    @click="
                      $router.push({
                        path: '/blog',
                        query: { category: 'tech', id: tech[0].id },
                      })
                    "
                    :src="tech[0] ? tech[0].img : '../assets/images/footer.png'"
                    alt=""
                    class="img-fluid home-img-tech-1"
                  />
                  <div class="shadoweffect">
                    <div class="shadow-desc">
                      <div class="blog-meta">
                        <span class="bg-aqua"
                          ><a href="tech" title="">Technology</a></span
                        >
                        <h4>
                          <a class="btn-cursor" title="">{{
                            tech[0] ? tech[0].title : ""
                          }}</a>
                        </h4>
                        <small
                          ><a title="">{{
                            tech[0] ? tech[0].created_at : ""
                          }}</a></small
                        >
                        <small
                          ><a title=""
                            >by {{ tech[0] ? tech[0].author : "" }}</a
                          ></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
                </div>
                <!-- end post-media -->
              </div>
              <!-- end left-side -->

              <div class="center-side">
                <div
                  v-for="(value, key, index) in travel.slice(0, 3)"
                  :class="[
                    key == 0 ? '' : 'small-box',
                    'masonry-box',
                    'post-media',
                  ]"
                  @click="
                    $router.push({
                      path: '/blog',
                      query: { category: 'travel', id: value.id },
                    })
                  "
                >
                  <img
                    :src="value ? value.img : '../assets/images/footer.png'"
                    alt=""
                    :class="[
                      key == 0 ? 'home-img-travel-1' : 'home-img-travel-2',
                      'img-fluid',
                    ]"
                  />
                  <div class="shadoweffect">
                    <div class="shadow-desc">
                      <div class="blog-meta">
                        <span class="bg-green"
                          ><a href="travel" title="">Travel</a></span
                        >
                        <h4>
                          <a class="btn-cursor" title="">{{ value.title }}</a>
                        </h4>
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
                </div>
                <!-- end post-media -->
              </div>
              <!-- end left-side -->

              <div class="right-side hidden-md-down">
                <div
                  class="masonry-box post-media"
                  @click="
                    $router.push({
                      path: '/blog',
                      query: { category: 'tech', id: tech[1].id },
                    })
                  "
                >
                  <img
                    :src="tech[1] ? tech[1].img : '../assets/images/footer.png'"
                    alt=""
                    class="img-fluid home-img-tech-1"
                  />
                  <div class="shadoweffect">
                    <div class="shadow-desc">
                      <div class="blog-meta">
                        <span class="bg-aqua"
                          ><a href="tech" title="">Technology</a></span
                        >
                        <h4>
                          <a class="btn-cursor" title="">{{
                            tech[1] ? tech[1].title : ""
                          }}</a>
                        </h4>
                        <small
                          ><a title="">{{
                            tech[1] ? tech[1].created_at : ""
                          }}</a></small
                        >
                        <small
                          ><a title=""
                            >by {{ tech[1] ? tech[1].author : "" }}</a
                          ></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
                </div>
                <!-- end post-media -->
              </div>
              <!-- end right-side -->
            </div>
            <!-- end masonry -->
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="section-title">
                  <h3 class="color-aqua">
                    <a href="tech" title="">Technology</a>
                  </h3>
                </div>
                <!-- end title -->

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div
                      v-for="(value, key, index) in tech.slice(2, 4)"
                      class="blog-box"
                    >
                      <div class="post-media">
                        <a
                          class="btn-cursor"
                          @click="
                            $router.push({
                              path: '/blog',
                              query: { category: 'tech', id: value.id },
                            })
                          "
                          title=""
                        >
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
                      <div class="blog-meta big-meta">
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
                        <small><a href="tech" title="">Technology</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                        <small
                          ><a title="">by {{ value.author }}</a></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> for pre-space -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <!-- end col -->

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="section-title">
                  <h3 class="color-pink">
                    <a href="fashion" title="">Fashion</a>
                  </h3>
                </div>
                <!-- end title -->
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div
                      v-for="(value, key, index) in fashion.slice(0, 2)"
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
                      <div class="blog-meta">
                        <h4>
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'fashion', id: value.id },
                              })
                            "
                            title=""
                            >{{ value.title }}</a
                          >
                        </h4>
                        <small><a href="fashion" title="">Fashion</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> -->
                  </div>
                  <!-- end col -->

                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div
                      v-for="(value, key, index) in fashion.slice(2, 4)"
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
                      <div class="blog-meta">
                        <h4>
                          <a
                            class="btn-cursor"
                            @click="
                              $router.push({
                                path: '/blog',
                                query: { category: 'fashion', id: value.id },
                              })
                            "
                            title=""
                            >{{ value.title }}</a
                          >
                        </h4>
                        <small><a href="fashion" title="">Fashion</a></small>
                        <small
                          ><a title="">{{ value.created_at }}</a></small
                        >
                      </div>
                      <!-- end meta -->
                    </div>
                    <!-- end blog-box <hr class="invis" /> -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <hr class="invis1" />

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

            <hr class="invis1" />

            <div class="row">
              <div class="col-lg-9">
                <div class="blog-list clearfix">
                  <div class="section-title">
                    <h3 class="color-green">
                      <a href="travel" title="">Travel</a>
                    </h3>
                  </div>
                  <!-- end title -->

                  <div
                    v-for="(value, key, index) in travel.slice(3, 6)"
                    class="blog-box row"
                  >
                    <div class="col-md-4">
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
                          <img
                            :src="
                              value ? value.img : '../assets/images/footer.png'
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
                      <small><a href="travel" title="">Travel</a></small>
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
                        ><a title="">By {{ value.author }}</a></small
                      >
                    </div>
                    <!-- end meta -->
                    <hr class="invis" />
                  </div>
                  <!-- end blog-box -->
                </div>
                <!-- end blog-list -->

                <hr class="invis" />

                <div class="blog-list clearfix">
                  <div class="section-title">
                    <h3 class="color-red">
                      <a href="food" title="">Food</a>
                    </h3>
                  </div>
                  <!-- end title -->

                  <div
                    v-for="(value, key, index) in food.slice(0, 3)"
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
                          <img
                            :src="
                              value ? value.img : '../assets/images/footer.png'
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
              <!-- end col -->

              <div class="col-lg-3">
                <div class="section-title">
                  <h3 class="color-yellow">
                    <a href="videos" title="">Videos</a>
                  </h3>
                </div>
                <!-- end title -->

                <div
                  v-for="(value, key, index) in videos.slice(0, 3)"
                  class="blog-box"
                >
                  <div class="post-media">
                    <a :href="value.url" title="">
                      <img
                        style="height: 120.59px"
                        :src="
                          value
                            ? value.thumbnail
                            : '../assets/images/footer.png'
                        "
                        alt=""
                        class="img-fluid"
                      />
                      <div class="hovereffect">
                        <span class="videohover"></span>
                      </div>
                      <!-- end hover -->
                    </a>
                  </div>
                  <!-- end media -->
                  <div class="blog-meta">
                    <h4>
                      <a :href="value.url" title="">{{ value.title }}</a>
                    </h4>
                    <small><a href="videos" title="">Videos</a></small>
                    <small
                      ><a title="">{{ value.created_at }}</a></small
                    >
                  </div>
                  <!-- end meta -->
                </div>
                <!-- end blog-box <hr class="invis" /> -->

                <div class="section-title">
                  <h3 class="color-grey">
                    <a href="health" title="">Health</a>
                  </h3>
                </div>
                <!-- end title -->

                <div
                  v-for="(value, key, index) in health.slice(0, 3)"
                  class="blog-box"
                >
                  <div class="post-media btn-cursor">
                    <a
                      @click="
                        $router.push({
                          path: '/blog',
                          query: { category: 'health', id: value.id },
                        })
                      "
                      title=""
                    >
                      <img
                        style="height: 120.59px"
                        :src="value ? value.img : '../assets/images/footer.png'"
                        alt=""
                        class="img-fluid"
                      /><!--<img style="max-height: 120.75px" :src="value ? value.img : '../assets/images/footer.png'" alt="" class="img-fluid" />-->
                      <div class="hovereffect">
                        <span></span>
                      </div>
                      <!-- end hover -->
                    </a>
                  </div>
                  <!-- end media -->
                  <div class="blog-meta btn-cursor">
                    <h4>
                      <a
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
                    <small><a href="health" title="">Health</a></small>
                    <small
                      ><a title="">{{ value.created_at }}</a></small
                    >
                  </div>
                  <hr class="invis" />
                  <!-- end meta -->
                </div>
                <!-- end blog-box -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <hr class="invis1" />

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
          </div>
          <!-- end container -->
        </section>

        <FooterPosts></FooterPosts>
      </div>
    </body>
  </html>
</template>
<script>
import FooterPosts from "./FooterPosts.vue";
import fashion from "../assets/sample/fashion.json"; //TODO DELETE
import food from "../assets/sample/food.json"; //TODO DELETE
import tech from "../assets/sample/tech.json"; //TODO DELETE
import travel from "../assets/sample/travel.json"; //TODO DELETE
import videos from "../assets/sample/videos.json"; //TODO DELETE
import health from "../assets/sample/health.json"; //TODO DELETE
export default {
  name: "HomeBlog",
  components: { FooterPosts },
  data() {
    return {
      fashion: [],
      food: [],
      tech: [],
      travel: [],
      videos: [],
      health: [],
    };
  },
  methods: {},
  mounted() {
    this.fashion = fashion;
    this.food = food;
    this.tech = tech;
    this.travel = travel;
    this.videos = videos;
    this.health = health;
  },
};
</script>
<style scoped>
@import "../assets/css/bootstrap.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/style.css";
@import "../assets/css/responsive.css";
@import "../assets/css/colors.css";
.shadoweffect > .shadow-desc > .blog-meta,
.blog-box > .blog-meta,
.section > .container > .row .section-title {
  text-align: left;
}

.blog-box {
  margin-bottom: 30px;
}
</style>
