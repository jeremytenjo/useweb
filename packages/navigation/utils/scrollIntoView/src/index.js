export default function scrollIntoView(id, config = { behavior: 'smooth' }) {
  if (!id)
    return console.error('scrollIntoView error - add a selector as the first parameter')

  const element = document.querySelector(id)
  element.scrollIntoView(config)
}
