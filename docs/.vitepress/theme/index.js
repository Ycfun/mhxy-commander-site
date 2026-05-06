import DefaultTheme from 'vitepress/theme'
import './custom.css'

let currentObserver = null

function setupSidebarAnchorHighlight() {
  if (typeof window === 'undefined') return
  if (currentObserver) {
    currentObserver.disconnect()
    currentObserver = null
  }

  // 收集左栏中所有 hash 型链接
  const anchorLinks = Array.from(
    document.querySelectorAll('.VPSidebar a.link[href*="#"]')
  ).filter((a) => {
    const href = a.getAttribute('href') || ''
    const hashIdx = href.indexOf('#')
    return hashIdx !== -1 && hashIdx < href.length - 1
  })
  if (anchorLinks.length === 0) return

  const hrefToLink = new Map()
  const idToLink = new Map()
  anchorLinks.forEach((a) => {
    const href = a.getAttribute('href')
    hrefToLink.set(href, a)
    const id = decodeURIComponent(href.split('#')[1] || '')
    if (id) idToLink.set(id, a)
  })

  const targets = Array.from(idToLink.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean)
  if (targets.length === 0) return

  const applyActive = (id) => {
    anchorLinks.forEach((a) => a.classList.remove('anchor-active'))
    const link = idToLink.get(id)
    if (link) link.classList.add('anchor-active')
  }

  const visible = new Set()
  currentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id)
        else visible.delete(entry.target.id)
      })
      if (visible.size > 0) {
        const topId = targets
          .map((t) => t.id)
          .find((id) => visible.has(id))
        if (topId) applyActive(topId)
      } else {
        // 不在任一目标区间内，取最近通过顶部的那个
        const scrollY = window.scrollY
        let closest = null
        let closestTop = -Infinity
        targets.forEach((t) => {
          const top = t.getBoundingClientRect().top + scrollY
          if (top <= scrollY + 100 && top > closestTop) {
            closestTop = top
            closest = t.id
          }
        })
        if (closest) applyActive(closest)
      }
    },
    { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
  )

  targets.forEach((t) => currentObserver.observe(t))
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    const trigger = () => {
      // 等 DOM 渲染完
      setTimeout(setupSidebarAnchorHighlight, 300)
    }
    router.onAfterRouteChange = trigger
    trigger()
  },
}
