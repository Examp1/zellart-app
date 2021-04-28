<template>
  <ul class="menu">
    <li v-for="(item, index) in menuHeaders" :key="index">
      <a href="#" class="hoverItem">
        {{ item.title }}
        <hover-menu :menuBody="menuBody" :data-name="item.title"></hover-menu>
      </a>
    </li>
  </ul>
</template>

<script>
import HoverMenu from './HoverMenu'
export default {
  name: "Menu",
  components: {
      HoverMenu,
  },
  data() {
    return {
      menuComp: null,
      menuHeaders: [
        {
          title: "Abstraction",
        },
        {
          title: "Nature",
        },
        {
          title: "Space",
        },
        {
          title: "Food and drink",
        },
        {
          title: "Animals",
        },
        {
          title: "Black and white",
        },
      ],
      menuBody: null,
    };
  },
    // TODO hover-menu component props
  mounted() {
    this.axios.get("http://localhost:3000/menu").then((response) => {
      this.menuBody = response.data;
    });
  },
};
</script>

<style lang="sass" scoped>
.menu
    display: flex
    justify-content: space-between
    color: #fff
    padding-left: 0px
    list-style: none
    position: relative
    a
        color: #fff
        text-decoration: none
        font-weight: 500
        font-size: 17px
        line-height: 140%
        letter-spacing: -0.03em
        color: #AAAAAA
.hoverMenu
    width: 100%
    background-color: #DFDEDE
    border-radius: 25px
    position: absolute
    top: 35px
    left: 0px
    height: auto
    display: flex
    justify-content: space-between
    padding: 20px
    transition-delay: .3s
    visibility: hidden
    opacity: 0
    transition: .3s
    .column
        width: calc(20% - 10px)
        height: 100%
        border: 1px solid red
        img
            max-width: 100%
            object-fit: contain
.hoverItem
    &::before
        content: ''
        top: 5px
        transform: translateX(22px)
        position: absolute
        border: 15px solid transparent
        border-bottom: 15px solid rgba(255, 255, 255, 0.85)
        opacity: 0
        transition-delay: .3s
        transition: .3s
    &:hover
        &::before
            opacity: 1
.hoverItem:hover > .hoverMenu
    visibility: unset
    opacity: 1
</style>