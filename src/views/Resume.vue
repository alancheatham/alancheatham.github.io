<template>
  <div class="resume">
    <header>
      <h1>Alan Cheatham</h1>
      <h2>Software Engineer</h2>
    </header>
    <div class="content">
      <div class="alan left">
        <h3>
          Why Alan?
        </h3>
        <p>
          Hi, I'm Alan! I live in San Diego, California. I like to create
          amazing user experiences. I'm proficient in HTML, CSS, JavaScript, and
          experienced with several popular frameworks. While I specialize in
          front end and UI work, I'm not afraid of jumping in to help in
          middleware and backend.
        </p>
        <p>
          I'm passionate about learning new technologies, mentoring those around
          me, and committing to an ever-increasing level of quality. I value
          effective communication, team collaboration, and knowledge sharing.
        </p>
      </div>
      <div class="experience right">
        <h3>
          Experience
        </h3>
        <div class="jobs">
          <div class="job">
            <div class="job__title">
              <b>Software Engineer</b> at <b>Ingage</b>
            </div>
            <div class="job__date">
              October 2015 - April 2020 (4 years, 7 months)
            </div>
            <div class="job__description">
              Basically did everything for this company
            </div>
          </div>
          <div class="job">
            <div class="job__title">
              <b>Junior Software Engineer</b> at <b>EOS International</b>
            </div>
            <div class="job__date">
              September 2012 - February 2014 (1 year, 6 months)
            </div>
            <div class="job__description">
              Basically did everything for this company
            </div>
          </div>
        </div>
      </div>
      <div class="education right">
        <h3>
          Education
        </h3>
      </div>
      <div class="contact left">
        <h3>
          Contact
        </h3>
        <a
          class="contact__item"
          href="mailto:alancheatham@gmail.com"
          target="_blank"
        >
          <img class="icon" src="../assets/icons/email.png" />
          <span class="icon__label">alancheatham@gmail.com</span>
        </a>
        <a
          class="contact__item"
          href="https://codepen.io/alancheatham"
          target="_blank"
        >
          <img class="icon" src="../assets/icons/codepen.png" />
          <span class="icon__label">alancheatham</span>
        </a>
        <a
          class="contact__item"
          href="https://codepen.io/alancheatham"
          target="_blank"
        >
          <img class="icon" src="../assets/icons/github.png" />
          <span class="icon__label">alancheatham</span>
        </a>
        <a
          class="contact__item"
          href="https://www.linkedin.com/in/alancheatham/"
          target="_blank"
        >
          <img class="icon" src="../assets/icons/linkedin.png" />
          <span class="icon__label">alancheatham</span>
        </a>
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
.resume
  display flex
  flex-direction column
  align-items center
  padding 20px

header
  text-align center

h1
  font-size 35px
  margin-bottom 10px
  color #a5cfde

h2
  font-size 20px
  color #a5cfde

h3
  font-weight bold
  color #a5cfde
  margin 0 0 10px

p
  margin-top 10px

b
  font-weight bold

.job
  margin-bottom 30px

  &__date
    font-size 13px
    font-style italic
    font-weight 300
    margin 8px 0

.content
  width 100%
  max-width 800px
  padding 30px 15px 0

  @media screen and (min-width: 740px)
    display grid
    grid-template auto / 1fr 1fr
    grid-auto-flow column
    grid-gap 40px

.experience
  grid-row 1/10

.right
  grid-column 2

.left
  grid-column 1

.contact__item
  display flex
  align-items center
  margin-top 5px

  &:hover .icon__label
    color #517eb9

.icon
  width 40px
  border-radius 30%

  &__label
    margin-left 10px
    text-decoration underline
    color #a5cfde
</style>
