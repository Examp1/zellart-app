<template>
  <div class="BannerBlock">
    <div class="container">
      <div class="wrap">
        <h1>Make your own beutifull art</h1>
        <p>
          Zellart provides a unique opportunity to choose as well as create
          paintings for yourself and as a gift to our loved ones
        </p>
        <a href="#" class="btn">Create your art</a>
        <ul class="advantages df jcsb">
          <li
            class="df ait"
            v-for="(el, index) in advantages"
            :key="index"
          >
            <img :src="el.icon" alt="" />
            <p>{{ el.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advantages: [
        {
          icon: "https://via.placeholder.com/40px",
          text: "Create art in the interior online",
        },
        {
          icon: "https://via.placeholder.com/40px",
          text: "High quality at an affordable price",
        },
        {
          icon: "https://via.placeholder.com/40px",
          text: "Exquisite handmade",
        },
        {
          icon: "https://via.placeholder.com/40px",
          text: "Best quality materials",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.BannerBlock
    background: url(https://via.placeholder.com/1920x768/000)
    margin-bottom: 100px
.wrap
    padding-top: 130px
    max-width: 600px
    min-height: 768px
    h1
        font-weight: bold
        font-size: 52px
        line-height: 55px
        letter-spacing: -0.03em
        color: #FFFFFF
        max-width: 420px
        margin-bottom: 21px
    p
        font-size: 18px
        line-height: 29px
        letter-spacing: -0.03em
        color: #AAAAAA
        margin-bottom: 28px
    .btn
        display: inline-block
        margin-bottom: 57px
    .advantages
        display: flex
        flex-wrap: wrap
        li
            width: calc(50% - 10px)
            margin-bottom: 10px
            img
                margin-right: 15px
            p
                margin-bottom: 0px
</style>