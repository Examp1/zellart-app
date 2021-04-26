<template>
  <div class="popularPainting">
    <div class="container">
      <div class="df jcsb ait">
          <h2 class="section-title">Popular paintings</h2>
          <router-link class="category-link" :to="{name: 'home'}">See all art</router-link>
      </div>
      <div
        v-masonry
        transition-duration=".1s"
        item-selector=".item"
        class="masonry-container"
        gutter="20"
      >
        <div v-masonry-tile class="item" :key="el1" v-for="el1 in arr">
          <img :src="el1" alt="" />
        </div>
      </div>
      <a href="#" class="query df jcc">Show more art</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "mostPopular",
  data() {
    return {
      arr: [
        "https://via.placeholder.com/373x481",
        "https://via.placeholder.com/445x268",
        "https://via.placeholder.com/380x328",
        "https://via.placeholder.com/374x430",
        "https://via.placeholder.com/445x303",
        "https://via.placeholder.com/380x237",
        "https://via.placeholder.com/445x311",
        "https://via.placeholder.com/380x317",
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.item
    max-width: 360px
    margin-bottom: 16px
    @media (max-width: 1200px)
      max-width: 340px 
    @media (max-width: 1024px)
      max-width: 310px 
    @media (max-width: 768px)
      max-width: 210px 
    @media (max-width: 576px)
      max-width: 161px 
img
    width: 100%
    object-fit: contain
.masonry-container
    margin-top: 45px
.popularPainting
    margin-top: 100px
</style>