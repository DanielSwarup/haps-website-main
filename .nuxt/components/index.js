import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'
export { default as Location } from '../..\\components\\Location.vue'
export { default as SmallBanner } from '../..\\components\\SmallBanner.vue'
export { default as AboutSection2 } from '../..\\components\\About\\AboutSection2.vue'
export { default as AboutSmallLanding } from '../..\\components\\About\\SmallLanding.vue'
export { default as JoinSectionOne } from '../..\\components\\Join\\JoinSectionOne.vue'
export { default as PeopleTeam } from '../..\\components\\People\\Team.vue'
export { default as Publication } from '../..\\components\\Publication\\Publication.vue'
export { default as LandingSection } from '../..\\components\\LandingPage\\LandingSection.vue'
export { default as LandingPageResearchQuestion } from '../..\\components\\LandingPage\\ResearchQuestion.vue'
export { default as LandingPageSmallPressReleases } from '../..\\components\\LandingPage\\SmallPressReleases.vue'
export { default as LandingPageTeamCarousel } from '../..\\components\\LandingPage\\TeamCarousel.vue'
export { default as PressReleasesAllPressReleases } from '../..\\components\\Press-Releases\\AllPressReleases.vue'
export { default as PressReleasesHeroPost } from '../..\\components\\Press-Releases\\HeroPost.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingBar = import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components/loading-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyLocation = import('../..\\components\\Location.vue' /* webpackChunkName: "components/location" */).then(c => wrapFunctional(c.default || c))
export const LazySmallBanner = import('../..\\components\\SmallBanner.vue' /* webpackChunkName: "components/small-banner" */).then(c => wrapFunctional(c.default || c))
export const LazyAboutSection2 = import('../..\\components\\About\\AboutSection2.vue' /* webpackChunkName: "components/about-section2" */).then(c => wrapFunctional(c.default || c))
export const LazyAboutSmallLanding = import('../..\\components\\About\\SmallLanding.vue' /* webpackChunkName: "components/about-small-landing" */).then(c => wrapFunctional(c.default || c))
export const LazyJoinSectionOne = import('../..\\components\\Join\\JoinSectionOne.vue' /* webpackChunkName: "components/join-section-one" */).then(c => wrapFunctional(c.default || c))
export const LazyPeopleTeam = import('../..\\components\\People\\Team.vue' /* webpackChunkName: "components/people-team" */).then(c => wrapFunctional(c.default || c))
export const LazyPublication = import('../..\\components\\Publication\\Publication.vue' /* webpackChunkName: "components/publication" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingSection = import('../..\\components\\LandingPage\\LandingSection.vue' /* webpackChunkName: "components/landing-section" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingPageResearchQuestion = import('../..\\components\\LandingPage\\ResearchQuestion.vue' /* webpackChunkName: "components/landing-page-research-question" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingPageSmallPressReleases = import('../..\\components\\LandingPage\\SmallPressReleases.vue' /* webpackChunkName: "components/landing-page-small-press-releases" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingPageTeamCarousel = import('../..\\components\\LandingPage\\TeamCarousel.vue' /* webpackChunkName: "components/landing-page-team-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyPressReleasesAllPressReleases = import('../..\\components\\Press-Releases\\AllPressReleases.vue' /* webpackChunkName: "components/press-releases-all-press-releases" */).then(c => wrapFunctional(c.default || c))
export const LazyPressReleasesHeroPost = import('../..\\components\\Press-Releases\\HeroPost.vue' /* webpackChunkName: "components/press-releases-hero-post" */).then(c => wrapFunctional(c.default || c))
