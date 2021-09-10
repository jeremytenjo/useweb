/**
 * @example
 * changeFavicon('https://www.flaticon.com/svg/static/icons/svg/3199/3199830.svg')
 */
export default function ChangeFavicon(image) {
  const link =
    window.document.querySelector("link[rel*='icon']") ||
    window.document.createElement('link')
  link.type = 'image'
  link.rel = 'shortcut icon'
  link.href = image

  window.document.getElementsByTagName('head')[0].appendChild(link)
}
