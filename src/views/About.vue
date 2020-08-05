<template>
  <div class="home">
    <div class="content">
      <div class="portrait">
        <img src="../assets/images/alan.jpg" />
      </div>
      <div class="info">
        <div class="header">
          Hi, I'm Alan!
        </div>
        <div class="body">
          I live in San Diego, California. I enjoy learning and pushing myself
          and soccer and baseball and programming and music and saxophone and
          internet
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="stylus" scoped>
.home
  display flex
  justify-content center
  padding-top 30px

.content
  max-width 350px
  width 100%
  padding 15px
  display flex
  flex-direction column
  align-items center

.portrait
  width 300px
  height 300px
  border-radius 100%
  overflow hidden
  box-shadow 6px 6px 24px 5px rgba(0,0,0,.3)

img
  width 100%

.info
  padding-top 50px

.header
  font-size 25px

.body
  padding-top 20px
  line-height 1.2
</style>
