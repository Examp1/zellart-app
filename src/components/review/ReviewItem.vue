<template>
  <div class="review-item df jcsb">
    <div class="l">
      <div class="wrap ait">
        <img src="https://via.placeholder.com/64" alt="" />
        <div class="df fdc">
          <p class="name">
            Tatyana <br />
            mikhailovna 2333
          </p>
          <ul class="star">
            <li v-for="i in 5" :key="i">★</li>
          </ul>
        </div>
      </div>
      <a href="#" class="inst">Review on Instagram</a>
    </div>
    <div class="r">
      <img src="https://via.placeholder.com/111" alt="" />
    </div>
    <div class="bot">
      <p>Was ordered</p>
      <p class="count">3 panel art</p>
      <p class="descr">
        Thank you for your prompt dispatch. The picture is made with high
        quality!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.review-item
    background-color: #F7F7F7
    border-radius: 10px
    padding: 23px
    width: calc(33% - 20px)
    flex-wrap: wrap
    @media (max-width: 1024px)
      width: calc(50% - 20px)
      margin-bottom: 20px
    @media (max-width: 768px)
      width: 100%
      margin-bottom: 15px
.bot
    margin-top: 15px
    p:first-of-type
        font-weight: 300
        font-size: 14px
        line-height: 20px
        letter-spacing: -0.03em
        color: rgba(0, 0, 0, 0.34)
        margin-bottom: 0px
.count
    margin-bottom: 15px
    font-weight: 600
    font-size: 15px
    line-height: 18px
    letter-spacing: -0.03em
    color: #423F40
    margin-top: 0px
.descr
    font-size: 17px
    font-weight: normal
    line-height: 19px
    letter-spacing: -0.03em
    color: #312E2E
.l
    img
        width: 64px
        height: 64px
        border-radius: 50%
        margin-right: 15px
    .name
        font-size: 15px
        line-height: 16px
        letter-spacing: -0.03em
        color: #E64A19
    .wrap
        margin-bottom: 20px
        display: flex
        .star
            padding-left: 0px
            margin-top: 5px
            list-style-type: none
            display: flex
            li
                color: #E64A19
                font-size: 20px
.inst
    border: 1px solid #E64A19
    border-radius: 10px
    padding: 8px 20px
    text-decoration: none
    font-size: 15px
    line-height: 18px
    letter-spacing: -0.03em
    color: #E64A19
.r img
  object-fit: contain
  @media (max-width: 576px)
    width: 70px
</style>