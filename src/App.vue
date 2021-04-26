<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap')
@import './assets/var_and_mix'
@import './assets/class'
*
  font-family: Montserrat  
.section-title
  font-weight: 600
  line-height: 42px
  font-size: 34px
  color: $g-color
.category-link, .query
  color: $o-color
  text-decoration: none
  font-size: 17px
  line-height: 140%
  font-weight: 600
</style>