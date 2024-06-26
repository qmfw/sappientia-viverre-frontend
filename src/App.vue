<script setup>
import { RouterLink, RouterView } from "vue-router";
// HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <html lang="en">
    <!-- Basic -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Mobile Metas -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Site Metas -->
    <title>SAPPIENTIA VIVERRE - Stylish Magazine Blog Template</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <!-- Site Icons -->
    <link
      rel="shortcut icon"
      href="assets/images/favicon.ico"
      type="image/x-icon"
    />
    <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png" />

    <!-- Design fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900"
      rel="stylesheet"
    />

    <body>
      <!-- TODO LOADER -->
      <!-- <div id="preloader">
        <img class="preloader" src="../src/assets/images/loader.gif" alt="" />
      </div> -->
      <!-- end loader -->
      <!-- END LOADER -->

      <div id="wrapper">
        <Transition class="collapse show top-search" id="collapseExample">
          <div v-if="searchBar" class="card card-block">
            <div class="newsletter-widget text-center">
              <form class="form-inline">
                <input
                  id="search-bar"
                  type="text"
                  class="form-control"
                  placeholder="What you are looking for?"
                />
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <!-- end newsletter -->
          </div>
        </Transition>
        <!-- end top-search -->

        <div class="topbar-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
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
                    title="Flickr"
                    ><i class="fa fa-flickr"></i
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
                    title="Google+"
                    ><i class="fa fa-google-plus"></i
                  ></a>
                </div>
                <!-- end social -->
              </div>
              <!-- end col -->

              <div class="col-lg-4 hidden-md-down">
                <div class="topmenu text-center">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="blog-category-01.html"
                        ><i class="fa fa-star"></i> Trends</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="blog-category-02.html"
                        ><i class="fa fa-bolt"></i> Hot Topics</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="page-contact.html"
                        ><i class="fa fa-user-circle-o"></i> Write for us</a
                      >
                    </li>
                  </ul>
                  <!-- end ul -->
                </div>
                <!-- end topmenu -->
              </div>
              <!-- end col -->

              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="topsearch text-right btn-cursor">
                  <a @click="searchBar = !searchBar" aria-expanded="false"
                    ><i class="fa fa-search"></i> Search</a
                  >
                </div>
                <!-- end search -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end header-logo -->
        </div>
        <!-- end topbar -->

        <div class="header-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="logo btn-cursor">
                  <a @click="$router.push('/')"
                    ><img src="../src/assets/images/logo.png" alt=""
                  /></a>
                </div>
                <!-- end logo -->
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end header-logo -->
        </div>
        <!-- end header -->

        <header class="header">
          <div class="container">
            <nav class="navbar navbar-inverse navbar-toggleable-md">
              <button
                class="navbar-toggler"
                type="button"
                aria-controls="cloapediamenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <Transition
                class="collapse navbar-collapse justify-content-md-center"
                id="cloapediamenu"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link color-pink-hover btn-cursor"
                      @click="$router.push('/')"
                      >Home</a
                    >
                  </li>
                  <li
                    class="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down"
                  >
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Categories</a
                    >
                    <ul
                      class="dropdown-menu megamenu"
                      aria-labelledby="dropdown01"
                    >
                      <li>
                        <div class="mega-menu-content clearfix">
                          <div class="tab">
                            <button
                              class="tablinks active"
                              @click="openCategory($event, 'cat01')"
                            >
                              Fashion
                            </button>
                            <button
                              class="tablinks"
                              @click="openCategory($event, 'cat02')"
                            >
                              Food
                            </button>
                            <button
                              class="tablinks"
                              @click="openCategory($event, 'cat03')"
                            >
                              Technology
                            </button>
                            <button
                              class="tablinks"
                              @click="openCategory($event, 'cat04')"
                            >
                              Travel
                            </button>
                            <button
                              class="tablinks"
                              @click="openCategory($event, 'cat05')"
                            >
                              Health
                            </button>
                          </div>

                          <div class="tab-details clearfix">
                            <div id="cat01" class="tabcontent active">
                              <div class="row">
                                <div
                                  v-for="(value, key, index) in fashion.slice(
                                    0,
                                    4
                                  )"
                                  class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                                >
                                  <div class="blog-box">
                                    <div class="post-media btn-cursor">
                                      <a
                                        @click="
                                          $router.push({
                                            path: '/blog',
                                            query: {
                                              category: value.category,
                                              id: value.id,
                                            },
                                          })
                                        "
                                        title=""
                                      >
                                        <img
                                          style="
                                            min-width: 151.09px;
                                            height: 86.88px;
                                          "
                                          :src="
                                            value
                                              ? value.img
                                              : './assets/images/footer.png'
                                          "
                                          alt=""
                                          class="img-fluid"
                                        />
                                        <div class="hovereffect"></div>
                                        <!-- end hover -->
                                        <span class="menucat">Spa</span>
                                      </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta btn-cursor">
                                      <h4>
                                        <a
                                          @click="
                                            $router.push({
                                              path: '/blog',
                                              query: {
                                                category: value.category,
                                                id: value.id,
                                              },
                                            })
                                          "
                                          title=""
                                          >{{ value.title }}</a
                                        >
                                      </h4>
                                    </div>
                                    <!-- end meta -->
                                  </div>
                                  <!-- end blog-box -->
                                </div>
                              </div>
                              <!-- end row -->
                            </div>
                            <div id="cat02" class="tabcontent">
                              <div class="row">
                                <div
                                  v-for="(value, key, index) in food.slice(
                                    0,
                                    4
                                  )"
                                  class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                                >
                                  <div class="blog-box">
                                    <div class="post-media btn-cursor">
                                      <a
                                        @click="
                                          $router.push({
                                            path: '/blog',
                                            query: {
                                              category: value.category,
                                              id: value.id,
                                            },
                                          })
                                        "
                                        title=""
                                      >
                                        <img
                                          style="
                                            min-width: 151.09px;
                                            height: 86.88px;
                                          "
                                          :src="
                                            value
                                              ? value.img
                                              : './assets/images/footer.png'
                                          "
                                          alt=""
                                          class="img-fluid"
                                        />
                                        <div class="hovereffect"></div>
                                        <!-- end hover -->
                                        <span class="menucat">Fashion</span>
                                      </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta btn-cursor">
                                      <h4>
                                        <a
                                          @click="
                                            $router.push({
                                              path: '/blog',
                                              query: {
                                                category: value.category,
                                                id: value.id,
                                              },
                                            })
                                          "
                                          title=""
                                          >{{ value.title }}</a
                                        >
                                      </h4>
                                    </div>
                                    <!-- end meta -->
                                  </div>
                                  <!-- end blog-box -->
                                </div>
                              </div>
                              <!-- end row -->
                            </div>
                            <div id="cat03" class="tabcontent">
                              <div class="row">
                                <div
                                  v-for="(value, key, index) in tech.slice(
                                    0,
                                    4
                                  )"
                                  class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                                >
                                  <div class="blog-box">
                                    <div class="post-media btn-cursor">
                                      <a
                                        @click="
                                          $router.push({
                                            path: '/blog',
                                            query: {
                                              category: value.category,
                                              id: value.id,
                                            },
                                          })
                                        "
                                        title=""
                                      >
                                        <img
                                          style="
                                            min-width: 151.09px;
                                            height: 86.88px;
                                          "
                                          :src="
                                            value
                                              ? value.img
                                              : './assets/images/footer.png'
                                          "
                                          alt=""
                                          class="img-fluid"
                                        />
                                        <div class="hovereffect"></div>
                                        <!-- end hover -->
                                        <span class="menucat">Tourism</span>
                                      </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta btn-cursor">
                                      <h4>
                                        <a
                                          @click="
                                            $router.push({
                                              path: '/blog',
                                              query: {
                                                category: value.category,
                                                id: value.id,
                                              },
                                            })
                                          "
                                          title=""
                                          >{{ value.title }}</a
                                        >
                                      </h4>
                                    </div>
                                    <!-- end meta -->
                                  </div>
                                  <!-- end blog-box -->
                                </div>
                              </div>
                              <!-- end row -->
                            </div>
                            <div id="cat04" class="tabcontent">
                              <div class="row">
                                <div
                                  v-for="(value, key, index) in travel.slice(
                                    0,
                                    4
                                  )"
                                  class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                                >
                                  <div class="blog-box">
                                    <div class="post-media btn-cursor">
                                      <a
                                        @click="
                                          $router.push({
                                            path: '/blog',
                                            query: {
                                              category: value.category,
                                              id: value.id,
                                            },
                                          })
                                        "
                                        title=""
                                      >
                                        <img
                                          style="
                                            min-width: 151.09px;
                                            height: 86.88px;
                                          "
                                          :src="
                                            value
                                              ? value.img
                                              : './assets/images/footer.png'
                                          "
                                          alt=""
                                          class="img-fluid"
                                        />
                                        <div class="hovereffect"></div>
                                        <!-- end hover -->
                                        <span class="menucat">Places</span>
                                      </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta btn-cursor">
                                      <h4>
                                        <a
                                          @click="
                                            $router.push({
                                              path: '/blog',
                                              query: {
                                                category: value.category,
                                                id: value.id,
                                              },
                                            })
                                          "
                                          title=""
                                          >{{ value.title }}</a
                                        >
                                      </h4>
                                    </div>
                                    <!-- end meta -->
                                  </div>
                                  <!-- end blog-box -->
                                </div>
                              </div>
                              <!-- end row -->
                            </div>
                            <div id="cat05" class="tabcontent">
                              <div class="row">
                                <div
                                  v-for="(value, key, index) in health.slice(
                                    0,
                                    4
                                  )"
                                  class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                                >
                                  <div class="blog-box">
                                    <div class="post-media btn-cursor">
                                      <a
                                        @click="
                                          $router.push({
                                            path: '/blog',
                                            query: {
                                              category: value.category,
                                              id: value.id,
                                            },
                                          })
                                        "
                                        title=""
                                      >
                                        <img
                                          style="
                                            min-width: 151.09px;
                                            height: 86.88px;
                                          "
                                          :src="
                                            value
                                              ? value.img
                                              : './assets/images/footer.png'
                                          "
                                          alt=""
                                          class="img-fluid"
                                        />
                                        <div class="hovereffect"></div>
                                        <!-- end hover -->
                                        <span class="menucat">Vegetables</span>
                                      </a>
                                    </div>
                                    <!-- end media -->
                                    <div class="blog-meta btn-cursor">
                                      <h4>
                                        <a
                                          @click="
                                            $router.push({
                                              path: '/blog',
                                              query: {
                                                category: value.category,
                                                id: value.id,
                                              },
                                            })
                                          "
                                          title=""
                                          >{{ value.title }}</a
                                        >
                                      </h4>
                                    </div>
                                    <!-- end meta -->
                                  </div>
                                  <!-- end blog-box -->
                                </div>
                              </div>
                              <!-- end row -->
                            </div>
                          </div>
                          <!-- end tab-details -->
                        </div>
                        <!-- end mega-menu-content -->
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown has-submenu show">
                    <!-- TODO hide li show, remove 2nd transition -->
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Features</a
                    >
                    <ul class="dropdown-menu" aria-labelledby="dropdown02">
                      <li>
                        <a class="dropdown-item" href="author"
                          >About Us
                          <span
                            class="hidden-md-down hidden-sm-down hidden-xs-down"
                            ><i class="fa fa-angle-right"></i></span
                        ></a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="author"
                              >Blog Author</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="contact"
                              >Contact Page</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="sitemap"
                              >Sitemap & Archives</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Blog Category
                          <span
                            class="hidden-md-down hidden-sm-down hidden-xs-down"
                            ><i class="fa fa-angle-right"></i></span
                        ></a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="fashion">Fashion</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="food">Food</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="tech">Technology</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="travel">Travel</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="videos">Videos</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="health">Health</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Coming Soon!</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-pink-hover btn-cursor"
                      @click="$router.push('/fashion')"
                      >Fashion</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-red-hover btn-cursor"
                      @click="$router.push('/food')"
                      >Food</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-aqua-hover btn-cursor"
                      @click="$router.push('/tech')"
                      >Technology</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-green-hover btn-cursor"
                      @click="$router.push('/travel')"
                      >Travel</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-yellow-hover btn-cursor"
                      @click="$router.push('/videos')"
                      ><i class="fa fa-play-circle-o"></i> Videos</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link color-grey-hover btn-cursor"
                      @click="$router.push('/health')"
                      >Health</a
                    >
                  </li>
                </ul>
              </Transition>
            </nav>
          </div>
          <!-- end container -->
        </header>
        <!-- end header -->
      </div>
    </body>
  </html>
  <RouterView />
