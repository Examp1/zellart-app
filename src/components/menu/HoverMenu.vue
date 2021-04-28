<template>
  <div class="hoverMenu">
    <div
      v-masonry
      transition-duration=".1s"
      item-selector=".item"
      class="masonry-container"
      gutter="20"
    >
      <div
        v-masonry-tile
        class="item"
        :key="index"
        v-for="(item, index) in menuBody"
      >
        <h2>{{ item.title }}</h2>
        <router-link
          class="listItem"
          :to="{ name: 'home' }"
          v-for="(el,index) in item.list"
          :key="index"
        >
          {{ el.title }}
        </router-link>
      </div>
    </div>
    <div class="bestseller">
      <img src="https://via.placeholder.com/254x421" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: ['menuBody']
};
</script>

<style lang="sass" scoped>
.masonry-container
    width: 100%
.item
    width: calc(25% - 20px)
    h2
        font-weight: 600
        font-size: 19px
        line-height: 140%
        letter-spacing: -0.03em
        color: #423F40
.listItem
    display: block
    padding: 5px
    color: #fff
    text-decoration: none
    font-weight: 500
    font-size: 17px
    line-height: 140%
    letter-spacing: -0.03em
    color: #AAAAAA
    &:last-of-type
        border-bottom: 1px solid #000
</style>