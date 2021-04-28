<template>
  <div class="home">
    <banner-block></banner-block>  
    <most-popular></most-popular>
    <popular-painting></popular-painting>
    <create-your-art></create-your-art>
    <!-- <Slider></Slider> -->
    <Review></Review>
  </div>
</template>

<script>
import BannerBlock from '@/components/home/BannerBlock'
import MostPopular from '@/components/home/MostPopular'
import PopularPainting from '@/components/home/PopularPainting.vue'
import CreateYourArt from '@/components/home/CreateYourArt.vue'
// import Slider from '@/components/home/Slider.vue'
import Review from '@/components/review/Review.vue'
export default {
  name: 'Home',
  components: {
    MostPopular,
    PopularPainting,
    CreateYourArt,
    // Slider,
    Review,
    BannerBlock
  }
}
</script>
