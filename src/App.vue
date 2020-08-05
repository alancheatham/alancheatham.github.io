<template>
  <div class="app">
    <div class="nav">
      <div class="left">
        Alan Cheatham
      </div>
      <div class="right">
        <router-link class="link" to="/">About</router-link>
        <router-link class="link" to="/music">Music</router-link>
        <router-link class="link" to="/code">Code</router-link>
        <router-link class="link" to="/resume">Résumé</router-link>
      </div>
    </div>
    <router-view class="page" />
  </div>
</template>

<script>
export default {
  methods: {
    mounted() {
      console.log("hi", this.$route)
    },
  },
}
</script>

<style lang="stylus" scoped>
.app
  width 100%
  height 100%

  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color white
  background #353839
  font-size 17px

  overflow-x hidden
.nav
  display flex
  justify-content space-between
  align-items center
  padding 20px

.link
  margin 15px 0 15px 15px

.page
  background #353839

.router-link-exact-active
  text-decoration underline
</style>
