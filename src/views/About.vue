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
          I live in San Diego, California. I like creating, learning, music,
          coding, sports, habits, spirituality, breathing, questioning, the
          present, the future, challenges, and a healthy lifestyle.
        </div>
        <div class="contact">
          <a
            class="contact__item"
            href="https://instagram.com/alancheatham"
            target="_blank"
          >
            <img class="icon" src="../assets/icons/instagram.png" />
          </a>
          <a
            class="contact__item"
            href="mailto:alancheatham@gmail.com"
            target="_blank"
          >
            <img class="icon" src="../assets/icons/email.png" />
          </a>
          <a
            class="contact__item"
            href="https://codepen.io/alancheatham"
            target="_blank"
          >
            <img class="icon" src="../assets/icons/codepen.png" />
          </a>
          <a
            class="contact__item"
            href="https://github.com/alancheatham"
            target="_blank"
          >
            <img class="icon" src="../assets/icons/github.png" />
          </a>
          <a
            class="contact__item"
            href="https://www.linkedin.com/in/alancheatham/"
            target="_blank"
          >
            <img class="icon" src="../assets/icons/linkedin.png" />
          </a>
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

.content
  max-width 330px
  width 100%
  padding 0 15px 15px
  display flex
  flex-direction column
  align-items center

.portrait
  width 300px
  height 300px
  border-radius 100%
  border 2px solid #a5cfde
  overflow hidden
  box-shadow 6px 6px 24px 5px rgba(0,0,0,.3)

img
  width 100%

.info
  padding-top 50px

.header
  font-size 25px
  color #a5cfde

.body
  padding-top 20px
  line-height 1.2

.contact
  display flex
  align-items center
  justify-content space-between
  margin-top 25px

.icon
  width 40px
  border-radius 30%
  transition ease-in 0.1s

  &:hover
    transform scale(1.1)
</style>
