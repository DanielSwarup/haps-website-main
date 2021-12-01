import { getMatchedComponents, setScrollRestoration } from './utils'

if (process.client) {
  if ('scrollRestoration' in window.history) {
    setScrollRestoration('manual')

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      setScrollRestoration('auto')
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      setScrollRestoration('manual')
    })
  }
}

function shouldScrollToTop(route) {
   const Pages = getMatchedComponents(route)
   if (Pages.length === 1) {
     const { options = {} } = Pages[0]
     return options.scrollToTop !== false
   }
   return Pages.some(({ options }) => options && options.scrollToTop)
}

export default function (to, from, savedPosition) {
  return ({ x: 0, y: 0 })
}
