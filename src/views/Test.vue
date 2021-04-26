<template>
  <div class="wrap">
    <div class="row">
    <nested-test class="col-8" v-model="elements" />
    <raw-displayer class="col-4" :title="'Vuex Store'" :value="elements" />
  </div>
   <div
      v-masonry
      transition-duration=".1s"
      item-selector=".item"
      class="masonry-container"
      gutter="26"
      columnWidth=".size"    
    >
      <div
        v-masonry-tile
        class="item"
        :key="el"
        v-for="el in arr"
        
      >
        <img :src="el" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import NestedTest from "../components/nested/nested-test";
import rawDisplayer from "../components/infra/raw-displayer";
export default {
  name: "nested-with-vmodel",
  components: {
    NestedTest,
    rawDisplayer,
  },
  computed: {
    elements: {
      get() {
        return this.$store.state.elements;
      },
      set(value) {
        this.$store.dispatch("updateElements", value);
      },
    },
  },
  methods: {
   
  },
  data() {
    return {
      arr: [
        'https://via.placeholder.com/373x481',
        'https://via.placeholder.com/445x268',
        'https://via.placeholder.com/380x328',
        'https://via.placeholder.com/374x430',
        'https://via.placeholder.com/445x303',
        'https://via.placeholder.com/380x237',
        'https://via.placeholder.com/445x311',
        'https://via.placeholder.com/380x317',
      ],
      display: "Nested (v-model & vuex)",
      order: 16,
    }
  },
};
</script>
<style lang="sass" scoped>
body
  background-color: #fafafa
.row
  position: relative
  display: flex
  justify-content: space-between
  width: 100%
.masonry-container
  width: 1249px !important
.item
  max-width: 380px
  margin-bottom: 26px
img
  width: 100%
  object-fit: contain
.size
  width: 50%
</style>