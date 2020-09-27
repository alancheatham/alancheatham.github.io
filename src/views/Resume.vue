<template>
  <div class="resume">
    <header>
      <h1>Alan Cheatham</h1>
      <h2>Software Engineer</h2>
    </header>
    <div class="content">
      <img
        class="programming left"
        src="../assets/images/programming.jpg"
        width="365"
        height="274"
      />
      <div class="section alan left">
        <h3>
          Why Alan?
        </h3>
        <p>
          Hi, I'm Alan! I live in San Diego. I primarily work on the front end,
          and am proficient in HTML, CSS, JavaScript. I'm equal parts big
          picture and detail oriented, and have experience with several popular
          frameworks.
        </p>
        <p>
          I have many interests, several of which have helped me become a better
          programmer. I'm a multi-instrumentalist and love creativity and
          improvisation. I've captained several sports teams which made me a
          better leader. I look forward to challenges and motivate those around
          me, and am an effective and honest communicator.
        </p>
        <p>
          After college I pursued professional baseball for a couple years, and
          spent the second half of 2019 playing music and touring with my band.
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
              October 2015 - April 2020
            </div>
            <div class="job__description">
              Major contributor on several projects for Ingage
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
                React / Redux project created for Roche that enables users to
                view their presentations created in Smartstudio on windows
                tablets. Used javascript in Visual Studio.
              </p>
              <p>
                <span class="ingage-project">WML PDF Generator</span> - Node
                project that uses Puppeteer to take screenshots of Roche
                Smartstudio presentations in all possible states. Got the
                project up and running.
              </p>
            </div>
          </div>
          <div class="job">
            <div class="job__title">
              <b>Junior Software Engineer</b> at <b>EOS International</b>
            </div>
            <div class="job__date">
              September 2012 - February 2014
            </div>
            <div class="job__description">
              Used Microsoft's .NET framework to add features and maintain EOS
              International's (now owned by SirsiDynix) main library system
              EOS.WEB.
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
              <p>
                I enjoy thinking of and making "brain" games that test reflexes,
                timing, and quick thinking.
              </p>
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
      <div class="section languages right">
        <h3>
          Languages
        </h3>
        <div>English</div>
        <div>Spanish</div>
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
        <span class="skill">Unit Testing</span>
        <span class="skill">Docker</span>
        <span class="skill">Socket.IO</span>
        <span class="skill">Lua</span>
      </div>
      <div class="section learning left">
        <h3>
          What I'm Learning
        </h3>
        <span class="skill">Chrome Extensions</span>
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

<style lang="stylus" scoped>
.resume
  display flex
  flex-direction column
  align-items center
  padding-bottom 20px
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

.alan
  margin-top 20px

.skill
  display inline-block

.programming
  max-width 100%
  height auto
  border-radius 10%
  margin auto
  display block
  border 2px solid #a5cfde

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
  margin-bottom 20px

.content
  width 100%
  max-width 800px
  padding 40px 15px 40px

  @media screen and (min-width: 740px)
    display grid
    grid-template auto / 1fr 1fr
    grid-auto-flow column
    grid-column-gap 40px

.skill
  &:after
    content "\b7"
    padding 4px

  &:last-child:after
    content ""
    padding 0

.experience
  grid-row 1/6

.right
  grid-column 2

.left
  grid-column 1

.contact
  grid-row 5/10

.contact__item
  display flex
  align-items center
  margin-top 5px

.icon
  width 40px
  border-radius 30%
  transition ease-in 0.1s

  &__label
    margin-left 10px

  &:hover
    transform scale(1.1)
a
  text-decoration underline
  color #a5cfde

  &:hover
    color #517eb9
</style>
