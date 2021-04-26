<template>
  <div class="create-your-art">
    <div class="create-wrap">
      <div class="container">
        <div class="timeline">
          <div class="head">
            <p class="rl">For 4 simple steps</p>
            <p class="title">Create your art</p>
          </div>
          <ul class="body">
            <li v-for="(el, index) in timeline" :key="index">
              <div class="circle">
                {{ el.num }}
              </div>
              <p>{{ el.text }}</p>
            </li>
          </ul>
          <router-link :to="{ name: 'constructor' }" class="btn"
            >Create your art</router-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="advantages df jcsb">
        <li class="df jcsb ait" v-for="(el, index) in advantages" :key="index">
          <img :src="el.icon" alt="" />
          <p>{{ el.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateYourArt",
  data() {
    return {
      timeline: [
        {
          num: "1",
          text: "Upload any photo for painting",
        },
        {
          num: "2",
          text: "Choose some canvas shape for art",
        },
        {
          num: "3",
          text: "Change the interior, create your own interior",
        },
        {
          num: "4",
          text: "Choose needed size and form and then buy",
        },
      ],
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
@import '@/assets/var_and_mix'
.create-your-art
    margin-bottom: 100px
.create-wrap
    margin-top: 100px
    background: url(https://via.placeholder.com/1980x725)
    min-height: 725px
    position: relative
.timeline
    position: absolute
    max-width: 438px
    padding: 34px 56px
    background-color: #fff
    width: 100%
    height: 100%
    @media (max-width: 768px)
      padding: 20px 
    @media (max-width: 576px)
      width: 101%
      left: 0%
.rl
    font-weight: 300
    font-size: 17px
    line-height: 54px
    letter-spacing: -0.04em
    color: rgba(0, 0, 0, 0.39)
    transform: rotate(-180deg)
    writing-mode: vertical-lr
.head
    display: flex
.title
    font-style: normal
    font-weight: 600
    font-size: 46px
    line-height: 54px
    letter-spacing: -0.03em
    max-width: 150px
    color: #275166
.body
    padding-left: 40px
    margin: 30px 0px
    list-style: none
    li
        display: flex
        position: relative
        margin-bottom: 25px
        .circle
            position: absolute
            width: 43px
            height: 43px
            border: 1px solid #000
            border-radius: 50%
            top: 0px
            left: -40px
            display: flex
            justify-content: center
            align-items: center
            background-color: #fff
        p
            max-width: 200px
            margin-left: 20px
            font-weight: 500
            font-size: 19px
            line-height: 26px
            letter-spacing: -0.03em
            color: $g-color
.advantages
    margin-top: 30px
    flex-wrap: wrap
    li
      @media (max-width: 576px)
        width: calc(50% - 10px)
        img
            margin-right: 15px
        p
            max-width: 150px
</style>