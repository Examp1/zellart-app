<template>
  <div class="slider position__bottom" >
    <div class="container">
     <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" :navigationEnabled="true">
    <slide v-for="i in 5" :key="i" class="slider-block df jcsb">
      <div class="l">
        <h2>Information about Zellart</h2>
        <p>Our mission: Bring a splash of color into your life with our wall paintings and reproductions!</p>
        <p>With great love for detail, we breathe new life into the classics of Monet, Klimt or Van Gogh and, in addition, provide a platform for contemporary artists and photographers to sell their art without the need for complex marketing strategies, which leaves more time for the creative process. This way we can be sure that our wide range of images has something for every home.</p>
      </div>
      <div class="r">
        <img src="https://via.placeholder.com/752x427/000" alt="">
      </div>
    </slide>
  </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "slider",
  components: {
    Carousel,
    Slide,
  },
  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },
  },
};
</script>

<style lang="sass" scoped>
.slider
  margin-bottom: 100px
  @media (max-width: 1024px)
    flex-wrap: wrap
    .l,.r
      width: 100%
  h2
    font-weight: 600
    font-size: 34px
    line-height: 42px
    letter-spacing: -0.03em
    color: #423F40
    margin-bottom: 34px
  p:first-of-type
    font-weight: 500
    font-size: 24px
    line-height: 31px
    letter-spacing: -0.03em
    color: #423F40
    margin-bottom: 12px
  p
    font-size: 18px
    line-height: 29px
    letter-spacing: -0.03em
    color: #AAAAAA
.position__bottom button
  position: static !important
.slider-block
  @media (max-width: 1024px)
    flex-wrap: wrap
  button
    position: sratic
</style>