</template>

<script>
import fashion from "./assets/sample/fashion.json"; //TODO DELETE
import food from "./assets/sample/food.json"; //TODO DELETE
import tech from "./assets/sample/tech.json"; //TODO DELETE
import travel from "./assets/sample/travel.json"; //TODO DELETE
import health from "./assets/sample/health.json"; //TODO DELETE
export default {
  name: "App",
  data() {
    return {
      searchBar: false,
      navBarFeatures: false,
      fashion: fashion,
      food: food,
      tech: tech,
      travel: travel,
      health: health,
    };
  },
  components: {},
  methods: {
    openCategory(evt, catName) {
      // Declare all variables
      var i, tabcontent, tablinks;
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      // Show the current tab, and add an "active" class to the link that opened the tab
      document.getElementById(catName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import "assets/css/bootstrap.css";
@import "assets/css/font-awesome.min.css";
@import "assets/css/style.css";
@import "assets/css/responsive.css";
@import "assets/css/colors.css";
.shadoweffect > .shadow-desc > .blog-meta,
.blog-box > .blog-meta,
.section > .container > .row .section-title,
.widget > .blog-list-widget > .list-group,
.widget > .link-widget li {
  text-align: left;
}
#collapseExample {
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<style>
.btn-cursor {
  cursor: pointer;
  color: #111111;
}
.pmain {
  padding-left: 5%;
  padding-right: 5%;
}
.pmain a {
  color: #3197d6 !important;
  font-weight: bold;
}
.imgf {
  max-width: 100%;
  height: auto;
}
h3 {
  font-weight: 700;
  line-height: 1.4;
  color: #111111;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 17px;
}
.floatl {
  float: left !important;
  margin: 0 2rem 1rem -3rem;
  min-height: 495px;
  max-height: 505px;
}
.home-img-tech-1 {
  max-width: 534px;
  max-height: 468px;
  min-width: 307.66px;
  min-height: 269.63px;
}
.home-img-travel-1 {
  max-width: 533px;
  max-height: 261px;
  min-width: 307.66px;
  min-height: 150.64px;
}
.home-img-travel-2 {
  max-width: 800px;
  max-height: 138.41px;
  min-width: 148.83px;
  min-height: 138.41px;
}
.home-img-tech-2 {
  min-width: 449.5px;
  height: 241.42px;
}
</style>
