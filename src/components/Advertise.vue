<template>
  <div id="starclick"></div>

  <!-- <script type='text/javascript' src='https://www.star-clicks.com/secure/ads.php?pid=87049113653880727'></script> -->
</template>
<script>
/* eslint-disable no-useless-escape */
import postscribe from "postscribe";
export default {
  name: "Advertise",
  mounted: function () {
    postscribe(
      "#starclick",
      `<script src="https://www.star-clicks.com/secure/ads.php?pid=87049113653880727"><\/script>`
    );
  },
};
</script>
<style scoped>
#starclick {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 30px 240px 30px;
  background-color: black;
}

#starclick table {
  width: 100%;
}
</style>
