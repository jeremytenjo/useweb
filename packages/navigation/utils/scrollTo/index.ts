/**
 * @example
 * scrollTo('#hello', 10)
 */
export default function scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector)
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}
