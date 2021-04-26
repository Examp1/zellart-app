<template>
  <div class="footer">
      <div class="container df jcsb ">
        <div class="logos">
          <img src="https://via.placeholder.com/210x47" alt="">
          <br>
          <img src="https://via.placeholder.com/135x25" alt="">
        </div>
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Art constructor</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Delivery methods</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"><img src="https://via.placeholder.com/30" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="https://via.placeholder.com/30" alt=""></a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass" scoped>
.footer
  background: rgba(221, 221, 221, 0.3)
  padding: 33px 0px
  .container
    @media (max-width: 768px)
      flex-direction: column
  ul
    list-style-type: none
    padding-left: 0px
    li:not(:last-of-type)
      margin-bottom: 13px
    a
      text-decoration: none 
      font-weight: 500
      font-size: 17px
      line-height: 140%
      text-align: center
      letter-spacing: -0.03em
      color: rgba(#000, .6)
      transition: .3s
      &:hover
        color: #E64A19
</style>