<template>
  <div class="resume">
    <header>
      <h1>Alan Cheatham</h1>
      <h2>Software Engineer</h2>
    </header>
    <div class="content">
      <img class="programming left" src="../assets/images/programming.jpg" />
      <div class="section alan left">
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
      <div class="section experience right">
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
              Major contributor on several projects for Ingage:
              <p>
                <span class="ingage-project">Ingage Presentations</span> -
                Desktop application built with Vue and Electron. Allows the user
                to build beautiful interactive presentations using reusable
                components.
              </p>
              <p>
                <span class="ingage-project">Ingage Web</span> - Current version
                started as a prototype created on my free time. Uses Nuxt to
                create a server-side rendered web viewer of the presentations
                using the same components as Ingage Presentations.
              </p>
              <p>
                <span class="ingage-project">Smartstudio</span> - Precursor to
                Ingage Presentations. Online editor to create and view
                presentations using backbone. Helped add new features and unit
                testing.
              </p>
              <p>
                <span class="ingage-project">Windows Mobile Library</span> -
                React / Redux project created for Roche to enable users to view
                their presentations created in Smartstudio on windows tablets.
                Used javascript in Visual Studio.
              </p>
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
              Used Microsoft's .NET framework to add features and maintain EOS
              International's (now owned by SirsiDynix) main product EOS.WEB.
            </div>
          </div>
          <div class="job">
            <div class="job__title"><b>Game Developer</b> at <b>Self</b></div>
            <div class="job__date">
              Ongoing
            </div>
            <div class="job__description">
              Released two games on iOS and Android
              <a
                class="contact__item"
                href="https://apps.apple.com/us/app/pivot-timing-game/id1507306708"
                target="_blank"
              >
                <img class="icon" src="../assets/icons/pivot.png" />
                <span class="icon__label">Pivot</span>
              </a>
              <a
                class="contact__item"
                href="https://apps.apple.com/us/app/poke-a-dot-reflex-game/id929419021"
                target="_blank"
              >
                <img class="icon" src="../assets/icons/pokeadot.png" />
                <span class="icon__label">Poke a Dot</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section education right">
        <h3>
          Education
        </h3>
        <div class="job__title">
          <b>BS Computer Science</b> at <b>Principia College</b>
        </div>
        <div class="job__date">
          Graduated 2012
        </div>
        <div>Computer Science Award 2012</div>
        <a href="/lor.pdf" target="_blank">Letter of Recommendation</a>
      </div>
      <div class="section skills left">
        <h3>
          Skills
        </h3>
        <span class="skill">HTML</span>
        <span class="skill">Javascript</span>
        <span class="skill">CSS</span>
        <span class="skill">Vue</span>
        <span class="skill">Nuxt</span>
        <span class="skill">React</span>
        <span class="skill">Redux</span>
        <span class="skill">Node</span>
        <span class="skill">Electron</span>
        <span class="skill">Knex</span>
        <span class="skill">Lua</span>
      </div>
      <div class="section learning left">
        <h3>
          What I'm Learning
        </h3>
        <span class="skill">Python</span>
        <span class="skill">Swift</span>
      </div>
      <div class="section contact left">
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
          href="https://github.com/alancheatham"
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
  line-height 1.2

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

.skill
  display inline-block

.programming
  width 100%
  max-width 370px
  border-radius 10%
  margin auto

.ingage-project
  font-style italic
  font-weight 300
  color #a5cfde

.job
  margin-bottom 30px

  &__date
    font-size 13px
    font-weight 300
    margin 8px 0
    font-style italic

  &:last-child
    margin-bottom 0

.section
  margin-top 20px

  @media screen and (min-width: 740px)
    margin-top 0

.content
  width 100%
  max-width 800px
  padding 40px 15px 100px

  @media screen and (min-width: 740px)
    display grid
    grid-template auto / 1fr 1fr
    grid-auto-flow column
    grid-gap 20px 40px

.skill
  &:after
    content "\b7"
    padding 4px

  &:last-child:after
    content ""
    padding 0

.experience
  grid-row 1/5

.right
  grid-column 2

.left
  grid-column 1

.contact__item
  display flex
  align-items center
  margin-top 5px

.icon
  width 40px
  border-radius 30%

  &__label
    margin-left 10px
a
  text-decoration underline
  color #a5cfde

  &:hover
    color #517eb9
</style>
