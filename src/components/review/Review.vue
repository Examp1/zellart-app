<template>
  <div class="review">
      <div class="container">
          <h2 class="section-title">Сustomer reviews</h2>
          <div class="review-wrapp df jcsb">
              <review-item v-for="i in 3" :key="i"></review-item>
          </div>
          <a href="#" class="query df jcc">Show more reviews</a>
      </div>
  </div>
</template>

<script>
import ReviewItem from '@/components/review/ReviewItem.vue'
export default {
name: 'Review',
components: {
    ReviewItem,
},
}
</script>

<style lang="sass" scoped>
.section-title
    margin-bottom: 54px
.review
    margin-bottom: 100px
.review-wrapp
    margin-bottom: 30px
    @media (max-width: 1024px)
        flex-wrap: wrap
</style>