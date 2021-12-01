import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2145f4b4 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _49157bb3 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _0153fa78 = () => interopDefault(import('..\\pages\\People.vue' /* webpackChunkName: "pages/People" */))
const _176eb31f = () => interopDefault(import('..\\pages\\Press-Releases.vue' /* webpackChunkName: "pages/Press-Releases" */))
const _289a2220 = () => interopDefault(import('..\\pages\\Privacy-Policy.vue' /* webpackChunkName: "pages/Privacy-Policy" */))
const _8be32220 = () => interopDefault(import('..\\pages\\Publications.vue' /* webpackChunkName: "pages/Publications" */))
const _6ce8a0ce = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _2145f4b4,
    name: "About"
  }, {
    path: "/join",
    component: _49157bb3,
    name: "join"
  }, {
    path: "/People",
    component: _0153fa78,
    name: "People"
  }, {
    path: "/Press-Releases",
    component: _176eb31f,
    name: "Press-Releases"
  }, {
    path: "/Privacy-Policy",
    component: _289a2220,
    name: "Privacy-Policy"
  }, {
    path: "/Publications",
    component: _8be32220,
    name: "Publications"
  }, {
    path: "/",
    component: _6ce8a0ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })
  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

