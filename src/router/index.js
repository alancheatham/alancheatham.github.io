import Vue from "vue"
import VueRouter from "vue-router"
import About from "../views/About.vue"
import Code from "../views/Code.vue"
import Music from "../views/Music.vue"
import Resume from "../views/Resume.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/code",
    name: "Code",
    component: Code,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
]

const router = new VueRouter({
  routes,
})

export default router
