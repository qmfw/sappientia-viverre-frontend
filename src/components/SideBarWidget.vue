<template>
  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
    <div class="sidebar">
      <div class="widget">
        <h2 class="widget-title">Search</h2>
        <form class="form-inline search-form">
          <div class="form-group">
            <input
              id="search-on-site"
              type="text"
              class="form-control"
              placeholder="Search on the site"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <!-- end widget -->

      <div class="widget">
        <h2 class="widget-title">Recent Posts</h2>
        <div class="blog-list-widget">
          <div class="list-group btn-cursor">
            <a
              v-for="(value, key, index) in blogs"
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
                  style="max-width: 55px; height: 55px"
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

      <div class="widget">
        <h2 class="widget-title">Advertising</h2>
        <div class="banner-spot clearfix">
          <div class="banner-img">
            <a href="/ad" target="_blank"
              ><img
                src="https://static.surfe.be/images/banners/en/300x250_9.gif"
                alt="Surfe.be - Banner advertising service"
            /></a>
          </div>
          <!-- end banner-img -->
        </div>
        <!-- end banner -->
      </div>
      <!-- end widget -->

      <div class="widget">
        <h2 class="widget-title">Instagram Feed</h2>
        <div class="instagram-wrapper clearfix">
          <a v-for="n in 9" class="" href="#"
            ><img
              style="max-width: 64.98px; height: 64.73px"
              src="../assets/images/flogo.png"
              alt=""
              class="img-fluid"
          /></a>
        </div>
        <!-- end Instagram wrapper -->
      </div>
      <!-- end widget -->

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
    <!-- end sidebar -->
  </div>
  <!-- end col -->
</template>
<script>
import travel from "../assets/sample/travel.json"; //TODO DELETE
export default {
  name: "SideBarWidget",
  components: {},
  data() {
    return {
      blogs: [],
    };
  },
  methods: {},
  mounted() {
    this.blogs = travel.slice(0, 3);
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
