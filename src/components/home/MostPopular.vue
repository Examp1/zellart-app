<template>
  <div class="mostPopular">
    <div class="container">
      <div class="df jcsb ait">
          <h2 class="section-title">Most popular categories</h2>
          <router-link class="category-link" :to="{name: 'home'}">See all categories</router-link>
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
      <a href="#" class="query df jcc">Show more categories</a>
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
    width: calc(1170px / 3 - 26px)
    margin-bottom: 16px
    @media (max-width: 1200px)
      max-width: 340px 
    @media (max-width: 1024px)
      max-width: 310px 
    @media (max-width: 768px)
      max-width: 210px 
    @media (max-width: 576px)
      max-width: calc(100vw / 2 - 20px)
img
    width: 100%
    object-fit: contain
.masonry-container
    margin-top: 45px
</style>