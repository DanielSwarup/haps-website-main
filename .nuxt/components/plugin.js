import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  LoadingBar: () => import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components/loading-bar" */).then(c => wrapFunctional(c.default || c)),
  Location: () => import('../..\\components\\Location.vue' /* webpackChunkName: "components/location" */).then(c => wrapFunctional(c.default || c)),
  SmallBanner: () => import('../..\\components\\SmallBanner.vue' /* webpackChunkName: "components/small-banner" */).then(c => wrapFunctional(c.default || c)),
  AboutSection2: () => import('../..\\components\\About\\AboutSection2.vue' /* webpackChunkName: "components/about-section2" */).then(c => wrapFunctional(c.default || c)),
  AboutSmallLanding: () => import('../..\\components\\About\\SmallLanding.vue' /* webpackChunkName: "components/about-small-landing" */).then(c => wrapFunctional(c.default || c)),
  JoinSectionOne: () => import('../..\\components\\Join\\JoinSectionOne.vue' /* webpackChunkName: "components/join-section-one" */).then(c => wrapFunctional(c.default || c)),
  PeopleTeam: () => import('../..\\components\\People\\Team.vue' /* webpackChunkName: "components/people-team" */).then(c => wrapFunctional(c.default || c)),
  Publication: () => import('../..\\components\\Publication\\Publication.vue' /* webpackChunkName: "components/publication" */).then(c => wrapFunctional(c.default || c)),
  LandingSection: () => import('../..\\components\\LandingPage\\LandingSection.vue' /* webpackChunkName: "components/landing-section" */).then(c => wrapFunctional(c.default || c)),
  LandingPageResearchQuestion: () => import('../..\\components\\LandingPage\\ResearchQuestion.vue' /* webpackChunkName: "components/landing-page-research-question" */).then(c => wrapFunctional(c.default || c)),
  LandingPageSmallPressReleases: () => import('../..\\components\\LandingPage\\SmallPressReleases.vue' /* webpackChunkName: "components/landing-page-small-press-releases" */).then(c => wrapFunctional(c.default || c)),
  LandingPageTeamCarousel: () => import('../..\\components\\LandingPage\\TeamCarousel.vue' /* webpackChunkName: "components/landing-page-team-carousel" */).then(c => wrapFunctional(c.default || c)),
  PressReleasesAllPressReleases: () => import('../..\\components\\Press-Releases\\AllPressReleases.vue' /* webpackChunkName: "components/press-releases-all-press-releases" */).then(c => wrapFunctional(c.default || c)),
  PressReleasesHeroPost: () => import('../..\\components\\Press-Releases\\HeroPost.vue' /* webpackChunkName: "components/press-releases-hero-post" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
