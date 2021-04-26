<template>
  <div class="header df jcsb">
    <img src="https://via.placeholder.com/139x31" class="logo" />
    <ul>
      <li>
        <a href="#">Category</a>
      </li>
      <li>
        <a href="#">Popular</a>
      </li>
      <li>
        <a href="#">Contacts</a>
      </li>
      <li>
        <a href="#">Help</a>
      </li>
    </ul>
    <router-link :to="{ name: 'constructor' }">Create your art</router-link>
    <div class="lang-switcher">English language</div>
    <ul>
      <li>
        <a href="#">
          <img src="https://via.placeholder.com/21" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://via.placeholder.com/21" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://via.placeholder.com/21" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://via.placeholder.com/21" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="sass" scoped>
.header
  max-width: 1200px
  position: absolute
  width: 100%
  padding: 17px 0px
  left: 50%
  transform: translateX(-50%)
  @media (max-width: 576px) 
    display: none
  ul
    display: flex
    justify-content: space-between
    list-style-type: none
    padding-left: 0px
    li
      &:not(:last-of-type)
        margin-right: 25px
  a
    text-decoration: none
    font-weight: 500
    font-size: 17px
    line-height: 140%
    text-align: center
    letter-spacing: -0.03em
    color: rgba(185, 185, 185, 0.7)
    transition: .3s
    &:hover
      color: #fff
</style>