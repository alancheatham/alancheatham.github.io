<template>
  <div class="music">
    <div class="alan">
      <div class="header">Music</div>
      <div class="description">
        I'm a multi-instrumentalist, composer, and producer.
      </div>
      <div class="container">
        <div class="scale">
          <iframe
            class="ytplayer"
            type="text/html"
            src="https://www.youtube.com/embed/wUr6N72CS7s?origin=http://alancheatham.com"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="bands">
      <div class="header">Bands</div>
      <div class="band yak">
        <img class="band__image" src="../assets/images/casualyak.jpg" />
        <div class="band__content">
          <div class="header band__header">Casual Yak</div>
        </div>
      </div>
      <div class="band archnar">
        <img class="band__image" src="../assets/images/archnarcissist.png" />
        <div class="band__content">
          <div class="header band__header">Arch Narcissist</div>
        </div>
      </div>
      <div class="band chunky">
        <img class="band__image" src="../assets/images/chunkyhustle.jpg" />
        <div class="band__content">
          <div class="header band__header">Chunky Hustle Brass Band</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.alan
  width 100%
  display flex
  flex-direction column
  align-items center
  padding-top 100px

.container
  width 100%
  max-width 840px
  padding-top 30px

.scale
  position relative
  padding-bottom 56.25%

.ytplayer
  position absolute
  top 0
  left 0
  width 100%
  height 100%

.header
  font-size 35px
  text-align center
  margin-bottom 30px
  color #a5cfde

.bands
  margin-top 50px

.band
  height calc(100vh)
  min-height 600px
  position relative

.band__image
  width 100%
  height 100%
  object-fit cover
  opacity 0.5

.band__content
  position absolute
  top 0
  left 0
  width 100%
  display flex
  flex-direction column
  align-items center

.band__header
  font-size 70px
  color white
  padding-top 100px
  font-weight bold
</style>
